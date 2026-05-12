# Agent Modes

Propozito defines specialist agents, but users should think in modes first. Modes describe the failure mode being controlled.

## Planning Mode

- `epic-story-decomposer`: prevents vague feature requests from turning into oversized implementation passes.
- `task-readiness-auditor`: prevents coding before scope, tests, evidence, gates, and file boundaries are defined.
- `traceability-manager`: prevents requirements, acceptance criteria, and planned work from drifting apart.

## Implementation Mode

- Implementation agent for the target stack: prevents uncontrolled edits by working only within the approved burst.
- `propozito-orchestrator`: prevents unsequenced work by routing tasks through state, locks, gates, and handoffs.

## Verification Mode

- `evidence-verifier`: prevents false completion claims by checking commands, output paths, exit codes, tests, and limitations.
- `persona-scenario-qa`: prevents developer-only validation by testing user goals, edge paths, failure paths, and permission boundaries.
- `traceability-manager`: prevents orphan code and untested acceptance criteria.

## Recovery Mode

- `state-recovery-agent`: prevents restart confusion by resuming from `.ai-state/` and the last verified checkpoint.
- `context-compaction-manager`: prevents hidden blockers and context bloat by writing durable summaries.

## Release Mode

- Release owner or release-readiness auditor: prevents release claims without passed gates, known issues, environment notes, rollback plan, and required approvals.

Use only the modes needed for the current project. Alpha Propozito does not require every specialist agent to run for every task.
