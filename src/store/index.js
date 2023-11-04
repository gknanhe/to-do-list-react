import { proxy } from "valtio";

const state = proxy({
  todos: [],
  isOpen: false,
  editingTodo: null, // Initialize editingTodo as null
});

export const openModal = (todo = null) => {
  state.isOpen = true;
  state.editingTodo = todo;
};

export const closeModal = () => {
  state.isOpen = false;
  state.editingTodo = null; // Reset editingTodo when closing the modal
};

export const addTodo = (newTodo) => {
  // state.todos.push(newTodo);
  state.todos = [newTodo, ...state.todos];

  localStorage.setItem("todos", JSON.stringify(state.todos));
};

export const editTodo = (updatedTodo) => {
  state.todos = state.todos.map((todo) =>
    todo.id === updatedTodo.id ? updatedTodo : todo
  );
  localStorage.setItem("todos", JSON.stringify(state.todos));
  closeModal();
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

// New function to mark a todo as done
export const markAsDone = (todoId) => {
  console.log("hheee");
  state.todos = state.todos.map((todo) =>
    todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
  );
  console.log("mark", state.todos);
  localStorage.setItem("todos", JSON.stringify(state.todos));
};

export default state;
