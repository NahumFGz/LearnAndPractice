import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Header } from './components/Header'
import { TasksPages } from './pages/TasksPages'
import { TasksFormPage } from './pages/TasksFormPage'
import { TaskProvider } from './context/task'

function App () {
  return (
    <BrowserRouter>
      <TaskProvider>
        <Header />
        <Routes>
          <Route path='/' element={<Navigate to='/tasks' />} />
          <Route path='/tasks' element={<TasksPages />} />
          <Route path='/tasks-create' element={<TasksFormPage />} />
          <Route path='/tasks/:id' element={<TasksFormPage />} />
        </Routes>
      </TaskProvider>
    </BrowserRouter>
  )
}

export default App
