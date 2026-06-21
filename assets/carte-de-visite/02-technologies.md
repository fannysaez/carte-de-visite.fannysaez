# 02 — Technologies

## Stack complète

| Technologie | Version / Détail | Usage |
|---|---|---|
| HTML5 | — | Structure sémantique (section, figure, ul, button…) |
| CSS3 | — | Flip 3D, variables custom, flexbox, grid, media queries |
| JavaScript | Vanilla ES6 | Flip card + accordéon exclusif global |
| [Iconify](https://iconify.design/) | Web component (`defer`) | Icônes (Font Awesome 6 via CDN Iconify) |
| Raleway | v37 — auto-hébergé | Polices woff2 locales (6 graisses), zéro Google Fonts |
| [Vercel](https://vercel.com/) | — | Déploiement continu depuis GitHub |

---

## Polices Raleway — auto-hébergement

Les 6 variantes sont servies depuis `assets/fonts/` :

| Fichier | Graisse | Style |
|---|---|---|
| `raleway-v37-latin-300.woff2` | 300 | normal |
| `raleway-v37-latin-regular.woff2` | 400 | normal |
| `raleway-v37-latin-italic.woff2` | 400 | italic |
| `raleway-v37-latin-600.woff2` | 600 | normal |
| `raleway-v37-latin-700.woff2` | 700 | normal |
| `raleway-v37-latin-800.woff2` | 800 | normal |

Bénéfice : suppression de la dépendance Google Fonts → **−750 ms** de render-blocking mesuré en Lighthouse.

---

## Ce qui n'est PAS utilisé

- Aucun framework CSS (pas de Bootstrap, Tailwind…)
- Aucun bundler (pas de Vite, Webpack…)
- Aucune dépendance npm

---

<p align="center">
  <a href="01-presentation.md"><img src="https://img.shields.io/badge/-PR%C3%89C%C3%89DENT-0d8f91?style=for-the-badge" alt="Précédent"></a> &nbsp;&nbsp; <a href="03-structure-fichiers.md"><img src="https://img.shields.io/badge/-SUIVANT-0d8f91?style=for-the-badge" alt="Suivant"></a>
</p>
