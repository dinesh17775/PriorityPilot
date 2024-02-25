import React, { useState } from "react";
import Style from "./Style.module.css";
import { v4 as uuid } from "uuid";
import { toast } from "react-toastify";
function Todonames(props) {
  const [taskName, setTaskName] = useState("");
  function changeTaskName(e) {
    setTaskName(e.target.value);
  }
  function handleSubmit(e) {
    console.log("submitted");
    if (taskName.trim().length === 0) {
      toast.error("Please Enter a valid task name!", {
        autoClose: 2000,
      });
    } else {
      const newTodo = {
        title: taskName,
        completed: false,
        id: uuid(),
      };
      props.addTodo(newTodo);
      setTaskName("");
    }
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit} action="" className={Style.form_input}>
      <input
        type="text"
        placeholder="Add your task"
        onChange={changeTaskName}
        name=""
        value={taskName}
        id=""
        className={Style.form_text_input}
      />
      <button type="submit" className={Style.add_btn}>
        Add
      </button>
    </form>
  );
}

export default Todonames;
