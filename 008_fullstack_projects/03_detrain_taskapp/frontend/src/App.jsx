import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Header } from './components/Header'
import { TasksPage } from './pages/TasksPage'
import { TasksFormPage } from './pages/TasksFormPage'

function App () {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Navigate to='/tasks' />} />
        <Route path='/tasks' element={<TasksPage />} />
        <Route path='/tasks-create' element={<TasksFormPage />} />
        <Route path='/tasks/:id' element={<TasksFormPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
