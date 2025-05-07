import React, { useState } from "react";
import TodoForm from "./assets/components/TodoForm/TodoForm";

const App = () => {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <h1>To-Do List</h1>
      <TodoForm />
    </div>
  );
};

export default App;
