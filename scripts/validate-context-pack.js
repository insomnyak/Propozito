#!/usr/bin/env node
const { exists, finish, readAiStateJson, requireArray, requireFields, resolveRoot } = require("./lib/framework-validation");

const root = resolveRoot(process.argv[2]);
const errors = [];
const pack = readAiStateJson(root, "context-pack.json", errors);

if (pack) {
  requireFields(pack, ["schema_version", "generated_at", "mode", "source_paths", "project_summary", "current_work_item", "relationship_graph_summary", "implementation_map_summary", "open_questions", "next_safe_action"], "context-pack", errors);
  requireArray(pack, "source_paths", "context-pack", errors, 1);
  for (const sourcePath of pack.source_paths || []) {
    if (!exists(root, sourcePath)) errors.push(`context-pack: source path '${sourcePath}' does not exist`);
  }
}

finish(errors, "validate-context-pack: pass");
