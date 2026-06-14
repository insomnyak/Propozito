#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const { finish, readAiStateJson, readProjectState, resolveRoot } = require("./lib/framework-validation");

const root = resolveRoot(process.argv[2]);
const errors = [];
const state = readProjectState(root, errors);
const graph = readAiStateJson(root, "app-relationship-graph.json", errors);
const implementationMap = readAiStateJson(root, "implementation-map.json", errors);

if (state && graph && implementationMap) {
  const pack = {
    schema_version: "0.2",
    generated_at: new Date().toISOString(),
    mode: "handoff",
    source_paths: [".ai-state/project-state.json", ".ai-state/app-relationship-graph.json", ".ai-state/implementation-map.json"],
    project_summary: `${state.project_name} is in ${state.current_phase}.`,
    current_work_item: (state.active_tasks && state.active_tasks[0]) || (state.completed_tasks && state.completed_tasks[state.completed_tasks.length - 1]) || "none",
    relationship_graph_summary: `${graph.nodes.length} nodes, ${graph.edges.length} edges`,
    implementation_map_summary: `${implementationMap.subsystems.length} subsystem(s)`,
    open_questions: state.open_questions || [],
    next_safe_action: state.next_recommended_action
  };
  fs.writeFileSync(path.join(root, ".ai-state", "context-pack.json"), JSON.stringify(pack, null, 2));
  fs.writeFileSync(path.join(root, ".ai-state", "context-pack.md"), `# Context Pack\n\nProject: ${state.project_name}\n\nCurrent work: ${pack.current_work_item}\n\nGraph: ${pack.relationship_graph_summary}\n\nNext safe action: ${pack.next_safe_action}\n`);
}

finish(errors, "generate-context-pack: pass");
