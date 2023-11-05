import { proxy } from "valtio";

const state = proxy({
  users: JSON.parse(localStorage.getItem("users")) || [],
  //for logedinUser
  // loggedUser: JSON.parse(localStorage.getItem("loggedUser")) || null,

  loggedUser: (() => {
    const storedUser = localStorage.getItem("loggedUser");
    try {
      return storedUser ? JSON.parse(storedUser) : null;
    } catch (error) {
      console.error("Error parsing loggedUser:", error);
      return null;
    }
  })(),

  todos: [],
  isOpen: false,
  editingTodo: null, // Initialize editingTodo as null
});

export const signup = (email, password) => {
  // Validate input (add more validation as needed)
  const user = state.users.find((user) => user.email === email);

  if (user) {
    return "exist";
  }

  // Create user object
  const newUser = {
    id: Date.now(), // You can use a more robust method for generating IDs
    email,
    password,
  };

  // Save user to local storage using Valtio
  state.users.push(newUser);
  localStorage.setItem("users", JSON.stringify(state.users));

  // Return the newly created user
  return newUser;
};

export const signin = (email, password) => {
  // if(state.users.length>0 )
  // {
  const user = state.users.find(
    (user) => user.email == email && user.password == password
  );
  // }

  state.loggedUser = user;
  localStorage.setItem("loggedUser", JSON.stringify(user));

  return !!user;
};

//Log Out
export const logOut = () => {
  state.loggedUser = null;
  localStorage.setItem("loggedUser", null);
};

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

  return true;
};

export const editTodo = (updatedTodo) => {
  state.todos = state.todos.map((todo) =>
    todo.id === updatedTodo.id ? updatedTodo : todo
  );
  localStorage.setItem("todos", JSON.stringify(state.todos));
  closeModal();

  return true;
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

  return true;
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
