import { useNavigate } from 'react-router-dom'

export function TaskCard ({ task }) {
  const navigate = useNavigate()

  return (
    <div
      className={`bg-gray-700 p-4 rounded-md flex flex-row items-center justify-start gap-4
                    hover:bg-blue-500 transition-colors duration-300 cursor-pointer
                    m-4
                  `}
      onClick={() => navigate(`/tasks/${task.id}`)}
    >
      <div className='flex flex-none w-24 justify-end'>
        {task.title}
      </div>

      <div className='w-[100px]'>
        {task.completed ? 'Completed' : 'Not Completed'}
      </div>

      <div>
        {task.description}
      </div>
    </div>
  )
}
