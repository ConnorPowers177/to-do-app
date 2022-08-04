import { useTasks } from '../utils/hooks/use-tasks';
import { useUser } from '../utils/hooks/use-user';

const ToDoForm = () => {
  const [user] = useUser<'ForceUser'>('ToDoForm')
  const [, , addNewTask] = useTasks(user.uid)

  const handleSubmit = (e: any) => {
    e.preventDefault()
    const currentVal = e.target.task.value
    addNewTask({ title: currentVal, completed: false, created: new Date() })
    e.target.task.value = ''
  }

  return (
    <div className='w-full flex justify-center'>
      <form className='flex z-10 shadow bg-slate-50 transition rounded h-10 w-80 mb-10 mt-24 dark:bg-stone-800 dark:text-slate-50' onSubmit={handleSubmit}>
        <button className='font-BebasNeue left-0 mr-4 mt-2 mb-2 top-2.5 ml-1 px-1 py-0.25 border-none text-sm rounded-full text-center text-slate-50 transition ease-in-out delay-150 bg-cyan-400 hover:scale-110 hover:bg-cyan-500 duration-300 dark:bg-violet-400 dark:hover:bg-violet-600'>Add</button>
        <input className='h-10 grow outline-none bg-transparent dark:border-stone-800 transition duration-500 focus:placeholder:text-transparent' autoComplete='off' required
          name='task' type='text' placeholder='Enter Task...' />
      </form>
    </div>
  )
}

export default ToDoForm

