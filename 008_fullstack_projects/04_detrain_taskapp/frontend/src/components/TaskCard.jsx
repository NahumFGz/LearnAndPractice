export function TaskCard ({ task }) {
  return (
    <div className='border p-2 m-2'>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <p>{task.completed ? 'Completed' : 'Not Completed'}</p>
      <p>{task.created_at}</p>
      <p>{task.updated_at}</p>
    </div>
  )
}
