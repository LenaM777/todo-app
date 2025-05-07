import React, { useState } from "react";
import TodoForm from "./assets/components/TodoForm/TodoForm";
import TodoItem from "./assets/components/TodoItem/TodoItem";

const App = () => {
  const [todos, setTodos] = useState([]);

  function addTask(userInput) {
    if (userInput.trim() !== "") {
      const newTask = {
        id: Date.now(),
        task: userInput,
      };

      setTodos([newTask, ...todos]);
    }
  }

  return (
    <div>
      <h1>To-Do List</h1>
      <TodoForm addTask={addTask} />
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default App;
