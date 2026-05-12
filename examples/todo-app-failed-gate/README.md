# Failed Gate Example

This example is intentionally invalid.

It demonstrates how Propozito validators expose shortcut behavior when a task is marked done without enough evidence.

Expected failures include:

- changed file contains a TODO placeholder
- test file is assertion-free
- evidence references missing raw test output
- evidence includes an "assumed working" claim
- task is marked done while referencing a failed gate
- task is marked done without a commit hash or no-commit reason
- traceability omits acceptance criteria and persona QA result

Run individual validators to inspect the failure messages:

```sh
node scripts/validate-task.js examples/todo-app-failed-gate
node scripts/validate-evidence.js examples/todo-app-failed-gate
node scripts/validate-traceability.js examples/todo-app-failed-gate
```

This fixture should fail. The complete passing fixture is `examples/todo-app-complete-run/`.
