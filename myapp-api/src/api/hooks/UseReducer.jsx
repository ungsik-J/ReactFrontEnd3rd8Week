import React, { useReducer, useState } from 'react'


const COUNT_REDUCER = () => {
    const initialState = { count: 0 }
    const reducer = (state, action) => {
        switch (action.type) {
            case 'increment':
                return { count: state.count + 1 }
            case 'decrement':
                return { count: state.count - 1 }
                break;
            default:
                throw new Error();
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <>
            <div>
                <p>count : {state.count}</p>
                <button onClick={() => { dispatch({ type: "decrement" }) }} >[-]decrement</button>
                <button onClick={() => { dispatch({ type: "increment" }) }} >[+]increment</button>
            </div>
        </>
    )
}

const TODO_REDUCER = () => {
    return (
        <></>
    )
}

export default function UseReducer() {
    return (
        <div>
            <COUNT_REDUCER />
        </div>
    )
}
