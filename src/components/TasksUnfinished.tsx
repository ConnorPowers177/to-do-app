import { useTasks } from '../utils/hooks/use-tasks';
import { useUser } from '../utils/hooks/use-user';


const { entries } = Object;


export const TasksUnfinished = () => {
  const [user] = useUser<'ForceUser'>()
  const [tasks] = useTasks(user.uid)
  const unfinishedTasks = tasks
    ? entries(tasks).filter(([, task]) => !task.completed).length
    : '-'


  return ( <h4> Tasks Yet To Do: { unfinishedTasks }</h4>)
}
