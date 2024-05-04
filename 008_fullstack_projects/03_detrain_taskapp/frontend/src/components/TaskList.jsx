import { useState, useEffect } from 'react'
import { getAllTasks } from '../api/tasks.axios'
import { TaskCart } from './TaskCard'

export function TaskList () {
  const [tasks, setTasks] = useState([])
  console.log(tasks)

  useEffect(() => {
    async function loadTasks () {
      const response = await getAllTasks()
      const { data } = response

      setTasks(data)
    }

    loadTasks()
  }, [])
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
