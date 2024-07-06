import React from 'react';

function TodoItem({ todo, toggleTodo }) {
  return (
    <li className={todo.completed ? 'completed' : ''}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      {todo.text}
    </li>
  );
}

export default TodoItem;
