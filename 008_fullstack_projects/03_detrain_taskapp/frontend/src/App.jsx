import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Header } from './components/Header'
import { TasksPage } from './pages/TasksPage'

function App () {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Navigate to='/tasks' />} />
        <Route path='/tasks' element={<TasksPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
