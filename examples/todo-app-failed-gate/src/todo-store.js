function addTodo(text) {
  // TODO: reject empty text before this task can be complete.
  return { id: 1, title: text, completed: false };
}

module.exports = { addTodo };
