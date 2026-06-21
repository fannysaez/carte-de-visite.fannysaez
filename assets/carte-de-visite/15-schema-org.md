# 15 — Données structurées (Schema.org / JSON-LD)

## Qu'est-ce que c'est ?

Les **données structurées** permettent aux moteurs de recherche (Google, Bing…) de comprendre le contenu d'une page au-delà du texte visible. Le format utilisé ici est **JSON-LD** (*JavaScript Object Notation for Linked Data*), intégré dans une balise `<script type="application/ld+json">`.

> Ce n'est **pas du JavaScript** : le navigateur n'exécute pas ce bloc. Seuls les crawlers des moteurs de recherche le lisent.

---

## Emplacement dans le HTML

```html
<head>
    <!-- ... -->
    <script type="application/ld+json">
    { ... }
    </script>
</head>
```

La balise est placée dans le `<head>` — c'est la position recommandée par Google pour que le crawler la découvre dès le parsing HTML, avant le chargement de toute ressource externe.

---

## Schéma utilisé : `Person`

Le type `Person` de [Schema.org](https://schema.org/Person) décrit une personne physique. Il est adapté pour un CV ou une carte de visite.

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Fanny Saez",
  "jobTitle": "Développeuse Web & Mobile",
  "url": "https://carte-de-visite-fannysaez.vercel.app/",
  "email": "fanny.saez.0486@gmail.com",
  "telephone": "+33661051505",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Clermont-Ferrand",
    "addressRegion": "Auvergne-Rhône-Alpes",
    "addressCountry": "FR"
  },
  "sameAs": [
    "https://github.com/fannysaez",
    "https://www.linkedin.com/in/fannysaez/",
    "https://www.instagram.com/designdevwebdiy/",
    "https://fannysaez.github.io/my_portfolio/"
  ]
}
```

---

## Détail des propriétés

| Propriété | Valeur | Rôle |
|---|---|---|
| `@context` | `https://schema.org` | Déclare le vocabulaire utilisé |
| `@type` | `Person` | Type d'entité décrite |
| `name` | `Fanny Saez` | Nom complet |
| `jobTitle` | `Développeuse Web & Mobile` | Titre professionnel |
| `url` | URL Vercel | Page de référence de la personne |
| `email` | adresse Gmail | Contact direct |
| `telephone` | `+33661051505` | Format international E.164 |
| `address` | objet `PostalAddress` | Localisation géographique |
| `sameAs` | tableau d'URLs | Profils en ligne officiels (GitHub, LinkedIn…) |

---

## Pourquoi `sameAs` ?

La propriété `sameAs` relie l'entité à ses profils sur d'autres plateformes. Elle aide Google à construire un **Knowledge Graph** cohérent autour de la personne — utile si le nom apparaît dans des résultats de recherche.

---

## Ce que ça apporte

- **Rich results** potentiels dans Google Search (panneau de connaissances)
- Meilleure indexation des informations de contact
- Signal de confiance pour le SEO de la page
- Démontre la connaissance des bonnes pratiques web modernes

---

<p align="center">
  <a href="14-polish-verso.md"><img src="https://img.shields.io/badge/-PR%C3%89C%C3%89DENT-0d8f91?style=for-the-badge" alt="Précédent"></a> &nbsp;&nbsp; <a href="../../README.md"><img src="https://img.shields.io/badge/-RETOUR-0d8f91?style=for-the-badge" alt="Retour"></a>
</p>
