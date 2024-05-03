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
            <div key={task.id}>
              <h1>{task.title}</h1>
              <p>{task.description}</p>
              <input type='checkbox' checked={task.done} />
            </div>
          ))
        }
      </div>
    </>
  )
}

export default App
