# Restart Recovery Gate

Gate ID: `restart-recovery`

## Purpose

Verify durable or runtime state can recover after restart when the feature depends on it.

## Checks

- restart scenario is documented
- recovery command or manual procedure exists
- expected post-restart state is defined
- evidence proves restore or explicitly exempts non-durable state

## Failure Routing

Return to implementation or state owner.
