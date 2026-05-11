# Epic, Story, Task, Subtask, and Burst Policy

No coding begins from a vague feature request. Coding begins only from a verified task burst.

## Planning Spine

```text
Project Purpose
-> Feature Goal
-> Epic
-> Story
-> Acceptance Criteria
-> Task
-> Subtask
-> Burst
-> Tests
-> Evidence
-> Gate Results
-> Persona QA
-> State Checkpoint
```

## Burst Sizing Rules

- Preferred burst changes 1 to 3 files.
- A burst must be one reviewable patch.
- Split work that touches unrelated layers.
- Split schema/API/UI work unless it is explicitly planned as an integration burst.
- Split work that cannot be tested independently.
- Broad refactors must not be mixed into feature work.

## Task Requirements

Every implementation task must define:

- linked requirement IDs
- linked acceptance criteria IDs
- owner agent
- allowed files or file areas
- disallowed files or file areas
- dependencies
- required tests
- required gates
- evidence requirements
- risk level
- rollback notes when risky
- human escalation triggers

Every subtask must be independently verifiable.
