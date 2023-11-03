import React from "react";

const Task = ({ todo }) => {
  return (
    <div
      className="h-auto w-[90%] md:w-[70%] lg:w-[50%] flex items-center justify-center  shadow"
      key={todo.id}
    >
      <div className="w-full h-auto rounded-xl flex items-center justify-between flex-col gap-4 px-8 py-8 bg-[#5061FF]">
        <div className="flex items-center justify-between gap-2 w-full">
          <div className="font-bold text-2xl text-white"> {todo.task}</div>
          <div className="text-base">{todo.createdAt}</div>
        </div>
        <div className=" flex items-center justify-between  w-full ">
          <div className="flex items-start justify-start flex-col gap-4">
            <div className="text-slate-200 font-medium">{todo.discription}</div>
            <div className="text-slate-200">{todo.date}</div>
          </div>
          <div className="text-white mx-1 my-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-more-vertical"
            >
              <circle cx="12" cy="12" r="1"></circle>
              <circle cx="12" cy="5" r="1"></circle>
              <circle cx="12" cy="19" r="1"></circle>
            </svg>
          </div>
        </div>
        <div className="w-full flex items-start justify-start">
          <div className="w-[100px] border flex items-center justify-center font-bold text-black border-yellow-400 rounded-2xl px-1 py-1 bg-yellow-300 shadow-lg shadow-yellow-500/50">
            {todo?.category ? `${todo.category}` : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
