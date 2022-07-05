import React, { useState, useRef } from 'react';
import TodoList from './TodoList'
//import uuidv4 from 'uuid/v4'

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  function handleAddTodo(e){
    const name = todoNameRef.current.value
    if (name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, {id: 1, name: name, complete: false}]
    })
    todoNameRef.current.value = null
  }

  return (
    <>
      <TodoList todos={todos} />
      <input ref={todoNameRef} type='text' />
      <button onClick={handleAddTodo}>Ajouter ToDo</button>
      <button>Supprimer les Todos terminés</button>
      <div>0 à faire</div>
    </>
  )
}

export default App;
