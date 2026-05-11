# Context Compaction Policy

Conversation context is disposable. Repository state is authoritative.

## Before Compaction

Write durable updates for:

- facts
- completed work
- decisions
- assumptions
- blockers
- open questions
- changed files
- tests and gate status
- next actions

No unresolved blocker may be hidden in a summary.

## After Compaction

An agent must reload:

- `.ai-state/project-state.json`
- `.ai-state/task-ledger.json`
- `.ai-state/open-questions.md`
- `.ai-state/decision-log.md`
- `.ai-state/assumptions.md`
- the current task brief
- latest gate results

If durable state conflicts with conversation memory, durable state wins unless it is demonstrably stale.
