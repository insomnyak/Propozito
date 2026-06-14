#!/usr/bin/env node
const { finish, readAiStateJson, requireArray, requireFields, resolveRoot } = require("./lib/framework-validation");

const root = resolveRoot(process.argv[2]);
const errors = [];
const register = readAiStateJson(root, "rework-register.json", errors);

if (register) {
  requireFields(register, ["schema_version", "entries"], "rework-register", errors);
  requireArray(register, "entries", "rework-register", errors);
  for (const entry of register.entries || []) {
    const label = `rework entry '${entry.work_item_id || "unknown"}'`;
    requireFields(entry, ["feature_id", "work_item_id", "status", "failure_type", "root_cause", "scope_misread", "tests_that_failed_to_catch_it", "new_tests_added", "rework_plan", "rework_status", "lessons_for_framework"], label, errors);
    if (entry.status === "open" && !entry.rework_plan) errors.push(`${label}: open rework requires rework_plan`);
    if (entry.rework_status === "accepted" && !entry.accepted_at) errors.push(`${label}: accepted rework requires accepted_at`);
  }
}

finish(errors, "audit-rework: pass");
