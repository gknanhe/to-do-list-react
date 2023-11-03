import React, { useEffect, useState } from "react";
import Task from "./Task";
import Modal from "./Modal";
const Home = () => {
  const [todos, setTodos] = useState([]);

  //fetch todos form local storage
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      setTodos(storedTodos);
      console.log(typeof todos);
    }
  }, []);

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
  return (
    <div className=" flex items-center justify-center my-[200px] flex-col gap-14 ">
      {todos.length > 0 &&
        todos.map((todo) => {
          console.log(todo); // Log each todo
          return <Task key={todo.id} todo={todo} />;
        })}

      <Modal />
    </div>
  );
};

export default Home;
