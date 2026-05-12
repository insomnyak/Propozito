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
- A worked example in `examples/todo-app-complete-run/`

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

## Alpha Limits

This repository is still alpha. It should be described as an experimental open framework for evidence-gated AI software development, not as a mature autonomous engineering system.
