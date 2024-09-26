import React from 'react'
import './TodoApp.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import { TodoProvider } from './context/TodoContext';

function TodoApp() {
  
  return (
    <TodoProvider>
    <div className="container">
     <h1 className="app-title">ToDo Application</h1>
     <AddTodo />
     <TodoList />    
    </div>
    </TodoProvider>
  )
}

export default TodoApp;