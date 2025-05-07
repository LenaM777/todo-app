import React from "react";
import { FaCircleCheck } from "react-icons/fa6";
import {
  RiDeleteBin6Line,
  RiArrowDropUpFill,
  RiArrowDropDownFill,
} from "react-icons/ri";

const TodoItem = ({ todo }) => {
  return (
    <div>
      <FaCircleCheck />
      <p>{todo.task}</p>
      <RiDeleteBin6Line />
      <RiArrowDropUpFill />
      <RiArrowDropDownFill />
    </div>
  );
};

export default TodoItem;
