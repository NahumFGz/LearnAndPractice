import { createContext, useEffect, useState } from 'react'
import { getAllTasks } from '../api/tasks'

// 1. Crear el contexto
export const TaskContext = createContext()

// 2. Crear el provider
export function TaskProvider ({ children }) {
  const [tasks, setTasks] = useState([])

  const fetchTasks = async () => {
    const fetchedTasks = await getAllTasks()
    setTasks(fetchedTasks)
  }

  const refreshTasks = () => {
    fetchTasks()
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  return (
    <TaskContext.Provider value={{ tasks, refreshTasks }}>
      {children}
    </TaskContext.Provider>
  )
}

// 3. Crear el hook
// export const useTasks = () => useContext(TaskContext)
