import { useContext } from "react";
import TodoItem from "../components/TodoItem";
import { TodoContext } from "../context/TodoContext";


const TodoList = () => {

const [ todos ] = useContext(TodoContext);
 

return(
    1 <= todos.length ? todos.map((item) => {      
      return(
               <TodoItem key={ item.id } id={ item.id } title={ item.title} completed={item.completed} />
      )
    }) : (<h4>No ToDo Task found,Please Add Item...</h4>)
   
)

}


export default TodoList;
