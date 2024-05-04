import { useState, useEffect } from 'react'
import { getAllTasks } from '../api/tasks.axios'

export function useGetTasks () {
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

  return { tasks }
}
