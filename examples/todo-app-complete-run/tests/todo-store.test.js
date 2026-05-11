const assert = require("assert");
const { createTodoStore } = require("../src/todo-store");

const store = createTodoStore();
const first = store.add("Write task readiness gate");
assert.strictEqual(first.title, "Write task readiness gate");
assert.strictEqual(store.list().length, 1);

assert.throws(() => store.add("   "), /Task text is required/);

const completed = store.toggle(first.id);
assert.strictEqual(completed.completed, true);

store.remove(first.id);
assert.strictEqual(store.list().length, 0);

console.log("todo-store tests passed");
