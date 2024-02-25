import React from "react";
import Style from "./Style.module.css";
import Todo from "./Todo";
function Todoitems(props) {
  return (
    <div>
      {props.todoList.map((value) => {
        return (
          <Todo
            {...value}
            key={value.id}
            togglecompleted={props.togglecompleted}
            removeTodo={props.removeTodo}
          ></Todo>
        );
      })}
    </div>
  );
}

export default Todoitems;
