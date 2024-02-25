import React, { useState } from "react";
import Style from "./Style.module.css";
import { ImCross } from "react-icons/im";
function Todo(props) {
  function handlecheck() {
    return props.togglecompleted(props.id);
  }
  return (
    <div className={Style.itemcart}>
      <input
        type="checkbox"
        checked={props.completed}
        onChange={handlecheck}
        name=""
        id=""
      />
      <p
        className={`${Style.task_name} ${
          props.completed ? Style.completes : ""
        }`}
      >
        {props.title}
      </p>
      <button
        className={Style.close_btn}
        onClick={() => props.removeTodo(props.id)}
      >
        <ImCross></ImCross>
      </button>
    </div>
  );
}

export default Todo;
