# Autonomy Profile

The autonomy profile controls when Propozito continues, pauses, asks, or bundles work for review.

Canonical artifact: embedded in `.ai-state/setup-contract.json` or stored as `.ai-state/autonomy-profile.json`

Schema: `schemas/autonomy-profile.schema.json`

Supported modes:

- `stop_after_every_unit`
- `continue_non_blocking_then_pause`
- `pause_only_for_high_risk`
- `pause_only_for_failures`
- `autonomous_with_review_bundle`
- `manual_only`

The autonomy profile affects task sequencing, signoff requirements, context rotation, prompt refinement, and completion reports. It never overrides high-risk escalation rules.
