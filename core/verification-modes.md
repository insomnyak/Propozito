# Verification Modes

Verification mode defines how humans and machines verify work.

Schema: `schemas/verification-mode.schema.json`

Supported modes:

- `frontend_verification`
- `cli_verification`
- `api_verification`
- `backend_verification`
- `hybrid_verification`
- `headless_ci_verification`
- `manual_human_review`

Verification mode is selected in the setup contract and reflected in verification surfaces, evidence manifests, signoff policy, and task gates. Frontend verification is optional; Propozito must support non-frontend projects.
