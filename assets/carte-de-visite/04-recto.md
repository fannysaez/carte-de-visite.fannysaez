# 04 — Recto de la carte

## Mise en page

Le recto est divisé en **2 colonnes** via CSS Grid (`grid-template-columns: 1fr 1.8fr`) :

- **Colonne gauche** : avatar + QR Portfolio
- **Colonne droite** : identité + QR CV en ligne + passions + barre sociale

---

## Éléments — colonne gauche

### Avatar
- `<div class="avatar-wrap">` + `<img>` — photo `photo-fanny.webp`
- Cercle avec bordure teal, double halo lumineux (box-shadow)
- Attribut `fetchpriority="high"` pour prioriser le chargement (LCP)

### QR Code Portfolio
- Enveloppé dans un `<a href="...">` — **cliquable** (ouvre le portfolio dans un nouvel onglet)
- Hover : glow teal + scale(1.05) + figcaption en teal
- `<figcaption>Portfolio</figcaption>` — label **vertical à gauche** sur desktop/tablette (`writing-mode: vertical-rl`)
- Généré via api.qrserver.com avec couleur teal sur fond sombre

---

## Éléments — colonne droite

### Identité (`<div class="identity">`)
| Élément | Balise | Contenu |
|---|---|---|
| Nom | `<h1>` | Fanny `<span class="accent">Saez</span>` |
| Titre | `<p class="tagline">` | Développeuse Web & Mobile |
| Traits | `<p class="traits">` | Créative · Curieuse · Rigoureuse · Autonome · Organisée |

### QR Code CV en ligne
- Enveloppé dans un `<a href="...">` — **cliquable** (ouvre le CV dans un nouvel onglet)
- Hover : même effet glow que le QR Portfolio
- `<figcaption>CV en ligne</figcaption>` — label horizontal sous le QR

### Ribbon (coin supérieur droit)
- `<div class="ribbon">` positionné en `absolute`, rotation `45deg`
- Texte : **À TITRE PRO** (avec icône award)
- Tooltip au survol via `::before` : *"Bac+2 · Niveau 5 · Simplon oct. 2025"*
  - Flèche CSS `::before` (border-trick) — triangle pointant vers le ribbon
  - Classes de positionnement selon breakpoint : `.pb-2` (tablette) · `.pb-4` (desktop) · `.pb-5` (mobile)
- Mobile : repositionné (centré, `bottom: 665px`)

### Passions (`<ul class="passion-list">`)
Liste de tags en `flex-wrap` :
`Informatique` · `Natation` · `Impression 3D` · `Graphisme & Scrap`

### Barre sociale (`<div class="social-bar">`)
3 boutons ronds avec tooltip au survol — chaque `.social-btn` utilise :
- `::after` : bulle texte (contenu via `data-tooltip`)
- `::before` : flèche CSS (border-trick) pointant vers le bouton

| Icône | Lien / Action |
|---|---|
| Enveloppe | fanny.saez.0486@gmail.com |
| Téléphone | 06.61.05.15.05 |
| Localisation | Clermont-Ferrand (63) (span non-cliquable) |

---

## Responsive mobile (≤ 600px)

Le recto passe en **grille 5 lignes** (`grid-template-columns: 1fr 1fr`) :

| Ligne | Contenu |
|---|---|
| 1 | Avatar 120px centré (pleine largeur) |
| 2 | Identité centrée (h1 + tagline + traits) |
| 3 | QR Portfolio (col gauche) + QR CV (col droite) |
| 4 | Passions (ancrées en bas via `align-self: end`) |
| 5 | Social bar (3 icônes centrées) |

- `.col-left` et `.col-right` passent en `display: contents` (enfants = items de grille directs)
- QR codes adaptatifs : `clamp(105px, 33vw, 138px)`

---

<p align="center">
  <a href="03-structure-fichiers.md"><img src="https://img.shields.io/badge/-PR%C3%89C%C3%89DENT-0d8f91?style=for-the-badge" alt="Précédent"></a> &nbsp;&nbsp; <a href="05-verso.md"><img src="https://img.shields.io/badge/-SUIVANT-0d8f91?style=for-the-badge" alt="Suivant"></a>
</p>
