# 08 — Accessibilité

## Structure HTML sémantique

| Balise | Usage |
|---|---|
| `<main>` | Contenu principal de la page |
| `<section>` | Chaque zone thématique (about, simplon, skills, profiles) |
| `<h1>` | Nom de la candidate — titre principal |
| `<h2>` | Titres de section sur le verso |
| `<ul>` / `<li>` | Listes de compétences, passions, profils, raisons |
| `<figure>` / `<figcaption>` | Avatar + QR codes avec légende |
| `<button>` | Tous les éléments interactifs (tabs, toggles) |
| `<a>` | Liens externes (profils, email, téléphone) |

---

## Attributs ARIA utilisés

| Attribut | Où | Valeur |
|---|---|---|
| `aria-label` | Boutons accordéon | `"Développer [titre]"` |
| `aria-expanded` | Boutons accordéon | `"false"` / `"true"` |
| `aria-controls` | Boutons accordéon | ID du panneau contrôlé |
| `aria-labelledby` | `<section>` | ID du `<h2>` correspondant |
| `aria-hidden="true"` | Icônes décoratives (`<iconify-icon>`) | Cachées aux lecteurs d'écran |
| `alt` | `<img>` avatar et QR codes | Description textuelle |

---

## Bonnes pratiques

- Hiérarchie de titres respectée : `h1` unique → `h2` pour les sections verso
- Boutons `<button>` (et non `<div>` cliquables) pour la navigation au clavier
- Couleurs : ratio de contraste respecté entre `--teal (#1ebfc1)` et `--dark (#08131e)`
- `lang="fr"` sur `<html>` pour les lecteurs d'écran
- `<meta charset="UTF-8">` et `<meta name="viewport">` présents

---

<p align="center">
  <a href="07-javascript.md"><img src="https://img.shields.io/badge/-PR%C3%89C%C3%89DENT-0d8f91?style=for-the-badge" alt="Précédent"></a> &nbsp;&nbsp; <a href="09-performance.md"><img src="https://img.shields.io/badge/-SUIVANT-0d8f91?style=for-the-badge" alt="Suivant"></a>
</p>
