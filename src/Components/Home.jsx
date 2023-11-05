import React, { useEffect, useState } from "react";
import Task from "./Task";
import Modal from "./Modal";
import state from "../store";
import { useSnapshot } from "valtio";
// import TaskOptions from "./Popup";

const Home = () => {
  const snap = useSnapshot(state);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      state.todos = storedTodos;
    }
  }, [state.todos.$]);

  // console.log(state.todos);
  // const [todos, setTodos] = useState([]);

  //fetch todos form local storage
  // useEffect(
  //   () => {
  //     const storedTodos = JSON.parse(localStorage.getItem("todos"));
  //     if (storedTodos) {
  //       setTodos(storedTodos);
  //       // state.todos = [...state.todos, storedTodos];

  //       console.log(typeof todos);
  //     }
  //   },
  //   [],
  //   snap
  // );

  // const storedTodos = JSON.parse(localStorage.getItem("todos"));
  // if (storedTodos) {
  //   setTodos(storedTodos);
  //   state.todos = [...state.todos, storedTodos];
  // }
  //   useEffect(() => {
  //     const storedTodos = JSON.parse(localStorage.getItem("todos"));
  //     if (storedTodos) {
  //       const todosArray = Array.isArray(storedTodos)
  //         ? storedTodos
  //         : [storedTodos];
  //       setTodos(todosArray);
  //     } else {
  //       setTodos([]);
  //     }
  //   }, []);
  // console.log("state", state);

  return (
    <div className="flex items-center justify-center my-[100px] flex-col gap-14">
      {snap.todos.length === 0 ? (
        <div className="flex items-center justify-center max-w-screen-sm mx-auto">
          <span className="text-gradient_blue-purple text-[44px] heading1 flex items-center justify-center h-screen p-4">
            No Todos yet! Add a New Todo
          </span>
        </div>
      ) : (
        snap.todos.map((todo) => <Task todo={todo} key={todo.id} />)
      )}
      <Modal />
    </div>
  );
};

export default Home;
