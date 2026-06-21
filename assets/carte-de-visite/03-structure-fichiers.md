# 03 — Structure des fichiers

## Arborescence complète

```
carte-de-visite/
│
├── index.html                          # Page unique — structure recto/verso
├── script.js                           # Flip card · accordéon · sec-toggle · modale · filtres compétences
│
├── styles/
│   ├── globals.css                     # Variables :root + @font-face + reset + éléments de base
│   ├── components.css                  # Tous les composants UI (desktop)
│   └── utilities.css                   # Media queries (768px, 600px)
│
├── assets/
│   ├── fonts/                          # Raleway woff2 auto-hébergé (× 6)
│   │   ├── raleway-v37-latin-300.woff2
│   │   ├── raleway-v37-latin-regular.woff2
│   │   ├── raleway-v37-latin-italic.woff2
│   │   ├── raleway-v37-latin-600.woff2
│   │   ├── raleway-v37-latin-700.woff2
│   │   └── raleway-v37-latin-800.woff2
│   ├── img/
│   │   ├── photo-fanny.webp            # Photo de profil (format WebP)
│   │   ├── qr-portfolio.svg            # QR code — Portfolio
│   │   └── qr-cv.svg                   # QR code — CV en ligne
│   ├── lighthouse/
│   │   ├── Lighthouse 95 pour mobile.png
│   │   └── Lighthouse 100 pour desktop.png
│   ├── maquette-figma/                 # Captures du prototype Figma (WebP)
│   │   ├── Desktop/                    # Recto · Verso · Verso ouvert
│   │   ├── Mobile/                     # Recto · Verso · Verso ouvert
│   │   └── Tablette/                   # Recto · Verso · Verso ouvert
│   ├── w3/
│   │   └── validator.w3.org.png        # Capture W3C Nu — 0 erreur · 0 warning
│   ├── md/
│   │   └── cahier-des-charges/
│   │       └── cahier-des-charges.md   # Brief Simplon au format Markdown
│   ├── pdf/
│   │   ├── [Positionnement] Brief projet carte de visite.pdf
│   │   ├── README.md                   # Dossier de présentation jury (Markdown)
│   │   ├── README.pdf                  # Dossier de présentation jury (PDF)
│   │   ├── presentation-jury.html      # Présentation jury 3 pages (HTML)
│   │   └── presentation-jury.pdf       # Présentation jury 3 pages (PDF)
│   └── carte-de-visite/               # Documentation du projet (ce dossier)
│       ├── 01-presentation.md
│       ├── 02-technologies.md
│       ├── 03-structure-fichiers.md
│       ├── 04-recto.md
│       ├── 05-verso.md
│       ├── 06-css-architecture.md
│       ├── 07-javascript.md
│       ├── 08-accessibilite.md
│       ├── 09-performance.md
│       ├── 10-criteres-evaluation.md
│       ├── 11-deploiement.md
│       ├── 12-script-explications-techniques.md
│       ├── 13-maquette-figma.md
│       ├── 14-polish-verso.md
│       └── 15-schema-org.md
│
└── README.md
```

---

## Rôle de chaque fichier principal

| Fichier | Rôle |
|---|---|
| `index.html` | Structure HTML5 — carte recto et verso |
| `script.js` | Comportements JS — flip + accordéon |
| `styles/globals.css` | Variables `:root`, `@font-face`, reset, éléments de base |
| `styles/components.css` | Styles de tous les composants visuels |
| `styles/utilities.css` | Responsive — règles `@media` uniquement |

---

<p align="center">
  <a href="02-technologies.md"><img src="https://img.shields.io/badge/-PR%C3%89C%C3%89DENT-0d8f91?style=for-the-badge" alt="Précédent"></a> &nbsp;&nbsp; <a href="04-recto.md"><img src="https://img.shields.io/badge/-SUIVANT-0d8f91?style=for-the-badge" alt="Suivant"></a>
</p>
