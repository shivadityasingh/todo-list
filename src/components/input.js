import React, { useState } from "react";

function Input(props){

    const[newTodo, setNewTodo] = useState('');

    return (
    <div>
        <input className="input" type='text' value={newTodo} onChange={(e) => setNewTodo(e.target.value)} placeholder="Enter a new task"></input>
        <button className="plus" onClick={() => props.addTodo(newTodo, false)}>+</button>
    </div>
    )
}

export default Input;
