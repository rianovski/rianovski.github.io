---
title: "IaC Rollout: 1h → 10min Environment Builds"
date: 2024-06-15
draft: false
description: "Replacing manual environment provisioning with Ansible + Terraform across Azure, cutting build time by 83%."
eyebrow: "Case study"
tags: ["iac", "ansible", "terraform", "azure"]
role: "DevSecOps Engineer"
stack: ["Ansible", "Terraform", "Azure DevOps", "Azure"]
---

## Context

New environment provisioning was a manual, hour-long process owned by a small ops team.
It was a bottleneck for every new project, every refresh, and every disaster-recovery
drill — and every manual run risked configuration drift.

## Approach

- Modelled every environment (dev / staging / prod) as reusable Terraform modules
- Wrapped configuration management in idempotent Ansible roles
- Gated promotion through Azure DevOps pipelines with approvals at prod
- Baked secrets injection into pipeline-time, not image-time
- Wrote SOPs for the three most common provisioning failures so anyone could unblock

## Outcome

- Build time: **1h → ~10min** (83% reduction)
- Drift incidents: effectively zero on IaC-managed environments
- Onboarding: new engineers could provision a dev environment on day one

## What I'd do differently

Start policy-as-code (OPA / Checkov) from day one — retrofitting policy after
the fact is harder than baking it into the pipeline from the start.
