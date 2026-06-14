# Propozito Orchestrator

Status: **v0.2.0-beta**

Propozito is a platform-agnostic AI development framework for evidence-gated, graph-aware, human-verifiable software development.

It adds structured guardrails, durable state, relationship mapping, verification surfaces, and completion gates to reduce AI coding drift, hallucinated completion claims, false-positive tests, and unreviewable work. It does not guarantee correctness or remove the need for engineering review, but it is designed to help teams move more reliably from idea to production-ready software.

## What It Provides

- Canonical protocols in `core/`
- JSON schemas in `schemas/`
- Integrity gates in `gates/`
- Role definitions in `agents/`
- Portable and platform adapter skills in `skills/`
- Reusable templates in `templates/`
- End-to-end workflows in `workflows/`
- Project configuration profiles in `configs/`
- Executable validators in `scripts/`
- User guides in `docs/`
- A worked example in `examples/todo-app-complete-run/`
- An intentionally failed example in `examples/todo-app-failed-gate/`
- Beta setup, terminology, autonomy, and verification profiles
- Project Control Room and Verification Center contracts
- Placeholder, signoff, rework, and evidence storage ledgers
- Deterministic application relationship graph and impact checks
- Optional semantic memory index over canonical artifacts
- Prompt refinement and context rotation protocols
- State lifecycle, frontend/backend boundary, and no-orphan capability gates
- A graph-aware beta example in `examples/beta-graph-aware-app/`

## Core Rule

No implementation starts from a vague feature request.

Implementation starts only from a verified task burst that has:

- linked requirement IDs
- linked acceptance criteria IDs
- explicit file boundaries
- a test plan
- an evidence plan
- required gates
- rollback notes for risky work
- escalation triggers for high-risk ambiguity

## Quickstart

Use the complete example as the first reference point:

```sh
node scripts/validate-state.js examples/todo-app-complete-run
node scripts/validate-task.js examples/todo-app-complete-run
node scripts/validate-evidence.js examples/todo-app-complete-run
node scripts/validate-gate-result.js examples/todo-app-complete-run
node scripts/validate-traceability.js examples/todo-app-complete-run
node scripts/validate-skills.js
node scripts/check-repo-cleanliness.js .
```

Validate the beta graph-aware fixture:

```sh
npm run validate:beta
```

## How To Use Propozito In A New Project

1. Copy or reference the relevant templates from `templates/`.
2. Create `.ai-state/project-state.json`.
3. Fill the project purpose contract.
4. Create a feature goal contract with requirements, non-goals, and acceptance criteria.
5. Generate epics, stories, tasks, subtasks, and burst plans.
6. Run task-readiness validation before coding.
7. Execute one small implementation burst.
8. Produce evidence with changed files, test commands, raw output paths, exit codes, and limitations.
9. Run gates and validators.
10. Commit or checkpoint the verified task.
11. Resume from `.ai-state/` if interrupted.

See `docs/using-propozito-in-your-project.md` for the longer project workflow.

## Design Position

The repository is authoritative memory. Model context is temporary.

Agents may summarize, compress, or hand off context, but durable state must live in project files such as `.ai-state/project-state.json`, `.ai-state/task-ledger.json`, gate results, evidence reports, decision logs, assumption logs, risk registers, and traceability records.

The deterministic source-of-truth hierarchy is:

- repo files
- `.ai-state` JSON/Markdown
- schemas
- validators
- relationship graph

Derived views such as context packs, status pages, Mermaid diagrams, graph visualizations, semantic vector indexes, and prompt refinement packets may help humans or AI coders navigate the work, but they do not replace canonical state.

## Platform Support

The canonical framework is platform-neutral. Portable skills use only:

```yaml
---
name:
description:
---
```

Platform-specific adapters may extend behavior for ChatGPT/Codex, Claude, Qwen Code, Kimi Code, and future AI coding tools without changing the canonical standard.

## Canonical Vs Adapter Skills

Canonical portable skills live in `skills/portable/`.

Platform-specific adapters live in `skills/adapters/`.

Historical `skill-*` examples live in `archive/legacy-skills/` and are not canonical. They are retained only as migration/reference material so users do not confuse older skill formats with the current portable standard.

`scripts/validate-skills.js` rejects unexpected `SKILL.md` files outside approved skill locations.

## What Propozito Enforces Today

- required project state fields for recovery
- task readiness structure before implementation
- completed tasks requiring evidence and gate results
- command output paths and exit codes in evidence
- traceability from requirements and acceptance criteria to files, tests, evidence, gates, and persona QA
- portable skill frontmatter limited to `name` and `description`
- repository cleanliness checks for generated OS artifacts and broken internal links
- lightweight slop heuristics for TODO/FIXME placeholders, assertion-free tests, empty outputs, suspicious completion claims, and missing raw output paths
- setup contract structure for project shape, verification mode, terminology, autonomy, signoff, and evidence policy
- project status/control-room freshness checks against canonical project state
- placeholder ledger checks so live placeholders cannot be silently treated as finished work
- relationship graph structural checks and task impact reporting
- verification surface and signoff integrity checks
- prompt refinement, prompt history, context pack, and rework-register audits
- evidence storage hygiene checks for generated heavy artifacts
- frontend/backend endpoint leak checks when the configured security boundary disallows direct browser/backend coupling

## Beta Scope And Limits

- deep semantic correctness of tests
- proof that mocks are appropriate for every critical path
- full architecture drift detection from runtime behavior
- full accessibility or performance automation
- production deployment safety
- complete security review coverage
- correctness of every AI agent decision
- a required vector database or embedding provider
- automatic generation of every graph edge or implementation-map entry

These limits are intentional for `v0.2.0-beta`. Propozito makes shortcuts more visible and strengthens verification surfaces; it does not make autonomous development safe by default.

## Why Failed-Gate Examples Exist

`examples/todo-app-failed-gate/` is intentionally invalid. It demonstrates how validators respond to missing raw output, assertion-free tests, TODO placeholders, incomplete traceability, failed gates, and missing checkpoint evidence.

Failed examples are part of the framework because users need to see how Propozito rejects false completion, not only how a happy path looks.

## Beta Status

This repository is beta framework infrastructure, not a mature autonomous engineering system. Use it as a portable operating standard for evidence-gated AI-assisted development, and keep human review in the loop for high-risk work.
