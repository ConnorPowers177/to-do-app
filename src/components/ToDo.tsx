import { iTask, useTasks } from '../utils/hooks/use-tasks';
import { useUser } from '../utils/hooks/use-user';

type iProps = {
    id: string
    task: iTask
}

export const ToDo = ({ id, task }: iProps) => {
    const [user] = useUser<'ForceUser'>()
    const [, updateTask, , removeTask] = useTasks(user.uid)

    const handleClick = () => {
        updateTask(id, { ...task, completed: !task.completed })
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
