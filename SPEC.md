# Framework Specification

Version: `0.2.0-beta`

## Purpose

The Propozito Orchestrator defines portable protocols, schemas, gates, validators, and state artifacts for AI-assisted software development.

Its purpose is to reduce common failure modes:

- hallucinated completion
- shortcut or slop code
- fake or incomplete testing
- uncontrolled context growth
- poor project memory
- architecture drift
- vague task execution
- untraceable changes
- fragile autonomous workflows

The beta specification adds human-visible verification, graph-aware impact analysis, configurable terminology, autonomy profiles, context rotation, prompt refinement, optional semantic memory indexing, and verification surfaces while keeping deterministic repository state canonical.

## Non-Goals

The framework does not guarantee correct software, replace human ownership, remove the need for code review, or make production deployment safe by default.

## Canonical Sources

The canonical standard lives in:

- `core/`
- `schemas/`
- `gates/`
- `agents/`
- `templates/`
- `workflows/`

Skills are adapters or interfaces to the canonical standard. They are not the specification itself.

## Required Lifecycle

```text
Project Purpose
-> Feature Goal
-> Epic
-> Story
-> Task
-> Subtask
-> Burst
-> Tests
-> Evidence
-> Gate Results
-> Persona QA
-> State Checkpoint
```

No task is complete unless it is traceable, tested, evidence-backed, gate-approved, persona-validated when applicable, and checkpointed in project state.

For complex systems, applicable beta completion also requires impact awareness, placeholder status, verification surface, signoff state, implementation-map update, prompt-history entry, and context-pack readiness.

## Evidence Standard

Completion requires durable evidence:

- changed files
- requirement IDs
- acceptance criteria IDs
- tests added or modified
- commands run
- raw output paths
- exit codes
- known limitations
- gate results
- rollback notes where relevant

Confidence is not evidence.

## Escalation Standard

High-risk ambiguity pauses work and requires human escalation. High-risk areas include auth, payments, permissions, privacy, security, production deployment, destructive data changes, external integrations, irreversible migrations, and core architecture.
