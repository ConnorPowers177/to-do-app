import { useState } from 'react'
import { useTasks } from '../utils/hooks/use-tasks'
import { useUser } from '../utils/hooks/use-user'
import { TasksUnfinished } from './TasksUnfinished'
import { ToDo } from './ToDo'

const ToDoList = () => {
  const [user] = useUser<'ForceUser'>()
  const [tasks, , , removeTask] = useTasks(user.uid)

  const toDoList = Object.entries(tasks ?? {})

  const clearCompleted = () => {
    toDoList.filter(([id, task]) => task.completed).map(([id, task]) => removeTask(id))
  }

  const toDoListActive = toDoList.filter(([id, task]) => !task.completed)
  const toDoListCompleted = toDoList.filter(([id, task]) => task.completed)

  return (<div>
    {toDoList.map(([id, task]) => <ToDo key={id} id={id} task={task}/>)}
    <div>
      <button style={{margin: '20px'}} onClick={clearCompleted}>Clear Completed</button>
      <TasksUnfinished />
    </div>
  </div>)
  
  }

export default ToDoList
