import "./TodoItems.css";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";

const TodoItems = ({
  item,
  setItems,
  items,
  setItem,
  setEdit,
  setIndex,
  todoIndex,
}) => {
  const deleteTodo = () => {
    const newTodo = items.filter((todo) => item !== todo);

    setItems(newTodo);
  };

  const editTodo = () => {
    const editedItem = items.filter((todo) => item === todo);
    setEdit(true);
    setIndex(todoIndex);

    setItem(editedItem);
  };

  return (
    <>
      <li className="list">
        <div className="text-wrapper">
          <input type="checkbox" />
          {item}
        </div>
        <div className="icons"> 
          <MdEdit onClick={editTodo} />
          <MdDelete onClick={deleteTodo} />
        </div>
      </li>
    </>
  );
};

export default TodoItems;
