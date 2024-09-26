import { useContext, useState, useEffect } from "react";
import { TodoContext } from "../context/TodoContext";
import { v4 as uuidv4 } from 'uuid';

const AddTodo = () => {

  const [title, setTitle ] = useState( '' );
  const [todos, setTodos] = useContext(TodoContext);

  const addTodo = (e) =>{
   e.preventDefault();

   if('' === title || undefined === title){
    alert('No Value Box');
    return;
   }

   const newTodos = [...todos,{id: uuidv4(), title: title, completed: false}];
   setTodos(newTodos);
   setTitle( '' );
  }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  },[todos] )

   return(
  <>
  <div className="form-input-container">
    <input value={title} className="form-input" onChange={ e => setTitle(e.target.value)} placeholder="Add To Do..." />
    <button type="button" className="form-btn" onClick={addTodo}>ADD</button>
  </div>   
  </>
   );
}

export default AddTodo;