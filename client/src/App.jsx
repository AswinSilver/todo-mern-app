import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

const API_BASE = 'http://localhost:5000/api/todos';

function App() {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    const res = await axios.get(API_BASE);
    setTodos(res.data);
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '30px' }}>
      <h1>📝 MERN To-Do List</h1>
      <TodoInput refresh={getTodos} />
      <TodoList todos={todos} refresh={getTodos} />
    </div>
  );
}

export default App;
