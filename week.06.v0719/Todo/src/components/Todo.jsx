import React, { useCallback, useState, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid';
import TodoList from './TodoList'
import TodoInsert from './TodoInsert'
import TodoTemplate from './TodoTemplate'

const todoStyle = {
    marginTop: "0rem",
    marginBottom: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
}

const initialTodos = [
    { id: uuidv4(), text: "리액트 공부", checked: true },
    { id: uuidv4(), text: "자바 공부", checked: false },
    { id: uuidv4(), text: "자바스크립트 공부", checked: true },
    { id: uuidv4(), text: "파이썬 공부", checked: false }
]

const Todo = () => {
    const [todos, setTodos] = useState(initialTodos);
    const handleInsert = useCallback((obj) => {
        setTodos(prev => [...prev, obj])
    }, [])
    const handleRemove = (id) => {
        setTodos(prev => prev.filter(todo => todo.id !== id));
    };
    const handleChecked = (obj) => {
        setTodos(
            todos.map(todo =>
                todo.id === obj.id ? { ...todo, checked: !todo.checked } : todo
            )
        );
    }
    return (
        <div style={todoStyle}>
            <TodoTemplate>
                <TodoInsert
                    handleInsert={handleInsert}
                    nextId={uuidv4()}
                />
                <TodoList
                    key={uuidv4()}
                    todos={todos}
                    onRemove={handleRemove}
                    onChecked={handleChecked}
                />
            </TodoTemplate>
        </div>
    )
}

export default Todo