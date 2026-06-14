# Rework Protocol

The rework register turns rejection, failed gates, missing tests, and owner feedback into structured learning.

Canonical artifact: `.ai-state/rework-register.json`

Schema: `schemas/rework-register.schema.json`

Template: `templates/rework-entry.json`

Validator: `scripts/audit-rework.js`

Every rework entry records feature/work item, status, owner rejection note, failure type, root cause, scope misread, tests that failed to catch it, new tests added, rework plan, rework status, acceptance timestamp, and lessons for the framework.
