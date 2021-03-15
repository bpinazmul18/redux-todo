import "./App.css";
import Input from "./components/input";
import TodoItem from "./components/TodoItem";

import { useSelector } from "react-redux";
import { selectTodoList } from "./features/todoSlice";

function App() {
  const todoList = useSelector(selectTodoList);
  return (
    <div className="App">
      <div className="app__container">
        <Input />
        <div className="app__todoContainer">
          {todoList.map((item) => (
            <TodoItem
              key={item.id}
              name={item.item}
              done={item.done}
              id={item.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
