import { useEffect, useState } from 'react'
import { getAllTasks } from '../api/tasks'

export function useGetTasks () {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const fetchTasks = async () => {
      const tasks = await getAllTasks()
      setTasks(tasks)
    }

    fetchTasks()
  }, [])

  return { tasks }
}
