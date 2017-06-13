export const todoStore = title =>
  observable({
    title: title,
    finished: false,
  });

export const todoListStore = observable({
  todos: [],
  unfinishedTodoCount: computed(() => {
    return todoListStore.todos.filter(todo => !todo.finished).length;
  }),
});
