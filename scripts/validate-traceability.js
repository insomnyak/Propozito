#!/usr/bin/env node
const {
  exists,
  finish,
  readTaskLedger,
  readTraceability,
  requireArray,
  requireFields,
  resolveRoot
} = require("./lib/framework-validation");

const root = resolveRoot(process.argv[2]);
const errors = [];
const ledger = readTaskLedger(root, errors);
const traceability = readTraceability(root, errors);

if (traceability) {
  requireFields(traceability, ["schema_version", "entries"], "traceability", errors);
  requireArray(traceability, "entries", "traceability", errors);

  for (const entry of traceability.entries || []) {
    const label = `traceability entry '${entry.requirement_id || "unknown"}:${entry.acceptance_criterion_id || "unknown"}'`;
    requireFields(
      entry,
      [
        "requirement_id",
        "acceptance_criterion_id",
        "task_id",
        "implementation_files",
        "test_files",
        "test_command",
        "evidence_report",
        "gate_result",
        "persona_qa_result"
      ],
      label,
      errors
    );
    requireArray(entry, "implementation_files", label, errors, 1);
    requireArray(entry, "test_files", label, errors);

    for (const file of entry.implementation_files || []) {
      if (!exists(root, file)) errors.push(`${label}: implementation file '${file}' is missing`);
    }
    for (const file of entry.test_files || []) {
      if (!exists(root, file)) errors.push(`${label}: test file '${file}' is missing`);
    }
    for (const field of ["evidence_report", "gate_result", "persona_qa_result"]) {
      if (entry[field] && !exists(root, entry[field])) {
        errors.push(`${label}: ${field} '${entry[field]}' is missing`);
      }
    }
    if ((!entry.test_files || entry.test_files.length === 0 || !entry.test_command) && !entry.exemption) {
      errors.push(`${label}: acceptance criterion needs test files and test command or an explicit exemption`);
    }
  }
}

if (ledger && traceability) {
  const entries = traceability.entries || [];
  for (const task of ledger.tasks || []) {
    if (task.status !== "done") continue;
    const taskEntries = entries.filter((entry) => entry.task_id === task.task_id);
    if (taskEntries.length === 0) {
      errors.push(`task '${task.task_id}': completed task has no traceability entries`);
      continue;
    }
    for (const requirementId of task.requirement_ids || []) {
      if (!taskEntries.some((entry) => entry.requirement_id === requirementId)) {
        errors.push(`task '${task.task_id}': requirement '${requirementId}' is not represented in traceability`);
      }
    }
    for (const acId of task.acceptance_criteria_ids || []) {
      if (!taskEntries.some((entry) => entry.acceptance_criterion_id === acId)) {
        errors.push(`task '${task.task_id}': acceptance criterion '${acId}' is not represented in traceability`);
      }
    }
  }
}

finish(errors, "validate-traceability: pass");
