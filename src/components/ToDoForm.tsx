import { useTasks } from '../utils/hooks/use-tasks';
import { useUserId } from '../utils/hooks/use-user-id';

const ToDoForm = () => {
  const [userId] = useUserId()
  const [, , addNewTask] = useTasks(userId as string)
  
  const handleSubmit = (e: any) => {
    e.preventDefault()
    const currentVal = e.target.task.value
    addNewTask({ title: currentVal, completed: false, created: new Date()})
    e.target.task.value = ''
  }

  return (
    <form onSubmit={handleSubmit}> 
      <input required autoComplete='off'
      name="task" type="text" placeholder="Enter Task..."/>
      <button type="submit">Submit</button>
    </form>)

}

export default ToDoForm

