# Propozito Orchestrator

Status: **v0.1-alpha**

This is an experimental, platform-agnostic quality-control and orchestration framework for AI-assisted software development. It is not a prompt pack, and it does not claim to eliminate hallucinations or guarantee production-ready code.

The framework aims to reduce common AI coding failure modes by making work traceable, testable, evidence-backed, recoverable, and gated before it is treated as complete.

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

## What Propozito Does Not Enforce Yet

- deep semantic correctness of tests
- proof that mocks are appropriate for every critical path
- full architecture drift detection from code behavior
- full accessibility or performance automation
- production deployment safety
- complete security review coverage
- correctness of every AI agent decision

These limits are intentional for `v0.1-alpha`. Propozito makes shortcuts more visible; it does not make autonomous development safe by default.

## Why Failed-Gate Examples Exist

`examples/todo-app-failed-gate/` is intentionally invalid. It demonstrates how validators respond to missing raw output, assertion-free tests, TODO placeholders, incomplete traceability, failed gates, and missing checkpoint evidence.

Failed examples are part of the framework because users need to see how Propozito rejects false completion, not only how a happy path looks.

## Alpha Limits

This repository is still alpha. It should be described as an experimental open framework for evidence-gated AI software development, not as a mature autonomous engineering system.
