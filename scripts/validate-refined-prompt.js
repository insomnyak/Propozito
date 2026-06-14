#!/usr/bin/env node
const { finish, readAiStateJson, requireArray, requireFields, resolveRoot } = require("./lib/framework-validation");

const root = resolveRoot(process.argv[2]);
const errors = [];
const prompt = readAiStateJson(root, "refined-prompt.json", errors);

if (prompt) {
  requireFields(prompt, ["prompt_id", "source_pre_prompt_id", "objective", "non_goals", "requirements", "acceptance_criteria", "affected_graph_nodes", "file_boundaries", "test_plan", "verification_plan", "evidence_plan", "required_gates", "state_updates", "commit_push_policy", "rollback_plan", "human_escalation_triggers", "completion_report_requirements"], "refined-prompt", errors);
  for (const field of ["non_goals", "requirements", "acceptance_criteria", "affected_graph_nodes", "test_plan", "verification_plan", "evidence_plan", "required_gates", "state_updates", "human_escalation_triggers", "completion_report_requirements"]) {
    requireArray(prompt, field, "refined-prompt", errors, 1);
  }
  if (!prompt.file_boundaries || !Array.isArray(prompt.file_boundaries.allowed_files) || prompt.file_boundaries.allowed_files.length === 0) {
    errors.push("refined-prompt: file_boundaries.allowed_files must contain at least one file");
  }
}

finish(errors, "validate-refined-prompt: pass");
