import React from 'react'
import './todoItem.css'

const TodoItem = ({todos}) => {
  return(
    <>
      {
        todos && todos.length ? 
          todos.map(todo => {
            return (
              <p key={todo.id}>{todo.title}</p>
            )
          }) : null
      }
    </>
  )
}

export default TodoItem;