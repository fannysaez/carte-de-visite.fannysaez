# 12 — Explications techniques — script.js

Lecture commentée du fichier `script.js` — chaque bloc est expliqué dans le détail pour comprendre les choix d'implémentation.

---

## Structure générale

```js
function flipCard() { ... }

document.addEventListener('DOMContentLoaded', function () {
    // tout le code s'exécute ici
});
```

**Pourquoi `DOMContentLoaded` ?**
Le script est placé juste avant `</body>`, donc le DOM est déjà parsé quand il s'exécute. Le wrapper `DOMContentLoaded` est une sécurité supplémentaire : il garantit que `querySelector` et `querySelectorAll` trouvent bien les éléments, quelle que soit la vitesse de rendu du navigateur.

---

## 1. Fonction `flipCard()`

```js
function flipCard() {
    const card = document.getElementById('card');
    const isFlipped = card.classList.toggle('is-flipped');
    card.setAttribute(
        'aria-label',
        isFlipped
            ? 'Retourner la carte (verso affiché)'
            : 'Retourner la carte'
    );
}
```

| Ligne | Explication |
|---|---|
| `getElementById('card')` | Cible l'élément `.card-3d` par son id — plus rapide que `querySelector` |
| `classList.toggle('is-flipped')` | Ajoute la classe si absente, la retire si présente — retourne `true`/`false` |
| `setAttribute('aria-label', ...)` | Met à jour le label accessible selon l'état courant de la carte |

**Pourquoi une fonction séparée ?**
La même logique de flip est déclenchée par deux événements différents (clic + touche clavier). Extraire dans une fonction évite la duplication de code.

---

## 2. Gestionnaire de clic — flip card

```js
card.addEventListener('click', function (e) {
    if (
        e.target.closest('a') ||
        e.target.closest('.card-footer') ||
        e.target.closest('.skill-tabs') ||
        e.target.closest('.skill-pagination') ||
        e.target.closest('.accordion-toggle')
    ) return;
    flipCard();
});
```

**`e.target.closest(selector)`** remonte le DOM depuis l'élément cliqué jusqu'à trouver un ancêtre correspondant au sélecteur (ou `null`).

| Sélecteur exclu | Raison |
|---|---|
| `a` | Les liens profils/réseaux sociaux doivent s'ouvrir, pas flipper |
| `.card-footer` | Zone de copyright — clic neutre |
| `.skill-tabs` | Les onglets compétences doivent changer de panneau |
| `.skill-pagination` | Les boutons pagination doivent naviguer dans les tags |
| `.accordion-toggle` | Les boutons +/− doivent ouvrir l'accordéon |

Sans ces exclusions, tout clic sur la carte retournerait la carte, rendant les éléments interactifs du verso inutilisables.

---

## 3. Gestionnaire clavier — accessibilité

```js
card.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        flipCard();
    }
});
```

| Ligne | Explication |
|---|---|
| `e.key === 'Enter' \|\| e.key === ' '` | Les deux touches standard d'activation d'un bouton au clavier |
| `e.preventDefault()` | Empêche le comportement par défaut de `Space` (scroll de page) |
| `flipCard()` | Déclenche le même flip que le clic souris |

**Pourquoi c'est important ?**
La carte est un élément `<div role="button">` — sans ce gestionnaire, un utilisateur naviguant au clavier ne pourrait pas la retourner.

---

## 4. Accordéon — initialisation

```js
const allAccItems = document.querySelectorAll('.acc-item');
```

`querySelectorAll` retourne une `NodeList` statique de tous les items accordéon — les 4 de "À propos" + les 3 de "Pourquoi la CDA ?" sont dans la même liste. C'est intentionnel : l'exclusivité est **globale** (un seul item ouvert sur les 7).

---

## 5. Accordéon — gestionnaire par bouton

```js
document.querySelectorAll('.accordion-toggle').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        e.stopPropagation();
        ...
    });
});
```

**`e.stopPropagation()`** empêche l'événement clic de remonter jusqu'à l'élément `.card-3d`. Sans lui, le clic sur `+` déclencherait aussi le flip card.

> Note : le gestionnaire de clic de la carte vérifie aussi `e.target.closest('.accordion-toggle')` — c'est une double protection. Si `stopPropagation` était retiré, la vérification `closest` prendrait le relais.

---

## 6. Accordéon — logique d'ouverture/fermeture

```js
const item       = btn.closest('.acc-item');
const body       = item.querySelector('.acc-body');
const isExpanded = btn.getAttribute('aria-expanded') === 'true';
```

| Variable | Valeur |
|---|---|
| `item` | L'élément `<li class="acc-item">` parent du bouton cliqué |
| `body` | Le `<div class="acc-body">` à afficher/masquer |
| `isExpanded` | `true` si l'item est déjà ouvert, `false` sinon |

L'état est lu depuis `aria-expanded` (et non depuis la présence de la classe `hidden`) — cela maintient l'attribut ARIA comme **source de vérité unique**.

---

## 7. Accordéon — exclusivité globale

```js
if (!isExpanded) {
    allAccItems.forEach(function (other) {
        if (other !== item) {
            other.querySelector('.acc-body').classList.add('hidden');
            const otherBtn = other.querySelector('.accordion-toggle');
            otherBtn.setAttribute('aria-expanded', 'false');
            otherBtn.textContent = '+';
        }
    });
}
```

Ce bloc s'exécute **uniquement à l'ouverture** (`!isExpanded`). Il parcourt tous les items et ferme ceux qui ne sont pas l'item courant.

**Pourquoi ce choix d'architecture ?**
La carte a une hauteur fixe (`min(520px, 90vh)`). Si deux corps d'accordéon étaient ouverts simultanément, le contenu dépasserait et une barre de défilement apparaîtrait — ce qui rompt le design carte de visite.

---

## 8. Accordéon — bascule de l'item courant

```js
body.classList.toggle('hidden', isExpanded);
btn.setAttribute('aria-expanded', isExpanded ? 'false' : 'true');
btn.textContent = isExpanded ? '+' : '−';
```

| Expression | Si `isExpanded = false` (ouverture) | Si `isExpanded = true` (fermeture) |
|---|---|---|
| `classList.toggle('hidden', false)` | Retire `hidden` → corps visible | — |
| `classList.toggle('hidden', true)` | — | Ajoute `hidden` → corps masqué |
| `aria-expanded` | `"true"` | `"false"` |
| `textContent` | `−` (U+2212, moins typographique) | `+` |

Le `−` utilisé est le **signe moins typographique** (U+2212), plus élégant visuellement que le trait d'union `-`.

---

## 9. Onglets compétences — initialisation

```js
const tabs      = document.querySelectorAll('.skill-tab');
const tagItems  = Array.from(document.querySelectorAll('.tag-list li'));
const PAGE_SIZE = { outils: 6 };
let currentFilter = 'front';
let currentPage   = 1;
```

| Variable | Rôle |
|---|---|
| `tabs` | Les 3 boutons onglets (Frontend, Backend, Outils) |
| `tagItems` | Tous les tags de compétences convertis en `Array` pour `.filter()` |
| `PAGE_SIZE` | Seul l'onglet "Outils" a une pagination (6 tags/page) — les autres affichent tout |
| `currentFilter` | Onglet actif par défaut : `'front'` |
| `currentPage` | Page courante pour la pagination |

**Pourquoi `Array.from()` ?**
`querySelectorAll` retourne une `NodeList` qui ne supporte pas `.filter()`. `Array.from()` la convertit en tableau natif pour pouvoir filtrer par `dataset.cat`.

---

## 10. Onglets — fonction `applyFilter`

```js
function applyFilter(filter, page) {
    const filtered   = getFiltered(filter);
    const pageSize   = PAGE_SIZE[filter] || filtered.length;
    const totalPages = Math.ceil(filtered.length / pageSize);
    const start      = (currentPage - 1) * pageSize;
    const end        = start + pageSize;

    tagItems.forEach(item => { item.style.display = 'none'; });
    filtered.slice(start, end).forEach(item => { item.style.display = ''; });
    ...
}
```

| Ligne | Explication |
|---|---|
| `PAGE_SIZE[filter] \|\| filtered.length` | Si pas de pagination définie pour cet onglet, afficher tous les items |
| `Math.ceil(...)` | Arrondi supérieur pour ne pas perdre la dernière page incomplète |
| `item.style.display = 'none'` | Masque tous les tags d'abord |
| `filtered.slice(start, end)` | Découpe le tableau pour n'afficher que la page courante |
| `item.style.display = ''` | Remet l'affichage par défaut (hérite du CSS) plutôt que de forcer `'block'` |

---

<p align="center">
  <a href="11-deploiement.md"><img src="https://img.shields.io/badge/-PR%C3%89C%C3%89DENT-0d8f91?style=for-the-badge" alt="Précédent"></a> &nbsp;&nbsp; <a href="13-maquette-figma.md"><img src="https://img.shields.io/badge/-SUIVANT-0d8f91?style=for-the-badge" alt="Suivant"></a>
</p>
