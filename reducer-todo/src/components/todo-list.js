import React from 'react'

const TodoList = ({ state, dispatch }) => {
  return (
    <div>
      <h1>{console.log(state)}</h1>
      {state.todo.map(item => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
}

export default TodoList;
