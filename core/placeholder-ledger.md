# Placeholder Ledger

The placeholder ledger prevents fake UI, fake data, mocks, stubs, and hardcoded values from being mistaken for completed work.

Canonical artifact: `.ai-state/placeholder-ledger.json`

Schema: `schemas/placeholder-ledger.schema.json`

Template: `templates/placeholder-ledger.json`

Validator: `scripts/validate-placeholders.js`

A feature is not done if its placeholders remain live unless each remaining placeholder is explicitly deferred with owner approval and a replacement plan.

Allowed states:

- `placeholder`
- `planned`
- `in_progress`
- `partial`
- `real`
- `deferred`
- `removed`
