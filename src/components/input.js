import React, { useState } from "react";

function Input({addTodo}){

    const[newTodo, setNewTodo] = useState('');

return (
    <div>
        <input type='text' value={newTodo} onChange={(e) => setNewTodo(e.target.value)} placeholder="Enter a new task"></input>
        <button onClick={() => addTodo(newTodo, false)}></button>
    </div>
)
}

export default Input;
