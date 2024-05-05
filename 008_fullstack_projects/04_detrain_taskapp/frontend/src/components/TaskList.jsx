import { useContext } from 'react'
import { TaskCard } from './TaskCard'
import { TaskContext } from '../context/task'

export function TaskList () {
  const { tasks } = useContext(TaskContext)

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
