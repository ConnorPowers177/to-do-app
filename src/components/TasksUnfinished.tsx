import { useTasks } from "../utils/hooks/use-tasks";
import { useUserId } from "../utils/hooks/use-user-id";


const { entries } = Object;


export const TasksUnfinished = ({}) => {
  const [userId] = useUserId()
  const [tasks] = useTasks(userId as string)
  const unfinishedTasks = tasks
    ? entries(tasks).filter(([, task]) => !task.completed).length
    : '-'

  return ( <h4> Tasks Yet To Do: { unfinishedTasks }</h4>)
}
