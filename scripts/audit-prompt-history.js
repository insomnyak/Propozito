#!/usr/bin/env node
const { exists, finish, readAiStateJson, requireArray, requireFields, resolveRoot } = require("./lib/framework-validation");

const root = resolveRoot(process.argv[2]);
const errors = [];
const history = readAiStateJson(root, "prompt-history.json", errors);

if (history) {
  requireFields(history, ["schema_version", "entries"], "prompt-history", errors);
  requireArray(history, "entries", "prompt-history", errors);
  for (const entry of history.entries || []) {
    const label = `prompt-history entry '${entry.prompt_id || "unknown"}'`;
    requireFields(entry, ["prompt_id", "timestamp", "source_pre_prompt_path", "refined_prompt_path", "target_ai_coder", "context_paths", "expected_outputs", "status", "outcome"], label, errors);
    for (const pathField of ["source_pre_prompt_path", "refined_prompt_path"]) {
      if (entry[pathField] && !exists(root, entry[pathField])) errors.push(`${label}: ${pathField} '${entry[pathField]}' does not exist`);
    }
    for (const contextPath of entry.context_paths || []) {
      if (!exists(root, contextPath)) errors.push(`${label}: context path '${contextPath}' does not exist`);
    }
    if (entry.outcome === "accepted" && !entry.commit_sha) errors.push(`${label}: accepted outcome requires commit_sha or explicit non-commit outcome`);
  }
}

finish(errors, "audit-prompt-history: pass");
