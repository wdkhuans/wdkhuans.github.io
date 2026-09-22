# Shenghuan Miao · 缪盛欢

Personal research homepage: https://wdkhuans.github.io

A bilingual static site about wearable sensing, multimodal foundation models, and personal intelligence across devices. Built with HTML, CSS, and JavaScript, with no build step or external runtime dependencies.

## Local preview

```sh
python3 -m http.server 8765 --bind 127.0.0.1
```

Open http://127.0.0.1:8765.

## Editing

- `index.html`: page structure and English fallback content.
- `site.js`: English/Chinese copy, device diagram controls, and BibTeX dialog.
- `publications.js`: publication metadata and citations.
- `styles.css`: typography and responsive layout.
- `assets/`: photographs and favicon.

GitHub Pages serves the repository root. `.nojekyll` keeps the site as plain static files. Legacy about, publications, CV, and resume URLs redirect to the corresponding homepage sections.
