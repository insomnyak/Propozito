# Using Propozito In Your Project

Propozito is meant to be applied inside an app repository, not only read as a policy document. The repository state becomes the durable memory source for AI-assisted work.

## Basic Flow

1. Copy or reference the templates you need from `templates/`.
2. Fill the setup contract and terminology profile.
3. Create `.ai-state/project-state.json`.
4. Fill out a project purpose contract.
5. Create a feature goal contract with requirements, non-goals, and testable acceptance criteria.
6. Generate epics, stories, tasks, subtasks, and burst plans.
7. For complex systems, create an implementation map and relationship graph before coding.
8. Run task-readiness and impact validation before coding.
9. Execute one implementation burst.
10. Produce evidence with changed files, commands, raw output paths, exit codes, limitations, and approvals.
11. Run gates and validators.
12. Update status, placeholder, signoff, prompt-history, and context-pack artifacts where applicable.
13. Commit or checkpoint the completed task.
14. If interrupted, resume from `.ai-state/` instead of chat history.

## Suggested Project Layout

```text
your-app/
  .ai-state/
    project-state.json
    setup-contract.json
    terminology-profile.json
    task-ledger.json
    traceability-matrix.json
    app-relationship-graph.json
    implementation-map.json
    project-status.json
    verification-surfaces.json
    signoffs.json
    placeholder-ledger.json
    context-pack.json
    prompt-history.json
    rework-register.json
    decision-log.md
    assumptions.md
    open-questions.md
    risk-register.md
    evidence/
    gate-results/
    qa-reports/
    test-history/
  docs/
    project-purpose-contract.md
    features/
  src/
  tests/
```

## Minimum First Task

For the first implementation burst, keep scope intentionally small:

- one task
- one story
- one to three changed files
- one test command
- one evidence report
- required gates only

## Recommended Commands

From the Propozito framework repo, validate an app fixture or copied example by passing the target project path:

```sh
node scripts/validate-state.js /path/to/your-app
node scripts/validate-task.js /path/to/your-app
node scripts/validate-evidence.js /path/to/your-app
node scripts/validate-gate-result.js /path/to/your-app
node scripts/validate-traceability.js /path/to/your-app
```

For beta graph-aware projects, add validators matching the enabled setup contract:

```sh
node scripts/validate-setup.js /path/to/your-app
node scripts/validate-status.js /path/to/your-app
node scripts/validate-placeholders.js /path/to/your-app
node scripts/validate-relationship-graph.js /path/to/your-app
node scripts/impact-check.js /path/to/your-app --work-item TASK-ID
node scripts/validate-signoffs.js /path/to/your-app
node scripts/validate-refined-prompt.js /path/to/your-app
node scripts/validate-context-pack.js /path/to/your-app
node scripts/audit-prompt-history.js /path/to/your-app
node scripts/audit-rework.js /path/to/your-app
node scripts/check-evidence-storage.js /path/to/your-app
```

## Recovery Rule

After interruption or context compaction, reload:

- `.ai-state/project-state.json`
- `.ai-state/task-ledger.json`
- `.ai-state/traceability-matrix.json`
- `.ai-state/open-questions.md`
- `.ai-state/decision-log.md`
- `.ai-state/assumptions.md`
- latest evidence and gate results

If repository state conflicts with conversation memory, repository state wins unless proven stale.
