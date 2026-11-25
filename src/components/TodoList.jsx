import { useState } from "react";
import "./TodoList.css";
import TodoItem from "./TodoItem";

const TodoList = ({todos, onUpdate, onDelete}) => {
  const [search, setSearch] = useState("")

  const onChangeSearch = (e) => {
    setSearch(e.target.value)
  }

  const getFilteredData = () => {
    if (search === "") {
      return todos
    }
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase())
    )
  }

  const filteredTodos = getFilteredData()

  return (
    <div className="TodoList">
      <h4>	읽을 책 목록 📖</h4>
      <input
        value={search}
        onChange={onChangeSearch}
        placeholder="책 제목으로 검색" />
      <div className="todos-wrapper">
        {filteredTodos.map((todo)=>{
            return <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete}/>
        })}
      </div>
    </div>
  );
};

export default TodoList;
