---
title: "Container Security Baseline"
date: 2024-09-10
draft: false
description: "Establishing a defensible baseline for container workloads — scanning, signing, and runtime protection — without stalling delivery."
eyebrow: "Case study"
tags: ["security", "containers", "docker", "kubernetes"]
role: "DevSecOps Engineer"
stack: ["Docker", "Kubernetes", "Trivy", "Cosign", "Falco"]
---

## Context

Container images were being built and shipped across many teams with no shared
baseline for scanning, signing, or runtime observability. Risk was accumulating
faster than we could triage it.

## Approach

- **Scan** every image at build time (CVE + secret detection), fail the pipeline on CRITICAL
- **Sign** images with a central signing identity before pushing to the registry
- **Verify** signatures at cluster admission — unsigned images are rejected
- **Watch** running containers for anomalies (process, file, network)
- Published a clear SLA for how long teams have to triage scan findings by severity

## Outcome

- Unsigned images in production: eliminated
- Mean time to remediate CRITICAL CVEs: cut dramatically
- Platform adoption: rolled across all new services first, then backfilled

## What I'd do differently

Launch with a **grace-period** enforcement mode before going strict.
Hard-blocking on day one creates a political problem faster than a security win.
