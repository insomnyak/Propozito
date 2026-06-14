# State Lifecycle Protocol

Any task that creates or mutates runtime, durable, user, or external state must pass a state lifecycle review.

Canonical artifact: `.ai-state/state-lifecycle.json`

Schema: `schemas/state-lifecycle.schema.json`

Gates:

- `gates/state-lifecycle-gate.md`
- `gates/restart-recovery-gate.md`

Required answers:

- what state exists
- where it lives
- who owns it
- whether it survives restart
- how it is migrated
- how it is rolled back
- how it is tested
- how the user sees or verifies it
