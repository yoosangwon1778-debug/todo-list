import { useRef, useState } from 'react';
import './TodoEditor.css';

const TodoEditor = ({onCreate}) => {
    const[content,setContent]=useState('')
    const inputRef=useRef()
    const onchangeContent=(e)=>{
        setContent(e.target.value)
    }

    const onKeyDown=(e)=>{
        if(e.keyCode===13){
            onSubmit()
        }
    }
    const onSubmit=()=>{
        if(content===''){
            inputRef.current.focus()
            return
        }
        onCreate(content)
        setContent('')
    }
  return (
    <div className="Editor">
      <input type="text"
      ref={inputRef}
      value={content}
      onKeyDown={onKeyDown}
      onChange={onchangeContent}
      placeholder="읽을 책 제목..." />
      <button onClick={onSubmit}>담기</button>
    </div>
  );
};

export default TodoEditor;
