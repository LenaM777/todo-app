import React from "react";
import "./TodoItem.css";
import { FaCircleCheck } from "react-icons/fa6";
import {
  RiDeleteBin6Line,
  RiArrowDropUpFill,
  RiArrowDropDownFill,
} from "react-icons/ri";

const TodoItem = ({ todo }) => {
  return (
    <div className="todo-item">
      <div className="todo-row">
        <div className="todo-check">
          <FaCircleCheck />
        </div>
        <p>{todo.task}</p>
      </div>
      <div className="row-buttons">
        <RiDeleteBin6Line />
        <div className="move-buttons">
          <RiArrowDropUpFill />
          <RiArrowDropDownFill />
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
