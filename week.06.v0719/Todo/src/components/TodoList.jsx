// TodoList.js
import React from 'react';
import TodoListItem from './TodoListItem';

const listStyle = {
  minHeight: "320px",
  maxHeight: "513px",
  overflow: "auto"
};

const TodoList = React.memo(({ todos, onRemove }) => {
  return (
    <div style={listStyle}>
      {todos.map(todo => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
});

export default TodoList;