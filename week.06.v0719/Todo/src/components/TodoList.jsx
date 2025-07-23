import React from 'react'
import TodoListItem from './TodoListItem'

const listStyle = {
  minHeight: "320px",
  maxHeight: "513px",
  overflow: "auto"
}




const TodoList = ({ todos, onRemove }) => {
  return (
    <div style={listStyle}>
      {todos.map(todo => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          onRemove={onRemove}   // 삭제 이벤트 전달

        />
      ))}
    </div>
  )
}

export default TodoList