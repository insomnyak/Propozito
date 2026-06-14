# Context Rotation Gate

Gate ID: `context-rotation`

## Purpose

Ensure long-running or high-risk sessions rotate context from durable state instead of relying on chat memory.

## Checks

- context rotation policy exists
- context pack is current
- required bootstrap paths exist
- high-risk/rework/release triggers are honored

## Failure Routing

Return to orchestrator or context-compaction manager.
