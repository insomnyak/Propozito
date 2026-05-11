#!/usr/bin/env node
const {
  finish,
  nonEmptyFile,
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
  for (const task of ledger.tasks || []) {
    if (task.status !== "done") continue;
    const evidence = readJson(`${root}/${task.evidence_path}`, errors);
    if (!evidence) continue;

    const label = `evidence '${task.evidence_path}'`;
    requireFields(
      evidence,
      [
        "evidence_id",
        "task_id",
        "agent",
        "timestamp",
        "changed_files",
        "requirement_ids",
        "acceptance_criteria_ids",
        "tests_added_or_modified",
        "commands",
        "known_limitations",
        "human_approvals"
      ],
      label,
      errors
    );

    if (evidence.task_id !== task.task_id) {
      errors.push(`${label}: task_id '${evidence.task_id}' does not match ledger task '${task.task_id}'`);
    }

    for (const field of ["changed_files", "requirement_ids", "acceptance_criteria_ids", "tests_added_or_modified", "commands", "known_limitations", "human_approvals"]) {
      requireArray(evidence, field, label, errors, ["changed_files", "requirement_ids", "acceptance_criteria_ids", "commands"].includes(field) ? 1 : 0);
    }

    for (const command of evidence.commands || []) {
      requireFields(command, ["command", "raw_output_path", "exit_code"], `${label}.commands[]`, errors);
      if (command.raw_output_path && !nonEmptyFile(root, command.raw_output_path)) {
        errors.push(`${label}: raw output '${command.raw_output_path}' is missing or empty`);
      }
      if (typeof command.exit_code !== "number") {
        errors.push(`${label}: command exit_code must be numeric`);
      } else if (command.exit_code !== 0) {
        errors.push(`${label}: command '${command.command}' recorded non-zero exit code ${command.exit_code}`);
      }
    }
  }
}

finish(errors, "validate-evidence: pass");
