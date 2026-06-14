#!/usr/bin/env node
const { finish, readAiStateJson, resolveRoot } = require("./lib/framework-validation");

const root = resolveRoot(process.argv[2]);
const workItemIndex = process.argv.indexOf("--work-item");
const workItemId = workItemIndex === -1 ? null : process.argv[workItemIndex + 1];
const errors = [];
const graph = readAiStateJson(root, "app-relationship-graph.json", errors);

if (!workItemId) errors.push("impact-check: missing --work-item <id>");

if (graph && workItemId) {
  const related = (graph.edges || []).filter((edge) => edge.from === workItemId || edge.to === workItemId);
  if (related.length === 0) {
    errors.push(`impact-check: no relationship graph edges found for '${workItemId}'`);
  } else {
    const impacts = related.map((edge) => `${edge.edge_id}:${edge.relationship}:${edge.impact}:${edge.from}->${edge.to}`);
    console.log(`impact-check: ${workItemId}`);
    console.log(`related_edges=${impacts.join(",")}`);
  }
}

finish(errors, "impact-check: pass");
