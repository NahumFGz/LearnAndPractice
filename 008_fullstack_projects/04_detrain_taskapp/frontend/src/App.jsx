import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Header } from './components/Header'
import { TasksPages } from './pages/TasksPages'
import { TasksFormPage } from './pages/TasksFormPage'

function App () {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Navigate to='/tasks' />} />
        <Route path='/tasks' element={<TasksPages />} />
        <Route path='/tasks-create' element={<TasksFormPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
