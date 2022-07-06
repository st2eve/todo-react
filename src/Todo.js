import React from 'react'

export default function Todo({todo, toggleTodo}) {

  function handleTodoClick(){
    toggleTodo(todo.id)
  }

  return (
    <div className='main__div-checkBox'>
        <label className='main__label-checkBox'>
            <input className='main__checkBox' type='checkbox' checked={todo.complete} onChange={handleTodoClick} />
            {todo.name}
        </label>
    </div>
  )
}
