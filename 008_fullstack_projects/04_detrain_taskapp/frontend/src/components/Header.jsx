import { Link, useLocation } from 'react-router-dom'
import { deleteAllTasks, insertDummyData } from '../api/tasks'
import { useContext } from 'react'
import { TaskContext } from '../context/task'

const dummy = [
  {
    title: 'Task 1',
    description: " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    completed: false
  },
  {
    title: 'Task 2',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    completed: true
  },
  {
    title: 'Task 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit accumsan nulla, sed rhoncus turpis. Nam lectus ligula, luctus sed dolor et, eleifend congue magna. Sed eu pellentesque enim, at finibus ex. Praesent at massa felis. Ut ultrices ut massa id aliquet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque ac magna laoreet, dapibus metus vel, gravida ante. In viverra neque ac lacinia venenatis. Curabitur aliquet imperdiet lacus, eget feugiat urna sagittis vel. Aliquam non velit a nisl suscipit gravida. Nam pretium enim et velit mollis fermentum. Nulla in maximus justo. Mauris id neque ac ligula finibus vulputate in faucibus urna.',
    completed: false
  }
]

export function Header () {
  const location = useLocation()
  const isInTasksPage = location.pathname === '/tasks'
  const { refreshTasks } = useContext(TaskContext)

  const handleInsertSample = async () => {
    await insertDummyData(dummy)
    refreshTasks()
  }

  const handleDeleteAll = async () => {
    await deleteAllTasks()
    refreshTasks()
  }

  return (
    <header className='flex flex-row items-center justify-between'>
      <Link to='/tasks'>
        <h1
          className='text-2xl font-bold text-white p-4'
        >Task App V3
        </h1>
      </Link>

      <div>
        {
            isInTasksPage && (
              <div className='flex flex-row gap-2 m-2'>
                <Link to='/tasks-create'>
                  <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                    Insert Task
                  </button>
                </Link>
                <button
                  className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
                  onClick={handleDeleteAll}
                >
                  Delete All
                </button>
                <button
                  className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
                  onClick={handleInsertSample}
                >
                  Insert Sample
                </button>
              </div>
            )
        }
      </div>

    </header>
  )
}
