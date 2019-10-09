import React, { useState, useReducer } from 'react';
import './App.css';

import { initialState, reducer } from './reducers/todo.reducer';

import TodoForm from './components/todo-form';
import TodoList from './components/todo-list';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [todo, setTodo] = useState('');

  const handleChange = e => {
    setTodo(e.target.value);
  }

  const submitTodo = e =>{
    e.preventDefault();
    todo !== '' && dispatch({ type: 'ADD_NEW_TODO', payload: todo});
    setTodo('')
  }

  return (
    <div className="App">
      <header className="App-header" >
        <h1>To Do List</h1>
        <TodoForm
          handleChange={handleChange}
          submitTodo={submitTodo}
          dispatch={dispatch}
          todo={todo}
        />
        <TodoList
          dispatch={dispatch}
          state={state}
          todo={todo}
        />
        {state.title}
      </header>
    </div>
  );
}

export default App;
