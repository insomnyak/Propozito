#!/usr/bin/env node
const {
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
  for (const task of ledger.tasks || []) {
    for (const gatePath of task.gate_result_paths || []) {
      const gate = readJson(`${root}/${gatePath}`, errors);
      if (!gate) continue;
      const label = `gate '${gatePath}'`;

      requireFields(gate, ["gate_id", "task_id", "agent", "timestamp", "status", "inputs_checked", "commands_run", "findings", "routing_decision"], label, errors);
      for (const field of ["inputs_checked", "commands_run", "findings"]) {
        requireArray(gate, field, label, errors);
      }

      if (gate.task_id !== task.task_id) {
        errors.push(`${label}: task_id '${gate.task_id}' does not match ledger task '${task.task_id}'`);
      }
      if (!["pass", "fail", "escalated"].includes(gate.status)) {
        errors.push(`${label}: invalid status '${gate.status}'`);
      }
      if (gate.status !== "pass" && !gate.routing_decision) {
        errors.push(`${label}: failed or escalated gate requires routing_decision`);
      }
    }
  }
}

finish(errors, "validate-gate-result: pass");
