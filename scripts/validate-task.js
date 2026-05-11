#!/usr/bin/env node
const {
  exists,
  finish,
  readJson,
  readTaskLedger,
  requireArray,
  requireFields,
  resolveRoot
} = require("./lib/framework-validation");

const root = resolveRoot(process.argv[2]);
const errors = [];
const ledger = readTaskLedger(root, errors);

if (ledger) {
  requireFields(ledger, ["schema_version", "tasks"], "task-ledger", errors);
  requireArray(ledger, "tasks", "task-ledger", errors);

  for (const task of ledger.tasks || []) {
    const label = `task '${task.task_id || "unknown"}'`;
    requireFields(
      task,
      [
        "task_id",
        "story_id",
        "objective",
        "owner_agent",
        "status",
        "requirement_ids",
        "acceptance_criteria_ids",
        "allowed_files",
        "disallowed_files",
        "dependencies",
        "required_tests",
        "required_gates",
        "evidence_requirements",
        "risk_level",
        "human_escalation_triggers"
      ],
      label,
      errors
    );

    for (const field of [
      "requirement_ids",
      "acceptance_criteria_ids",
      "allowed_files",
      "disallowed_files",
      "dependencies",
      "required_tests",
      "required_gates",
      "evidence_requirements",
      "human_escalation_triggers"
    ]) {
      requireArray(task, field, label, errors, ["requirement_ids", "acceptance_criteria_ids", "allowed_files", "required_tests", "required_gates", "evidence_requirements"].includes(field) ? 1 : 0);
    }

    if (["medium", "high"].includes(task.risk_level) && !task.rollback_notes) {
      errors.push(`${label}: medium/high risk tasks require rollback_notes`);
    }

    if (task.status === "done") {
      if (!task.evidence_path || !exists(root, task.evidence_path)) {
        errors.push(`${label}: done task must have existing evidence_path`);
      }
      requireArray(task, "gate_result_paths", label, errors, 1);
      for (const gatePath of task.gate_result_paths || []) {
        if (!exists(root, gatePath)) {
          errors.push(`${label}: gate result path '${gatePath}' does not exist`);
          continue;
        }
        const gate = readJson(`${root}/${gatePath}`, errors);
        if (gate && gate.status !== "pass") {
          errors.push(`${label}: done task references non-passing gate '${gatePath}'`);
        }
      }
      if ((!Array.isArray(task.commit_hashes) || task.commit_hashes.length === 0) && !task.no_commit_reason) {
        errors.push(`${label}: done task requires commit_hashes or no_commit_reason`);
      }
    }
  }
}

finish(errors, "validate-task: pass");
