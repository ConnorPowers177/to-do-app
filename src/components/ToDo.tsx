import { iTask, useTasks } from "../utils/hooks/use-tasks";
import { useUserId } from "../utils/hooks/use-user-id";

type iProps = {
  id: string
  task: iTask
}
export const ToDo = ({id, task}: iProps) => {
    const [userId] = useUserId()
    const [, updateTask] = useTasks(userId as string)

    const handleClick = (e: any) => {
       updateTask(id, {...task, completed: !task.completed})
    }

    return (
        <div onClick={handleClick} className={task.completed ? "task strike" : "task"}>
            <div className='lg:w-1/4 w-full lg:pr-3 container mx-auto pl-6' >
                <div className='bg-gray-200 rounded-xl'>
                {task.title}
                </div>
            </div>
        </div> 
      );
      };
