# 16 — Charte graphique

## Pourquoi une charte graphique ?

Le brief Simplon ne demandait pas de charte graphique. Elle a été rédigée **a posteriori** comme document de référence — pour formaliser les choix de design déjà implémentés dans le CSS et prouver la cohérence visuelle de l'ensemble.

C'est une démarche professionnelle : dans un vrai projet, la charte est le contrat entre designers et développeurs. Ici, elle sert de **preuve de maîtrise** devant le jury.

---

## Accès

| Format | Lien |
|---|---|
| Figma (source) | [Charte graphique — carte de visite](https://www.figma.com/design/Jhb2LqOin5NXifOZXXRV5z/carte-de-visite?node-id=397-3) |
| PDF | [`assets/charte-graphique/Charte graphique - carte de visite.pdf`](../charte-graphique/Charte%20graphique%20-%20carte%20de%20visite.pdf) |
| WebP (aperçu complet) | [`assets/charte-graphique/Charte graphique - carte de visite - complet.webp`](../charte-graphique/Charte%20graphique%20-%20carte%20de%20visite%20-%20complet.webp) |

---

## Aperçu

<p align="center">
  <img src="../charte-graphique/Charte%20graphique%20-%20carte%20de%20visite%20-%20complet.webp" width="600" alt="Charte graphique — aperçu complet">
</p>

---

## Contenu (10 sections)

| # | Section | Ce qu'elle documente |
|---|---|---|
| 01 | Palette de couleurs | 10 valeurs (teal, dark, dark2, card-bg, white, muted + 4 opacités teal) |
| 02 | Typographie | Raleway WOFF2 auto-hébergée, 6 graisses, tailles H1→micro-labels |
| 03 | Tokens de design | Border-radius, blur, transitions, perspective, scrollbar |
| 04 | Ombres & effets | Box-shadows carte/avatar, background scène (3 gradients) |
| 05 | Composants | Avatar, QR, tags, boutons sociaux, ruban, accordéon, onglets, modale |
| 06 | Stack technique | Front-end, back-end, outils, design — conforme au site live |
| 07 | Espacements | 8 paliers de 0.25rem (4px) à 3.5rem (56px) |
| 08 | Animations | Flip 3D, float passions, status pulse, typewriter, deco dots |
| 09 | Breakpoints & responsive | Desktop / Tablette / Mobile + grilles recto détaillées |
| 10 | Architecture CSS | globals / components / utilities + polices auto-hébergées |

---

## Conformité avec le CSS

La charte est **100% conforme** au code CSS en production (`styles/globals.css`, `styles/components.css`, `styles/utilities.css`).

Chaque valeur documentée (couleurs, tailles, tokens, ombres, animations) correspond exactement aux variables et propriétés CSS du site live.

> Pour le détail des variables CSS, voir [06 — Architecture CSS](06-css-architecture.md).

---

<p align="center">
  <a href="15-schema-org.md"><img src="https://img.shields.io/badge/-PR%C3%89C%C3%89DENT-0d8f91?style=for-the-badge" alt="Précédent"></a> &nbsp;&nbsp; <a href="../../README.md"><img src="https://img.shields.io/badge/-RETOUR-0d8f91?style=for-the-badge" alt="Retour"></a>
</p>
