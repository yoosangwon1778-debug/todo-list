import { useState,useRef } from 'react';
import './App.css';
import Header from './components/Header';
import TodoEditor from './components/TodoEditor';
import TodoList from './components/TodoList';

const mocData = [
  {
    id:0,
    isDone:false,
    content:"데미안",
    date:new Date().getTime()
  },
    {
    id:1,
    isDone:false,
    content:"어린 왕자",
    date:new Date().getTime()
  },
    {
    id:2,
    isDone:false,
    content:"불편한 편의점",
    date:new Date().getTime()
  }
]

function App() {
  const [todos,setTodos]=useState(mocData)
  const idRef = useRef(3)
  const onCreate=(content)=>{
    const newTodo={
      id:idRef.current,
      isDone:false,
      content:content,
      date:new Date().getTime()
    }
    setTodos([newTodo,...todos])
    idRef.current += 1
  }

  const onUpdate = (targetId, updates) => {

    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === targetId
          ? { ...todo, ...updates }
          : todo
      )
    )

  }

  const onDelete=(targetId)=>{
    setTodos(todos.filter((todo)=>todo.id!==targetId))
  }
  return (
    <div className='App'>
      <Header />
      <TodoEditor onCreate={onCreate} />
      <TodoList todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
