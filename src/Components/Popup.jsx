import React, { useState } from "react";
import { useSnapshot } from "valtio";
import state, { openModal, closeModal } from "../store";
import { deleteTodo } from "../store";
import { toast } from "react-toastify";

const TaskOptions = ({ id, todo }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const snap = useSnapshot(state);

  //DELETE TODO
  const handleDelete = () => {
    // Call the deleteTodo function with the todo id
    const deleted = deleteTodo(id);
    if (deleted) {
      toast.success("Todo deleted", {
        autoClose: 5000,
        theme: "dark",
      });
    }
  };

  const handleEdit = () => {
    // Call the deleteTodo function with the todo id
    // setIsOpen(true);
    openModal(todo);
    toggleMenu();
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
          onClick={toggleMenu}
        >
          {/* Three dots icon */}
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
        </button>
      </div>

      {/* Dropdown menu */}
      {isMenuOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={handleEdit}
            >
              Edit
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={handleDelete}
            >
              Delete
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskOptions;
