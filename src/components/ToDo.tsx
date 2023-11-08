import { iTask, useTasks } from '../utils/hooks/use-tasks';
import { useUser } from '../utils/hooks/use-user';

type iProps = {
    id: string
    task: iTask
}

export const ToDo = ({ id, task }: iProps) => {
    const [user] = useUser() as any
    const [, updateTask, , removeTask] = useTasks(user.uid)

    const handleChange = (e : any) => {
        updateTask(id, { ...task, completed: !task.completed })
    }

    const isTooLongTask = (string: string) => {
        if (string.length > 54) {
            return 'task hover:bottom-3.5'
        }
        else return ''
    }

    return (
        <div>
            <input onChange={handleChange} type='checkbox' checked={task.completed} className='relative cursor-pointer left-1 top-3 ml-1 border dark:border-stone-400 dark:before:bg-violet-500'></input>
            <i onClick={() => removeTask(id)} className='absolute right-1 top-3 cursor-pointer mr-1 hover:animate-pulse hover:text-red-600 fa-solid fa-xmark'></i>
            <div className={'font-BebasNeue relative truncate hover:overflow-y-auto hover:overflow-visible hover:whitespace-normal text-left left-6 bottom-1.5 w-64 max-w-xl 55' + (task.completed ? 'task line-through decoration-red-600' : 'task') + (isTooLongTask(task.title))}>
                {task.title}
            </div>
        </div>
    );
};