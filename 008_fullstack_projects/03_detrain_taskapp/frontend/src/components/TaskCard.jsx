export function TaskCart ({ task }) {
  return (
    <div
      className={`bg-gray-200 p-4 rounded-md flex flex-row items-center justify-between gap-4
                    hover:bg-blue-200 transition-colors duration-300 cursor-pointer
                  `}
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
