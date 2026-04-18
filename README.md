# rianovski.github.io

Personal portfolio site for **Moh. Ferian Fakhrul Zain** — DevSecOps Engineer.

Built with [Hugo](https://gohugo.io), deployed to GitHub Pages via GitHub Actions.

## Local development

Requires Hugo Extended >= 0.128.0.

```bash
# Windows (Chocolatey)
choco install hugo-extended

# macOS (Homebrew)
brew install hugo

# Linux (Snap)
sudo snap install hugo

# Run dev server
hugo server -D

# Production build
hugo --minify
```

Site serves at `http://localhost:1313/`.

## Deploy

Push to `main`. The GitHub Actions workflow at `.github/workflows/deploy.yml` builds and publishes to GitHub Pages automatically.

One-time setup on GitHub:
1. Repo Settings → Pages → Source: **GitHub Actions**
2. Push to `main`

## Content

- `content/_index.md` — homepage hero + about
- `content/experience/` — work history
- `content/skills/` — skills matrix
- `content/projects/` — case studies
- `content/posts/` — blog
- `content/achievements/` — awards / metrics
- `content/contact/` — contact page
- `static/cv/ferian-cv.pdf` — downloadable CV

## Design

- Custom minimal theme (layouts in project root, no external theme)
- Light + dark mode via `prefers-color-scheme` + localStorage override
- Inter (body) + JetBrains Mono (accents) from fonts.bunny.net
