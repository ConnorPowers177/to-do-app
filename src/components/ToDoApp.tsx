import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';

export function ToDoApp() {
  return (
    <div className='flex items-center flex-col to-do-app'>
      <ToDoForm />
      <ToDoList />
    </div>)
}