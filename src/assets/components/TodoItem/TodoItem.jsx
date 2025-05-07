import React from "react";
import "./TodoItem.css";
import { FaCircleCheck } from "react-icons/fa6";
import {
  RiDeleteBin6Line,
  RiArrowDropUpFill,
  RiArrowDropDownFill,
} from "react-icons/ri";

const TodoItem = ({
  todo,
  toggleTask,
  deleteTask,
  index,
  moveTaskUp,
  moveTaskDown,
}) => {
  return (
    <div className="todo-item">
      <div className="todo-row" onClick={() => toggleTask(todo.id)}>
        <div className="todo-check">
          {todo.completed ? <FaCircleCheck /> : ""}
        </div>
        <p className={todo.completed ? "complete" : ""}> {todo.task} </p>
      </div>
      <div className="row-buttons">
        <RiDeleteBin6Line onClick={() => deleteTask(todo.id)} />
        <div className="move-buttons">
          <RiArrowDropUpFill onClick={() => moveTaskUp(index)} />
          <RiArrowDropDownFill onClick={() => moveTaskDown(index)} />
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
