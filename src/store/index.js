import { proxy } from "valtio";

const state = proxy({
  todos: [],
});

export const addTodo = (newTodo) => {
  // state.todos.push(newTodo);
  state.todos = [newTodo, ...state.todos];

  localStorage.setItem("todos", JSON.stringify(state.todos));
};

//FUNCTION TO DELETE TO DO
export const deleteTodo = (todoId) => {
  // Find the index of the todo with the given id
  const todoIndex = state.todos.findIndex((todo) => todo.id === todoId);

  // If the todo is found, remove it from the array
  if (todoIndex !== -1) {
    state.todos.splice(todoIndex, 1);

    // Update local storage with the modified todos array
    localStorage.setItem("todos", JSON.stringify(state.todos));
  }
};

export default state;
