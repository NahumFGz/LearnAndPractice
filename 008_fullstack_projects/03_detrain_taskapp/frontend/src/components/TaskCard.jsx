import { useNavigate } from 'react-router-dom'

export function TaskCart ({ task }) {
  const navigate = useNavigate()

  return (
    <div
      className={`bg-gray-200 p-4 rounded-md flex flex-row items-center justify-start gap-4
                    hover:bg-blue-200 transition-colors duration-300 cursor-pointer
                  `}
      onClick={() => navigate(`/tasks/${task.id}`)}
    >
      <div className='flex flex-none w-20 justify-end'>
        {task.title}
      </div>

      <div>
        <input type='checkbox' />
      </div>

      <div>
        <p>{task.description}</p>
      </div>

    </div>
  )
}
