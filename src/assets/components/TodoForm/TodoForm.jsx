import React, { useState } from "react";

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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new task..."
        onChange={handleChange}
        value={userInput}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
