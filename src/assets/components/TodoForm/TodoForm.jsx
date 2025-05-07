import React, { useState } from "react";
import "./TodoForm.css";

const TodoForm = ({ addTask }) => {
  const [userInput, setUserInput] = useState("");

  function handleChange(event) {
    setUserInput(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    addTask(userInput);
    setUserInput("");
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        className="todo-input"
        type="text"
        placeholder="Add a new task..."
        onChange={handleChange}
        value={userInput}
      />
      <button className="todo-button" type="submit">
        Add
      </button>
    </form>
  );
};

export default TodoForm;
