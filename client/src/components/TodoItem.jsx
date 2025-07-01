import React from 'react';
import axios from 'axios';

function TodoItem({ todo, refresh }) {
  const toggleCompleted = async () => {
    await axios.put(`${process.env.REACT_APP_API}/api/todos`, {
      completed: !todo.completed,
    });
    refresh();
  };

  const deleteTodo = async () => {
    await axios.delete(`${process.env.REACT_APP_API}/api/todos${todo._id}`);
    refresh();
  };

  return (
    <li style={{ margin: '10px' }}>
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      <button onClick={toggleCompleted} style={{ marginLeft: '10px' }}>
        {todo.completed ? 'Undo' : 'Done'}
      </button>
      <button onClick={deleteTodo} style={{ marginLeft: '5px' }}>Delete</button>
    </li>
  );
}

export default TodoItem;
