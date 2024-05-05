import { useGetTasks } from '../hooks/useGetTasks'
import { TaskCard } from './TaskCard'

export function TaskList () {
  const { tasks } = useGetTasks()

  return (
    <div className='text-white'>
      {
        tasks.map(task => (
          <TaskCard key={task.id} task={task} />
        ))
      }
    </div>
  )
}
