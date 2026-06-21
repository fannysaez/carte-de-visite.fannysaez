# 05 — Verso de la carte

## Mise en page

Le verso utilise une grille inversée (`grid-template-columns: 1.15fr 1fr`) :

- **Colonne gauche** : À propos + Pourquoi la CDA ?
- **Colonne droite** : Compétences (skill tabs) + Profils en ligne

---

## Colonne gauche

### Section "À propos" (`#about`)
Accordéon par item — 4 entrées :

| Titre (acc-title) | Corps (acc-body, caché par défaut) |
|---|---|
| Développeuse Web & Mobile | Titre Pro Dév(M — Simplon, oct. 2025 |
| Autodidacte passionnée | Profil couteau suisse : code, graphisme, impression 3D & scrapbooking |
| Engagée & Collaborative | Conception en équipe d'un prototype web écoresponsable lors d'un Hackathon intensif de 36h |
| Curieuse & rigoureuse | J'aime donner vie à des idées complexes, dans le monde virtuel comme matériel |

### Section "Pourquoi la CDA ?" (`#simplon`)
Accordéon par item — 3 entrées. `border-bottom` présent (correction visuelle — ligne séparatrice sous la section).

| Titre | Corps |
|---|---|
| La conception | Comme en impression 3D, je veux modéliser et architecturer des projets robustes avant de les coder. |
| L'évolution | Mon récent stage freelance m'a donné l'envie de gérer des applications complètes de A à Z. |
| L'écosystème | Poursuivre avec Simplon, c'est apprendre par le concret au sein d'une communauté de créateurs. |

### Section "Motivation"
Positionnée après "Pourquoi la CDA ?" — présentation personnelle complémentaire, réorganisée le 11 juin 2026.

---

## Colonne droite

### Section "Compétences" (`#skills`)
Système d'onglets (`skill-tabs`) avec **4 panneaux** :

| Onglet | Contenu (tag-list) |
|---|---|
| Front | HTML5, CSS3, Sass, JavaScript, React, Next.js, Bootstrap, Vite |
| Back | PHP, Symfony, Node.js, SQL, Supabase, Python, Express, Prisma |
| Outils | Git, GitHub, WordPress, Docker, Netlify, Vercel, Trello… (pagination 1/4, 6 items/page) |
| Design | Figma, Illustrator, Photoshop, InDesign, Adobe XD, Silhouette |

Les badges utilisent `display: flex; flex-wrap: wrap` — **largeur naturelle** par contenu (pas de grille fixe).

#### `.deco-wrap`
Conteneur des badges passions décoratifs (icônes desk deco) : `width: 288px; height: 147px; margin: 18px` — marges uniformes pour aérer les badges sur desktop et tablette.

### Section "Profils en ligne" (`#profiles`)
6 liens avec icône Iconify + attribut `data-tooltip` :

| Lien | Icône |
|---|---|
| GitHub | `fa6-brands:github` |
| LinkedIn | `fa6-brands:linkedin-in` |
| Instagram | `fa6-brands:instagram` |
| Portfolio | `fa6-solid:briefcase` |
| CV en ligne | `fa6-solid:file-lines` |
| BambuCalc | `fa6-solid:cube` |

**Desktop/tablette** : grille 2 colonnes avec icône + label texte.
**Mobile** : 6 icônes rondes (36px) sur une seule ligne, `justify-content: space-between`, label masqué, tooltip au hover.

---

## Système accordéon

- Un seul item ouvert à la fois sur **l'ensemble des 7 items** (exclusivité globale)
- Bouton `+` / `−` (16×16px, cercle teal) avec `aria-expanded`
- `.acc-body.hidden { display: none }` — sans animation pour éviter tout dépassement de hauteur
- Géré dans `script.js` via `querySelectorAll('.accordion-toggle')`
- **LED active** : le bullet `::before` de l'item ouvert s'illumine en teal avec glow via `:has([aria-expanded="true"])` — discret (opacity 0.35) à la fermeture

### Texte tronqué + bouton ⓘ (juin 2026)

- **Troncature JS** : chaque `.acc-body` est tronqué à **51 chars** au chargement (coupe au dernier mot, ponctuation finale strippée) — texte long conservé dans `data-long`
- **Bouton ⓘ** : `.acc-more-btn` utilise l'icône `fa6-solid:circle-info` (22×22px, cercle teal) à la place du texte "Plus d'infos →"
- **Layout** : `.acc-item` passe en `flex-direction: row; flex-wrap: wrap` — texte (order:1, flex: 0 1 auto) suivi du ⓘ (order:2)
- **Tooltip** : "Plus d'infos" apparaît **en dessous** du ⓘ au hover (flèche pointant vers le haut), même pattern que `.social-btn`

---

## Responsive mobile (≤ 600px)

Le verso passe en **1 colonne scrollable** (`grid-template-columns: 1fr`) :
- `col-left` (À propos + Pourquoi CDA) au-dessus de `col-right` (Stack + Profils)
- Scroll fluide avec `overflow-y: auto` sur `face-inner--back`
- Espacement des sections adapté : `#skills margin-top: 1rem`, `#profiles margin-top: 2.5rem`

---

> Polish UI finalisé — 11 juin 2026

---

<p align="center">
  <a href="04-recto.md"><img src="https://img.shields.io/badge/-PR%C3%89C%C3%89DENT-0d8f91?style=for-the-badge" alt="Précédent"></a> &nbsp;&nbsp; <a href="06-css-architecture.md"><img src="https://img.shields.io/badge/-SUIVANT-0d8f91?style=for-the-badge" alt="Suivant"></a>
</p>
