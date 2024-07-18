import React, { useState } from 'react';
import TodoItem from './TodoItem';
import Input from './input';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [idCounter, setIdCounter] = useState(0);

  const addTodo = (text, completed) => {
      setIdCounter(idCounter + 1)
      setTodos([...todos, {id : idCounter, text : text, completed : completed}])
  }
  

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div>
      <Input addTodo={addTodo}/>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
