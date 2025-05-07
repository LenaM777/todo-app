import React, { useEffect, useState } from "react";
import TodoForm from "./assets/components/TodoForm/TodoForm";
import TodoItem from "./assets/components/TodoItem/TodoItem";
import "./App.css";
import { RiCalendarTodoLine } from "react-icons/ri";

const App = () => {
  const [todos, setTodos] = useState(
    localStorage.getItem("todolist")
      ? JSON.parse(localStorage.getItem("todolist"))
      : []
  );

  useEffect(() => {
    localStorage.setItem("todolist", JSON.stringify(todos));
  }, [todos]);

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

  function deleteTask(id) {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTodos = [...todos];
      [updatedTodos[index], updatedTodos[index - 1]] = [
        updatedTodos[index - 1],
        updatedTodos[index],
      ];
      setTodos(updatedTodos);
    }
  }

  function moveTaskDown(index) {
    if (index < todos.length - 1) {
      const updatedTodos = [...todos];
      [updatedTodos[index], updatedTodos[index + 1]] = [
        updatedTodos[index + 1],
        updatedTodos[index],
      ];
      setTodos(updatedTodos);
    }
  }

  return (
    <div className="todo-app">
      <div className="todo-title">
        <RiCalendarTodoLine className="icon-title" />
        <h1>To-Do List</h1>
      </div>

      <TodoForm addTask={addTask} />
      {todos.map((todo, index) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          index={index}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          moveTaskUp={moveTaskUp}
          moveTaskDown={moveTaskDown}
        />
      ))}
    </div>
  );
};

export default App;
