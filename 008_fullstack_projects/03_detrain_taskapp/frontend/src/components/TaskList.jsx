import { useGetTasks } from '../hooks/useGetTasks'
import { TaskCart } from './TaskCard'

export function TaskList () {
  const { tasks } = useGetTasks()

  return (
    <div className='flex flex-col gap-4 m-4'>
      {
          tasks.map(task => (
            <TaskCart key={task.id} task={task} />
          ))
        }
    </div>
  )
}
