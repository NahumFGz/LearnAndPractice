import { useEffect, useState } from 'react'
import { getAllTasks } from '../api/tasks'

export function TasksPages () {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const fetchTasks = async () => {
      const tasks = await getAllTasks()
      setTasks(tasks)
    }

    fetchTasks()
  }, [])

  return (
    <div className='text-white'>
      {
        tasks.map(task => (
          <div
            className='border p-2 m-2'
            key={task.id}
          >
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <p>{task.completed ? 'Completed' : 'Not Completed'}</p>
            <p>{task.created_at}</p>
            <p>{task.updated_at}</p>
          </div>
        ))
      }
    </div>
  )
}
