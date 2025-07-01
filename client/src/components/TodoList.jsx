import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, refresh }) {
  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {todos.map((todo) => (
        <TodoItem key={todo._id} todo={todo} refresh={refresh} />
      ))}
    </ul>
  );
}

export default TodoList;
