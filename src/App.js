import './App.css';
import React from 'react';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>To-do List</h1>
        <TodoList/>
      </header>
    </div>
  );
}

export default App;
