# 07 — JavaScript

Le fichier `script.js` contient deux comportements distincts, sans dépendance externe.

---

## 1. Flip Card

```js
const card = document.querySelector('.card-3d');

document.addEventListener('click', function (e) {
    if (e.target.closest('.accordion-toggle')) return; // ne pas flipper sur accordéon
    card.classList.toggle('is-flipped');
});
```

- Clic n'importe où sur la carte → bascule la classe `.is-flipped`
- Exception : clic sur un bouton `.accordion-toggle` ignoré (`e.target.closest`)
- La transition CSS (`0.82s cubic-bezier`) gère l'animation

---

## 2. Accordéon exclusif global

```js
const allAccItems = document.querySelectorAll('.acc-item');

document.querySelectorAll('.accordion-toggle').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        e.stopPropagation(); // empêche le flip card de se déclencher

        const item       = btn.closest('.acc-item');
        const body       = item.querySelector('.acc-body');
        const isExpanded = btn.getAttribute('aria-expanded') === 'true';

        // Ferme TOUS les autres items (toutes sections confondues)
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

        // Bascule l'item courant
        body.classList.toggle('hidden', isExpanded);
        btn.setAttribute('aria-expanded', isExpanded ? 'false' : 'true');
        btn.textContent = isExpanded ? '+' : '−';
    });
});
```

### Pourquoi exclusif global ?

Les 7 items (4 dans "À propos" + 3 dans "Pourquoi la CDA ?") partagent la même logique : **un seul ouvert à la fois** sur l'ensemble du verso. Cela évite tout débordement vertical et donc l'apparition d'une barre de défilement.

---

## 3. Section Toggles

Les sections du verso (À propos, Pourquoi la CDA, Motivation) sont repliées par défaut et s'ouvrent via `<button class="sec-toggle">`.

```js
document.querySelectorAll('.sec-toggle').forEach(function (btn) {
    const list = document.getElementById(btn.getAttribute('aria-controls'));
    list.classList.add('sec-collapsed'); // replié sans transition au chargement

    btn.addEventListener('click', function (e) {
        e.stopPropagation();
        const isExpanded = btn.getAttribute('aria-expanded') === 'true';
        list.classList.toggle('sec-collapsed', isExpanded);
        btn.setAttribute('aria-expanded', isExpanded ? 'false' : 'true');
    });
});
```

- Replié sans animation visible au chargement (`transitionDuration: "0s"` puis reset)
- Ferme les accordéons ouverts à l'intérieur quand la section se replie

---

## 4. Modale — Plus d'infos

Chaque item d'accordéon expose un bouton `.acc-more-btn` qui ouvre une `<dialog>` native avec le texte long (`data-long`).

```js
document.querySelectorAll('.acc-more-btn').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        e.stopPropagation();
        const body  = btn.closest('.acc-item').querySelector('.acc-body');
        const title = btn.closest('.acc-item').querySelector('.acc-title');
        modalTitle.textContent = title.textContent.trim();
        modalText.textContent  = body.dataset.long || body.textContent.trim();
        modal.showModal();
    });
});
```

- `modal.showModal()` — API native HTML5, gère focus, backdrop et Escape automatiquement
- Fermeture : clic sur `.modal-close` ou clic en dehors (`e.target === modal`)
- `aria-live="polite"` sur `#modal-title` — signale le changement de titre aux lecteurs d'écran

---

## 5. Filtres compétences + pagination

La section "Stack technique" filtre les tags par catégorie et pagine les résultats.

```js
const PAGE_SIZE = { outils: 6 }; // pagination uniquement pour "outils" (26 entrées)

function applyFilter(filter, page) {
    const filtered   = tagItems.filter(item => item.dataset.cat === filter);
    const pageSize   = PAGE_SIZE[filter] || filtered.length;
    const totalPages = Math.ceil(filtered.length / pageSize);
    const start      = (page - 1) * pageSize;

    tagItems.forEach(item => item.style.display = 'none');
    filtered.slice(start, start + pageSize).forEach(item => item.style.display = '');

    pagination.style.display = totalPages > 1 ? 'flex' : 'none';
}
```

- Filtre actif au chargement : `front`
- Pagination visible uniquement pour `outils` (26 entrées — 6 par page)
- `aria-selected` mis à jour sur chaque tab actif

---

## Accessibilité JS

| Attribut | Valeur initiale | Valeur après action |
|---|---|---|
| `aria-expanded` (accordéon) | `"false"` | `"true"` |
| `aria-expanded` (sec-toggle) | `"false"` | `"true"` |
| `aria-selected` (skill tab) | `"false"` | `"true"` |
| `textContent` bouton accordéon | `+` | `−` |
| `aria-label` de la carte | `"Carte de visite interactive — appuyer pour retourner"` | `"Retourner la carte (verso affiché)"` |

---

<p align="center">
  <a href="06-css-architecture.md"><img src="https://img.shields.io/badge/-PR%C3%89C%C3%89DENT-0d8f91?style=for-the-badge" alt="Précédent"></a> &nbsp;&nbsp; <a href="08-accessibilite.md"><img src="https://img.shields.io/badge/-SUIVANT-0d8f91?style=for-the-badge" alt="Suivant"></a>
</p>
