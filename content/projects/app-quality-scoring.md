---
title: "Application Quality Scoring — Technology Architect"
date: 2024-11-20
draft: false
description: "Designing a cross-team scoring system for application quality: code health, security posture, and operational readiness."
eyebrow: "Case study"
tags: ["architecture", "quality", "security", "sre"]
role: "Technology Architect"
stack: ["Azure DevOps", "SonarQube", "Trivy", "Grafana"]
---

## Context

"Is this app production-ready?" meant something different to each team. Quality,
security, and ops readiness were evaluated ad hoc — making portfolio-wide prioritization
(what to harden first, what to sunset) largely subjective.

## Approach

- Defined a composite score across **three pillars**: code quality, security, ops readiness
- Mapped each pillar to **objective signals** already flowing through the pipeline
  (test coverage, CVE counts, deployment frequency, MTTR, etc.)
- Built a Grafana dashboard that rolled per-app scores up to portfolio view
- Set up a feedback loop with team leads to refine weightings before going portfolio-wide

## Outcome

- Portfolio leadership gained a single ranked view for hardening investment
- Teams got a concrete, measurable definition of "production-ready"
- Score movements became a leading indicator for ops risk

## Lessons

A scoring system is a political object as much as a technical one. Spend the time
up front on *what's measured and why* — not on dashboards.
