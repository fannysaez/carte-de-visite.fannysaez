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

## Accessibilité JS

| Attribut | Valeur initiale | Valeur après ouverture |
|---|---|---|
| `aria-expanded` | `"false"` | `"true"` |
| `textContent` du bouton | `+` | `−` |

---

<p align="center">
  <a href="06-css-architecture.md"><img src="https://img.shields.io/badge/-PR%C3%89C%C3%89DENT-0d8f91?style=for-the-badge" alt="Précédent"></a> &nbsp;&nbsp; <a href="08-accessibilite.md"><img src="https://img.shields.io/badge/-SUIVANT-0d8f91?style=for-the-badge" alt="Suivant"></a>
</p>
