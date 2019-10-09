import React from 'react';

const TodoForm = ({handleChange, submitTodo, todo, dispatch}) => {
  return (
    <form onSubmit={submitTodo}>
      <input
        name='todo'
        type='text'
        placeholder='+ todo'
        value={todo}
        onChange={(e) => handleChange(e)}
      />
      <button type='submit'>Add Todo</button>
    </form>
  )
}

export default TodoForm;
