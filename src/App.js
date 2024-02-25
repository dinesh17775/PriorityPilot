import Todonames from "./components/Todonames";
import Style from "./components/Style.module.css";
import Todoitems from "./components/Todoitems";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
function App() {
  const [todoList, settodoList] = useState([]);
  function addTodo(newItem) {
    settodoList((currentState) => [...currentState, newItem]);
  }
  function togglecompleted(id) {
    settodoList((prevstate) => {
      return prevstate.map((item) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        } else {
          return item;
        }
      });
    });
  }
  function removeTodo(id) {
    let newItems = [];
    todoList.forEach((value) => {
      if (value.id !== id) {
        newItems.push(value);
      }
    });
    settodoList(newItems);
  }
  return (
    <div className={Style.to_do_app}>
      <ToastContainer></ToastContainer>
      <h1 className={Style.main_title}>To-Do-List</h1>
      <Todonames addTodo={addTodo}></Todonames>
      <Todoitems
        todoList={todoList}
        togglecompleted={togglecompleted}
        removeTodo={removeTodo}
      ></Todoitems>
    </div>
  );
}

export default App;
