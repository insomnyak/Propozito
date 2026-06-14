# Prompt History Gate

Gate ID: `prompt-history`

## Purpose

Ensure rough requests, refined prompts, target AI tool, context paths, expected outputs, outcomes, and lessons are recorded.

## Checks

- prompt-history entry exists
- source pre-prompt and refined prompt exist
- target AI coder/tool is recorded
- accepted/reworked outcomes include commit or no-commit reason
- lessons are recorded for rejected or reworked prompts

## Failure Routing

Return to prompt refinement owner.
