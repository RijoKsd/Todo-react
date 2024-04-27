import TodoItems from "../TodoItems/TodoItems";
import "./TodoForm.css";
import { useState } from "react";
const TodoForm = () => {
  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);
  const [edit, setEdit] = useState(false);
  const [todoIndex, setTodoIndex] = useState("");

  const addTodo = () => {
    //  enter key to add todo item
    if (item === "") {
      return;
    }

    if (edit) {
      items[todoIndex] = item;
      setItems([...items]);
    }
    item && !edit && setItems([item, ...items]);

    setItem("");
  };

  const todoItems = items.map((item, index) => {
    return (
      <TodoItems
        key={index}
        item={item}
        setItems={setItems}
        items={items}
        setItem={setItem}
        setEdit={setEdit}
        setIndex={setTodoIndex}
        todoIndex={index}
      />
    );
  });

  const addTodoItem = (e) => {
    setItem(e.target.value);
  };
  return (
    <div className="wrapper">
      <div className="todo-wrapper">
        <input
          onChange={addTodoItem}
          value={item}
          type="text"
          className="todo-input"
          placeholder="Enter todo items here"
        />
        <div className="buttons">
          <select name="filter" id="filter" className="filter">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="deleted">Deleted</option>
            <option value="favorite">Favorite</option>
          </select>

          <button type="button" onClick={addTodo} className="todo-button">
            {edit ? " Edit" : "Add"}
          </button>
        </div>
      </div>
      <ul className="todo-items">
        {todoItems && todoItems.length > 0 ? todoItems : <p>No items</p>}
      </ul>
    </div>
  );
};

export default TodoForm;
