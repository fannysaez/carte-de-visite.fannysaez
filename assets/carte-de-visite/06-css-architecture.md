# 06 — Architecture CSS

## Découpage en 3 fichiers

Le CSS est organisé en 3 fichiers dans le dossier `styles/` :

```
styles/
├── globals.css       → variables, fonts, reset, éléments de base
├── components.css    → tous les composants UI (desktop)
└── utilities.css     → media queries responsive uniquement
```

`index.html` charge les 3 fichiers via des balises `<link>` dans le `<head>` :

```html
<link rel="stylesheet" href="styles/globals.css">
<link rel="stylesheet" href="styles/components.css">
<link rel="stylesheet" href="styles/utilities.css">
```

---

## globals.css

Contient dans l'ordre :
1. Variables CSS (`:root`)
2. `@font-face` × 6 (chemins `../assets/fonts/`)
3. Reset (`*, *::before, *::after`)
4. Éléments de base (`html`, `body`, `ul`, `a`, `button`…)

---

## Variables CSS (`:root`)

```css
:root {
    --teal:    #1ebfc1;
    --teal-10: rgba(30, 191, 193, 0.10);
    --teal-18: rgba(30, 191, 193, 0.18);
    --teal-28: rgba(30, 191, 193, 0.28);
    --teal-40: rgba(30, 191, 193, 0.40);
    --dark:    #08131e;
    --dark2:   #0b1c2c;
    --card-bg: rgba(11, 28, 44, 0.90);
    --white:   #e6f2fb;
    --muted:   #567585;
    --r:       1.25rem;   /* border-radius global */
}
```

---

## Flip 3D — technique CSS

```css
.scene {
    perspective: 2400px;
}
.card-3d {
    transform-style: preserve-3d;
    transition: transform 0.82s cubic-bezier(0.4, 0, 0.2, 1);
}
.card-3d.is-flipped {
    transform: rotateY(180deg);
}
.face {
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
}
.face--back {
    transform: rotateY(180deg);
}
```

---

## Responsive — breakpoints

| Breakpoint | Fichier | Comportement |
|---|---|---|
| `> 600px` | `utilities.css` | Label Portfolio : `writing-mode: vertical-rl` à gauche du QR |
| `≤ 768px` | `utilities.css` | Scène réduite, padding réduit, avatar 100px |
| `≤ 600px` | `utilities.css` | Recto : grille 5 lignes portrait · Verso : 1 colonne scrollable |

### Recto mobile — grille CSS Grid
```css
.face--front .face-inner {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto auto minmax(auto, 1fr) auto;
}
.face--front .col-left,
.face--front .col-right { display: contents; }
```
Les colonnes passent en `display: contents` — leurs enfants deviennent directement des items de grille.

### Verso mobile — colonne unique
```css
.face-inner--back { grid-template-columns: 1fr; overflow-y: auto; }
```

---

## Polish UI — 11 juin 2026

### `.deco-wrap`
Conteneur des badges passions décoratifs (icônes desk deco) sur le verso :

```css
.deco-wrap {
    width: 288px;
    height: 147px;
    margin: 18px;
}
```

### Flèches CSS — tooltips (border-trick)
Pseudo-élément `::before` ajouté sur `.social-btn` et `.ribbon` — triangle CSS pur pointant vers l'élément :

```css
.social-btn::before,
.ribbon::before {
    content: "";
    position: absolute;
    /* border-trick : triangle CSS */
    border: 6px solid transparent;
    border-top-color: var(--dark2);
}
```

### Modificateurs de positionnement tooltip

| Classe | Usage |
|---|---|
| `.pb-2` | Décalage léger — tablette |
| `.pb-4` | Décalage moyen — desktop |
| `.pb-5` | Décalage fort — mobile |

### `#simplon` — `border-bottom`
```css
#simplon {
    border-bottom: 1px solid var(--teal-28); /* correction visuelle manquante */
}
```

---

<p align="center">
  <a href="05-verso.md"><img src="https://img.shields.io/badge/-PR%C3%89C%C3%89DENT-0d8f91?style=for-the-badge" alt="Précédent"></a> &nbsp;&nbsp; <a href="07-javascript.md"><img src="https://img.shields.io/badge/-SUIVANT-0d8f91?style=for-the-badge" alt="Suivant"></a>
</p>
