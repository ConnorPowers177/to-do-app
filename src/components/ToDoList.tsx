import React from 'react'
import { useTasks } from '../utils/hooks/use-tasks'
import { useUserId } from '../utils/hooks/use-user-id'
import { TasksUnfinished } from './TasksUnfinished'
import { ToDo } from './ToDo'
// import { ToDo } from "./ToDo"

const ToDoList = ({}) => {
  const [userId] = useUserId()
  const [tasks, , , removeTask] = useTasks(userId as string)

  const toDoList = Object.entries(tasks ?? {})

  const clearCompleted = () => {
    toDoList.filter(([id, task]) => task.completed).map(([id, task]) => removeTask(id))
  }


  return (<div>
    {toDoList.map(([id, task]) => <ToDo key={id} id={id} task={task}/>)}
    <div>
      <button style={{margin: '20px'}} onClick={clearCompleted}>Clear Completed</button>
      <TasksUnfinished />
    </div>
  </div>)
  
  }

export default ToDoList
