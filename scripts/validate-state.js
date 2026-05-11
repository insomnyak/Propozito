#!/usr/bin/env node
const path = require("path");
const {
  exists,
  finish,
  readProjectState,
  requireArray,
  requireFields,
  resolveRoot
} = require("./lib/framework-validation");

const root = resolveRoot(process.argv[2]);
const errors = [];
const state = readProjectState(root, errors);

if (state) {
  requireFields(
    state,
    [
      "schema_version",
      "project_id",
      "project_name",
      "current_phase",
      "status",
      "current_branch",
      "current_commit",
      "last_checkpoint",
      "active_tasks",
      "blocked_tasks",
      "completed_tasks",
      "open_questions",
      "high_risk_decisions_pending",
      "active_locks",
      "file_ownership",
      "branch_map",
      "worktree_map",
      "required_gates",
      "latest_gate_results",
      "test_commands",
      "latest_test_status",
      "persona_matrix_path",
      "decision_log_path",
      "assumption_log_path",
      "risk_register_path",
      "rollback_points",
      "next_recommended_action"
    ],
    "project-state",
    errors
  );

  for (const field of [
    "active_tasks",
    "blocked_tasks",
    "completed_tasks",
    "open_questions",
    "high_risk_decisions_pending",
    "active_locks",
    "required_gates",
    "test_commands",
    "rollback_points"
  ]) {
    requireArray(state, field, "project-state", errors);
  }

  const nonActiveStatuses = new Set(["idle", "release_ready", "archived"]);
  if (!nonActiveStatuses.has(state.status) && Array.isArray(state.active_tasks) && state.active_tasks.length === 0) {
    errors.push("project-state: active task is required unless status is idle, release_ready, or archived");
  }

  for (const field of ["persona_matrix_path", "decision_log_path", "assumption_log_path", "risk_register_path"]) {
    if (state[field] && !exists(root, state[field])) {
      errors.push(`project-state: '${field}' points to missing path '${state[field]}'`);
    }
  }

  if (state.latest_gate_results && typeof state.latest_gate_results === "object") {
    for (const [gateId, gatePath] of Object.entries(state.latest_gate_results)) {
      if (!exists(root, gatePath)) {
        errors.push(`project-state: latest gate result '${gateId}' points to missing path '${gatePath}'`);
      }
    }
  }

  if (Array.isArray(state.active_locks)) {
    const lockOwners = new Map();
    for (const lock of state.active_locks) {
      requireFields(lock, ["path", "owner_task", "owner_agent"], "project-state.active_locks[]", errors);
      if (lock.path) {
        if (lockOwners.has(lock.path)) {
          errors.push(`project-state: duplicate active lock for '${lock.path}'`);
        }
        lockOwners.set(lock.path, lock.owner_task);
      }
    }
  }

  if (!path.basename(root)) {
    errors.push("project-state: project root could not be resolved");
  }
}

finish(errors, "validate-state: pass");
