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
        completed: false,
      };

      setTodos([newTask, ...todos]);
    }
  }

  function toggleTask(id) {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : { ...todo }
    );
    setTodos(updatedTodos);
  }

  return (
    <div>
      <h1>To-Do List</h1>
      <TodoForm addTask={addTask} />
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} toggleTask={toggleTask} />
      ))}
    </div>
  );
};

export default App;
