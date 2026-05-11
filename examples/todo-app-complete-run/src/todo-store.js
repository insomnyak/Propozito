function createTodoStore() {
  let nextId = 1;
  const todos = [];

  return {
    add(text) {
      const title = String(text || "").trim();
      if (!title) {
        throw new Error("Task text is required.");
      }
      const todo = { id: nextId++, title, completed: false };
      todos.push(todo);
      return todo;
    },

    toggle(id) {
      const todo = todos.find((item) => item.id === id);
      if (!todo) {
        throw new Error("Task not found.");
      }
      todo.completed = !todo.completed;
      return todo;
    },

    remove(id) {
      const index = todos.findIndex((item) => item.id === id);
      if (index === -1) {
        throw new Error("Task not found.");
      }
      todos.splice(index, 1);
    },

    list() {
      return todos.map((todo) => ({ ...todo }));
    }
  };
}

module.exports = { createTodoStore };
