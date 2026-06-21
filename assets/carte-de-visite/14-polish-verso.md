# 14 — Polish Verso & Icônes Figma — 11 juin 2026

Modifications apportées le 11 juin 2026 : polish UI du verso HTML et complétion des icônes Desk Deco dans Figma.

---

## Verso HTML — Polish UI

### `.deco-wrap` — badges passions
- Dimensions : `width: 288px; height: 147px`
- Marges uniformes : `margin: 18px` — aération des badges passions sur desktop et tablette

### Flèches CSS — tooltips (border-trick)
- Pseudo-élément `::before` ajouté sur `.social-btn` et `.ribbon`
- Technique border-trick : triangle CSS pur (pas d'image)
- Pointe vers l'élément auquel le tooltip est rattaché

### Classes de positionnement tooltip

| Classe | Usage |
|---|---|
| `.pb-2` | Décalage léger — tablette |
| `.pb-4` | Décalage moyen — desktop |
| `.pb-5` | Décalage fort — mobile |

### `#simplon` — `border-bottom`
Correction visuelle : `border-bottom` manquant ajouté sur la section "Pourquoi la CDA ?".

### Section Motivation
Repositionnée après la section "Pourquoi la CDA ?" dans la colonne gauche du verso.

---

## Figma — Icônes Desk Deco

### Frames mises à jour
- 22 frames "Desk Deco — passions" : Desktop (11) + Tablette (11)
- Remplissage via Plugin API Iconify (source XHR : `api.iconify.design`)

### Icônes FA6 insérées

| Identifiant | Passion |
|---|---|
| `fa6-solid:person-swimming` | Natation |
| `fa6-solid:cube` | Impression 3D |
| `fa6-solid:palette` | Graphisme |
| `fa6-solid:scissors` | Scrapbooking |
| `fa6-solid:code` | Développement |

### Paramètres visuels
- Couleur : teal `#1ebfc1`
- Taille : 22px
- Alignement : centré dans les ellipses

### Mobile
Badges masqués (`display: none`) — frames Mobile non modifiées.

---

<p align="center">
  <a href="13-maquette-figma.md"><img src="https://img.shields.io/badge/-PR%C3%89C%C3%89DENT-0d8f91?style=for-the-badge" alt="Précédent"></a> &nbsp;&nbsp; <a href="../../README.md"><img src="https://img.shields.io/badge/-RETOUR-0d8f91?style=for-the-badge" alt="Retour"></a>
</p>
