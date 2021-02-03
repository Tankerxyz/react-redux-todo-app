import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import "./App.css";

function Todo({ id, text, completed, index }) {
  const dispatch = useDispatch()

  return (
    <div
      className="todo"
      style={{ textDecoration: completed ? "line-through" : "" }}
    >
      {text}
      <div>
      <button onClick={() => dispatch( { type:"COMPLETE_TODO", payload: index } )}>Complete</button>
        <button className="button-remove" onClick={() => dispatch( { type:"REMOVE_TODO", payload: index } )}>x</button>
      </div>
    </div>
  );
}

function TodoForm() {
  const dispatch = useDispatch()


  const handleSubmit = e => {
    e.preventDefault();
    dispatch( { type: "ADD_TODO", payload: document.getElementById("text-imput").value } )
    document.getElementById("text-imput").value = ""
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="text-imput"
        type="text"
        className="input"
      />
      <button className = "button-add">+</button>
    </form>
  );
}

function App() {  
  const todoList = useSelector(state => state)

  return (
    <div className="app">
      <div className="todo-list">
        {todoList.map((todo, index) => (
          <Todo
            id={todo.id}
            key={index}
            index={index}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
        <TodoForm />
      </div>
    </div>
  )
}

export default App;