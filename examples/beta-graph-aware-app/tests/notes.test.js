const assert = require("assert");
const { renderNotes } = require("../src/client/notes-ui");
const { createNoteStore } = require("../src/server/notes-service");

const store = createNoteStore();
const note = store.add("Graph-aware beta example");
assert.strictEqual(note.id, "note-1");
assert.strictEqual(renderNotes(store.list()), "note-1: Graph-aware beta example");
assert.throws(() => store.add(" "), /Note title is required/);

console.log("notes beta test passed with create/list/render and blank-title rejection");
