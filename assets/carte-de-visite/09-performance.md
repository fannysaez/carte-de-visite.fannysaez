# 09 — Performance

## Scores Lighthouse

| Contexte | Score |
|---|---|
| Desktop | **100 / 100** |
| Mobile | **95 / 100** |

![Lighthouse Desktop 100](../lighthouse/Lighthouse%20100%20pour%20desktop.png)
![Lighthouse Mobile 95](../lighthouse/Lighthouse%2095%20pour%20mobile.png)

---

## Optimisations appliquées

### 1. Raleway auto-hébergé (−750 ms render-blocking)
Suppression de Google Fonts → les 6 variantes `.woff2` sont servies depuis `assets/fonts/`.
```html
<!-- Supprimé -->
<link href="https://fonts.googleapis.com/css2?family=Raleway..." rel="stylesheet">
```
```css
/* Remplacé par */
@font-face {
    font-family: 'Raleway';
    font-display: swap;
    src: url('../assets/fonts/raleway-v37-latin-700.woff2') format('woff2');
}
```

### 2. CSS en 3 fichiers externes liés via `<link>`
Le CSS est organisé en 3 fichiers séparés (`globals.css`, `components.css`, `utilities.css`) chargés via `<link rel="stylesheet">` dans le `<head>`. Avec Vercel (HTTP/2 + CDN), les 3 fichiers se chargent en parallèle et sont mis en cache dès la première visite — l'impact sur le render-blocking est négligeable en production.

> **Note :** Une version antérieure fusionnait les 3 fichiers en un bloc `<style>` inline pour gagner −490 ms de render-blocking. Ce choix a été remplacé par les fichiers externes pour une meilleure organisation du code (séparation stricte HTML / CSS).

### 3. QR codes SVG locaux + `fetchpriority="high"` sur le LCP
Les QR codes PNG externes (sans cache, 402 B chacun) ont été remplacés par des SVG locaux SVGO-minifiés (5,5 KB). Le QR Portfolio est l'élément LCP — il reçoit la priorité maximale.
```html
<img src="assets/img/qr-portfolio.svg" fetchpriority="high">
```

### 4. `preload` des polices critiques
Les variantes les plus utilisées (400-regular, 700, 600) sont préchargées pour éviter le FOIT visible et les décalages de mise en page.
```html
<link rel="preload" href="assets/fonts/raleway-v37-latin-700.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="assets/fonts/raleway-v37-latin-regular.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="assets/fonts/raleway-v37-latin-600.woff2" as="font" type="font/woff2" crossorigin>
```

### 5. `preconnect` vers api.iconify.design (−300 ms LCP)
```html
<link rel="preconnect" href="https://api.iconify.design">
```
Pré-établit la connexion TCP/TLS. **Note :** sans `crossorigin` — les requêtes JSON Iconify n'utilisent pas le mode CORS.

### 6. Iconify en `defer` + `contain: layout style`
Le script ne bloque pas le parsing. Le `contain` évite les décalages layout (CLS) lors du chargement des icônes.
```css
iconify-icon { contain: layout style; }
```

### 7. Avatar WebP 240×240 depuis original 2048 px
Resize direct depuis la source haute résolution (qualité 75) — net sur Retina 2x, 5 KB seulement.

### 8. `font-display: swap`
Affichage immédiat d'une police de substitution pendant le chargement de Raleway — évite le FOIT (Flash of Invisible Text).

### 9. Preload Raleway 600 — correction CLS `col-right` (juin 2026)
La variante 600 était absente du `preload` : elle arrivait après le premier rendu et provoquait un décalage de mise en page (`CLS 0.222`) sur la colonne droite du verso.

```html
<!-- Ajout juin 2026 -->
<link rel="preload" href="assets/fonts/raleway-v37-latin-600.woff2" as="font" type="font/woff2" crossorigin>
```

Résultat : CLS `0.222 → 0` sur `col-right`.

### 10. Animations GPU-composites (juin 2026)
PageSpeed signalait 7 animations non-composées forçant des repaints CPU à chaque frame.

| Élément | Propriété avant | Correctif |
|---|---|---|
| `.mob-dot` × 6 | `box-shadow` dans `@keyframes` | → `filter: drop-shadow(...)` — composité GPU |
| `.typewriter-wrap::after` | `border-right-color: transparent` | → `opacity: 0` — composité GPU |
| `.typewriter` | — | `will-change: width` ajouté comme hint navigateur |

---

<p align="center">
  <a href="08-accessibilite.md"><img src="https://img.shields.io/badge/-PR%C3%89C%C3%89DENT-0d8f91?style=for-the-badge" alt="Précédent"></a> &nbsp;&nbsp; <a href="10-criteres-evaluation.md"><img src="https://img.shields.io/badge/-SUIVANT-0d8f91?style=for-the-badge" alt="Suivant"></a>
</p>
