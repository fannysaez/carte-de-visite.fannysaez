# 11 — Déploiement

## URL en ligne

**[carte-de-visite-fannysaez.vercel.app](https://carte-de-visite-fannysaez.vercel.app)**

Déploiement automatique depuis la branche `main` via **Vercel** (intégration GitHub).

---

## Lancer en local

Aucune installation requise. Deux options :

### Option 1 — VS Code Live Server (recommandé)
1. Ouvrir le dossier dans VS Code
2. Clic droit sur `index.html` → **Open with Live Server**
3. Le projet s'ouvre sur `http://127.0.0.1:5500`

### Option 2 — Serveur Python
```bash
python -m http.server 8080
# puis ouvrir http://localhost:8080
```

> Ne pas ouvrir `index.html` directement via `file://` — les `@font-face` et les chemins relatifs nécessitent un serveur HTTP.

---

## Configuration Vercel

Aucun fichier de configuration spécifique — Vercel détecte automatiquement un projet HTML/CSS/JS statique.

Le déploiement se déclenche à chaque `git push` sur `main`.

---

## Métadonnées SEO déployées

```html
<link rel="canonical" href="https://carte-de-visite-fannysaez.vercel.app/">
<meta property="og:url" content="https://carte-de-visite-fannysaez.vercel.app/">
<meta property="og:title" content="Fanny Saez — Développeuse Web & Mobile">
<meta property="og:description" content="Candidate CDA Simplon Clermont-Ferrand 2026">
```

---

<p align="center">
  <a href="10-criteres-evaluation.md"><img src="https://img.shields.io/badge/-PR%C3%89C%C3%89DENT-0d8f91?style=for-the-badge" alt="Précédent"></a> &nbsp;&nbsp; <a href="12-script-explications-techniques.md"><img src="https://img.shields.io/badge/-SUIVANT-0d8f91?style=for-the-badge" alt="Suivant"></a>
</p>
