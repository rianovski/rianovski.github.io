---
title: "Hello — and why this site runs on Hugo + GitHub Actions"
date: 2026-04-18
draft: false
description: "Welcome post. Why I picked Hugo, why GitHub Actions, and what to expect here."
tags: ["meta", "hugo", "ci-cd"]
---

A short intro: I'm Ferian, a DevSecOps Engineer based in Jakarta. This is my home
on the web — portfolio, writing, and a place to point recruiters and collaborators.

## Why Hugo

I wanted something that matched the content — static pages, occasional blog
posts — without JavaScript overhead. Hugo gave me:

- **Sub-second local rebuilds** — the feedback loop is instant
- **No Node, no npm** — one binary, no `node_modules` to audit
- **Output is plain HTML/CSS** — easy to host, easy to cache, easy to trust

## Why GitHub Actions + GitHub Pages

Because this is a DevSecOps portfolio, the deploy pipeline is part of the portfolio.
Every push to `main` builds the site with pinned Hugo, produces a minified artifact,
and publishes it to GitHub Pages. You can see the workflow at
[`.github/workflows/deploy.yml`](https://github.com/rianovski/rianovski.github.io/blob/main/.github/workflows/deploy.yml).

## What to expect here

Short notes on things I actually run into: IaC rollouts, container security, secrets
management, incident retros — the messy middle of shipping secure software.

Thanks for reading.
