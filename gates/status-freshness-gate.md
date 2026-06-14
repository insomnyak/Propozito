# Status Freshness Gate

Gate ID: `status-freshness`

## Purpose

Ensure the Project Control Room reflects canonical `.ai-state` and is not a stale manual status page.

## Required Inputs

- `.ai-state/project-state.json`
- `.ai-state/project-status.json`
- latest gate results
- placeholder ledger
- signoff records

## Checks

- status branch and commit match project state
- active and blocked work match project state
- latest gates and evidence are referenced
- placeholder counts match the placeholder ledger
- next recommended action is present

## Failure Routing

Return to the orchestrator or status generator before release or handoff.
