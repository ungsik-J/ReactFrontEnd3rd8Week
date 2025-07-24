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
    const nextId = uuidv4(); //useRef(initialTodos.length > 0 ? Math.max(...initialTodos.map(todo => todo.id)) + 1 : 1)
    const handleInsert = useCallback((obj) => {
        console.log(obj)
        setTodos(prev => [
            ...prev, obj
        ]
        )
    }, [])
    const handleRemove = (id) => {
        setTodos(prev => prev.filter(todo => todo.id !== id));
    };

    return (
        <div style={todoStyle}>
            <TodoTemplate>
                <TodoInsert
                    handleInsert={handleInsert}
                    nextId={nextId}
                />
                <TodoList
                    key={uuidv4()}
                    todos={todos}
                    onRemove={handleRemove}
                />
            </TodoTemplate>
        </div>
    )
}

export default Todo