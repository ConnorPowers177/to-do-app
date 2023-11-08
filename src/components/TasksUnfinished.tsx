import { useTasks } from '../utils/hooks/use-tasks';
import { useUser } from '../utils/hooks/use-user';


const { entries } = Object;


export const TasksUnfinished = () => {
  const [user] = useUser() as any
  const [tasks] = useTasks(user.uid)
  const unfinishedTasks = tasks
    ? entries(tasks).filter(([, task]) => !task.completed).length
    : '-'

  return (<div className='absolute left-0 ml-px text-xs text-left mt-1.5 opacity-50 select-none'> {unfinishedTasks} tasks left</div>)
}
