# 10 — Critères d'évaluation

Extrait du brief Simplon — vérification point par point.

---

## Critères techniques

| Critère (brief) | Réponse dans le projet |
|---|---|
| Les rôles respectifs d'HTML et de CSS sont explicités | `index.html` = structure, `styles/` = mise en forme, `script.js` = comportement — séparation stricte |
| La structure HTML est fonctionnelle | Page valide W3C ✅ — 0 erreur · 0 warning ([validator.w3.org/nu](https://validator.w3.org/nu/?doc=https%3A%2F%2Fcartevisite-fannysaez.vercel.app%2F)) · capture : `assets/w3/validator.w3.org.png` |
| La structure HTML est cohérente | Hiérarchie `h1` → `h2`, sections nommées (`#about`, `#skills`…), structure logique `#page` + `#card` |
| Au moins 1 règle CSS par balise HTML | Chaque balise utilisée possède au minimum une règle dans `components.css` ou `globals.css` |
| Les règles CSS sont fonctionnelles et liées à la page HTML | Toutes les classes/IDs CSS correspondent à des éléments présents dans `index.html` |

---

## Livrables demandés

| Livrable (brief) | Présent |
|---|---|
| Balise titre pour nom et prénom | `<h1>Fanny <span>Saez</span></h1>` ✅ |
| Balise image pour l'avatar | `<img src="assets/img/photo-fanny.webp">` ✅ |
| Liste — raisons de rejoindre Simplon | `<ul class="reason-list">` dans `#simplon` (3 items accordéon) ✅ |
| Liste + liens — profils en ligne | `<ul class="profile-list">` dans `#profiles` (6 liens) ✅ |
| Fichier HTML de structure | `index.html` ✅ |
| Fichier CSS de mise en forme | `styles/` (globals + components + utilities) ✅ |
| Accessible via URL ou USB | Déployé sur Vercel ✅ |

---

## Critères comportementaux

| Critère (brief) | Réponse |
|---|---|
| Suit les prescriptions et consignes | Brief respecté dans sa totalité, au-delà des exigences minimales |
| Sélectionne ce qui est utile d'apprendre | CSS 3D flip, variables, accordéon ARIA, auto-hébergement des polices |
| Recherche et comble les lacunes | Lighthouse utilisé pour mesurer et corriger les performances |
| Décrit les tâches effectuées | Ce dossier `carte-de-visite/` documente l'ensemble des choix |
| Organise ses tâches | Projet livré en 2 jours avec déploiement continu sur Vercel |

---

<p align="center">
  <a href="09-performance.md"><img src="https://img.shields.io/badge/-PR%C3%89C%C3%89DENT-0d8f91?style=for-the-badge" alt="Précédent"></a> &nbsp;&nbsp; <a href="11-deploiement.md"><img src="https://img.shields.io/badge/-SUIVANT-0d8f91?style=for-the-badge" alt="Suivant"></a>
</p>
