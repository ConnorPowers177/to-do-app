import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";

export function ToDoApp(){
  return (
    <div className='h-screen bg-gray-800'>
      <ToDoForm/>    
      <ToDoList/>
    </div>)
}