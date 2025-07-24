import React from 'react'
import { MdCheckBox, MdCheckBoxOutlineBlank, MdRemoveCircleOutline } from 'react-icons/md'

const checkboxStyle = {
    cursor: "pointer",
}

const textStyle = {
    marginLeft: "0.5rem",
    flex: 1
}

const removeStyle = {
    fontSize: '1.5rem',
    color: "#ff6b6b",
    cursor: "pointer"
}

const itemStyle = {
    padding: "1rem",
    display: "flex",
    alignItems: "center"
}


const TodoListItem = ({ todo, onRemove }) => {
    return (
        <div style={itemStyle}>
            <div style={checkboxStyle}>
                {todo.checked ?
                    (<MdCheckBox style={{ fontSize: "1.5rem", color: "#339af0" }} />)
                    : (<MdCheckBoxOutlineBlank style={{ fontSize: "1.5rem", color: "#495057" }} />)
                }
            </div>
            <div style={{
                ...textStyle,
                textDecoration: todo.checked ? 'line-through' : 'none', color: todo.checked ? "#adb5bd" : "#495057",
            }} class="list_left">
                {todo.text}
            </div>
            <div style={removeStyle}>
                <MdRemoveCircleOutline onClick={() => onRemove(todo.id)} />
            </div>
        </div>
    )
}

export default TodoListItem;