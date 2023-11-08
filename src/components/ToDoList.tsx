import { useState } from 'react'
import { useTasks } from '../utils/hooks/use-tasks'
import { useUser } from '../utils/hooks/use-user'
import { TasksUnfinished } from './TasksUnfinished'
import { ToDo } from './ToDo'

const ToDoList = () => {
  const [user] = useUser() as any
  const [tasks, , , removeTask] = useTasks(user.uid)

  const toDoList = Object.entries(tasks ?? {})

  const clearCompleted = () => {
    toDoList.filter(([id, task]) => task.completed).map(([id, task]) => removeTask(id))
  }

  const toDoListActive = toDoList.filter(([id, task]) => !task.completed)
  const toDoListCompleted = toDoList.filter(([id, task]) => task.completed)

  type iFilterType = 'all' | 'completed' | 'active'
  const [filter, setFilter] = useState<iFilterType>('all')

  const toDoListRender = () => {

    if (filter === 'active') {
      return toDoListActive.map(([id, task]) => <div className={'relative flex h-10 w-80 bg-slate-50 shadow mb-px first:rounded-t text-sm dark:text-slate-50 dark:bg-stone-800'}><ToDo key={id} id={id} task={task} /></div>)
    }

    else if (filter === 'completed') {
      return toDoListCompleted.map(([id, task]) => <div className={'relative flex h-10 w-80 bg-slate-50 shadow mb-px first:rounded-t text-sm dark:text-slate-50 dark:bg-stone-800'}><ToDo key={id} id={id} task={task} /></div>)
    }

    else if (filter === 'all') {
      return toDoList.map(([id, task]) => <div className={'relative flex h-10 w-80 bg-slate-50 shadow mb-px first:rounded-t text-sm dark:text-slate-50 dark:bg-stone-800'}><ToDo key={id} id={id} task={task} /></div>)
    }
  }

  return (
    <div className='w-80 flex flex-col align-middle todo-list mb-20'>
      {toDoListRender()}
      <footer className='relative bg-slate-50 h-8 w-80 rounded-b shadow-lg dark:bg-stone-800 dark:text-slate-50'>
        <TasksUnfinished />
        <button className={`mr-2 text-xs select-none opacity-50 hover:opacity-100 ${filter === ('all') ? 'text-cyan-500 opacity-100 dark:text-violet-700 font-bold' : ''}`} onClick={() => setFilter('all')}>All</button>
        <button className={`mr-2 text-xs select-none opacity-50 hover:opacity-100 ${filter === ('active') ? 'text-cyan-500 opacity-100 dark:text-violet-700 font-bold' : ''}`} onClick={() => setFilter('active')}>Active</button>
        <button className={`mr-9 text-xs select-none opacity-50 hover:opacity-100 ${filter === ('completed') ? 'text-cyan-500 opacity-100 dark:text-violet-700 font-bold' : ''}`} onClick={() => setFilter('completed')}>Completed</button>
        <button className='absolute right-0 mr-px text-xs text-right mt-1.5 select-none opacity-50 hover:text-red-600 hover:opacity-100 change-icon' onClick={clearCompleted}>Clear Completed <i className=' fa fa-solid fa-trash-can'></i> <i className='fa fa-fade fa-trash-can'></i></button>
      </footer>
    </div>
  )
}

export default ToDoList


