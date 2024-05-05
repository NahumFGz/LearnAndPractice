import { useNavigate } from 'react-router-dom'

export function TaskCard ({ task }) {
  const navigate = useNavigate()

  return (
    <div
      className='border p-2 m-2'
      onClick={() => navigate(`/tasks/${task.id}`)}
    >
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <p>{task.completed ? 'Completed' : 'Not Completed'}</p>
    </div>
  )
}
