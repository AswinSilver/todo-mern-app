import React, { useState } from 'react';
import axios from 'axios';

function TodoInput({ refresh }) {
  const [text, setText] = useState('');

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    await axios.post('${process.env.REACT_APP_API}/api/todos', { text });
    setText('');
    refresh();
  };

  return (
    <form onSubmit={handleAdd}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a task"
        style={{ padding: '8px', marginRight: '5px' }}
      />
      <button type="submit" style={{ padding: '8px' }}>Add</button>
    </form>
  );
}

export default TodoInput;
