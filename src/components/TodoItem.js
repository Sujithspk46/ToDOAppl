import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";


const TodoItem = ( props ) => {

  const [ todos, setTodos ] = useContext(TodoContext);

  const completeTodo = (e) => {
    const filterTodos = todos.map((item) =>{
      if(item.id === e.target.value){
       item.completed = false;
        if(e.target.checked){
          item.completed = true;
        }
      }
     return item;

    })
    setTodos( filterTodos );
  }

 const deleteTodo = (e) => {
  e.preventDefault();
  const filterTodo = todos.filter((item) => {
    return item.id !== e.target.id;
  })
  setTodos(filterTodo);
}
const isCompleted = props.completed ? 'checked' : '';
  return(
    <>
    <p className="todo-item">
      <input type="checkbox" checked={isCompleted} id={props.id} value={props.id} onChange={e => completeTodo(e)}/>
      <label htmlFor={props.id}>{props.title}</label>
      <button type="button" className="btn-delete" id={props.id} onClick={e => deleteTodo(e)}>Delete</button>
    </p>    
    </>
  )
}

export default TodoItem;