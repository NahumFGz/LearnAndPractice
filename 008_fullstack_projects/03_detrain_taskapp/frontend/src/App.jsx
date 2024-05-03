import { useState, useEffect } from 'react'
import { getAllTasks } from './api/tasks.axios'

function App () {
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
    <>
      <p className='text-white text-5xl'>Task App</p>
      <div>
        {
          tasks.map(task => (
            <div
              className='bg-gray-200 p-4 m-4 rounded-md flex flex-row items-center justify-between gap-4'
              key={task.id}
            >
              <div className='flex flex-col items-center justify-between'>
                <h1 className='w-24'>{task.title}</h1>
              </div>
              <div className=''>
                <input type='checkbox' checked={task.done} />
              </div>
              <div>
                <p>{task.description}</p>
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default App
