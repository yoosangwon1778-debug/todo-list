import React, { useState } from 'react'
import './TodoItem.css'

const toInputDate = (time) => {
  const d = new Date(time)
  const mm = String(d.getMonth() + 1).padStart(2, '0')
  const dd = String(d.getDate()).padStart(2, '0')

  return `${d.getFullYear()}-${mm}-${dd}`
}


const TodoItem = ({ id, isDone, content, date, onUpdate, onDelete }) => {

  const [isEdit, setIsEdit] = useState(false)
  const [editContent, setEditContent] = useState(content)
  const [editDate, setEditDate] = useState(toInputDate(date))

  const onChangeCheck = () => onUpdate(id, { isDone: !isDone })

  const onClickUpdate = () => {
    if (isEdit) {
      if (!editContent.trim()) return

      onUpdate(id, {
        content: editContent,
        date: new Date(editDate).getTime()
      })
    }
    setIsEdit(!isEdit)
  }

  const onClickDelete = () => {
    onDelete(id)
  }

  return (
    <div className={`TodoItem${isDone ? " isDone" : ""}`}>
      <input type="checkbox" checked={isDone} onChange={onChangeCheck} />

      {isEdit ? (
        <>
          <input
            type="text"
            className='content'
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
          />
          <input
            type="date"
            className='date'
            value={editDate}
            onChange={(e) => setEditDate(e.target.value)}
          />

        </>

      ) : (
        <>
          <div className="content">{content}</div>
          <div className="date">{new Date(date).toLocaleDateString()}</div>
        </>
      )}


      <div className="btns-wrap">

        <button className="updateBtn" onClick={onClickUpdate}>
          {isEdit ? '저장' : '수정'}
        </button>
        <button className="deleteBtn" onClick={onClickDelete}>삭제</button>
      </div>

    </div>
  )
}

export default TodoItem
