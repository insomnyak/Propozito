#!/usr/bin/env node
const { finish, readAiStateJson, readProjectState, requireArray, requireFields, resolveRoot } = require("./lib/framework-validation");

const root = resolveRoot(process.argv[2]);
const errors = [];
const state = readProjectState(root, errors);
const status = readAiStateJson(root, "project-status.json", errors);

if (status) {
  requireFields(status, ["schema_version", "project_id", "project_goal", "updated_at", "source_state_path", "current_branch", "current_commit", "overall_progress", "active_work", "blocked_work", "open_questions", "latest_gates", "latest_evidence", "latest_tests", "verification_status", "owner_signoffs", "placeholder_burndown", "relationship_graph_health", "next_recommended_action"], "project-status", errors);
  for (const field of ["active_work", "blocked_work", "open_questions", "latest_gates", "latest_evidence", "latest_tests", "owner_signoffs"]) {
    requireArray(status, field, "project-status", errors);
  }
  if (state) {
    if (status.project_id !== state.project_id) errors.push("project-status: project_id does not match project-state");
    if (status.current_branch !== state.current_branch) errors.push("project-status: current_branch does not match project-state");
    if (status.current_commit !== state.current_commit) errors.push("project-status: current_commit does not match project-state");
  }
}

finish(errors, "validate-status: pass");
