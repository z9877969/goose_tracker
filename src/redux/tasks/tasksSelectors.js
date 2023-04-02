export const selectorTasks = (state) => state.tasks.tasksByDate;
export const selectorTasksQuantity = (state) =>
  selectorTasks(state).reduce((acc, el) => acc + el.tasks.length, 0);
