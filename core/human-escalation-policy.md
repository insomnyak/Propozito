# Human Escalation Policy

Escalation is tool-agnostic.

Supported channels:

- `cli_prompt`
- `github_issue`
- `slack`
- `email`
- `web_ui`
- `manual`

## Behavior

- High-risk ambiguity: pause and ask.
- Medium-risk ambiguity: ask unless reversible and isolated.
- Low-risk ambiguity: make a conservative assumption, log it, and continue.

## Owner Question Format

- context
- decision needed
- options
- recommended option
- risks
- default if no answer is received
- whether work is paused or continuing
