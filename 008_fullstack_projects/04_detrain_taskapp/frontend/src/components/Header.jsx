import { Link, useLocation } from 'react-router-dom'
import { insertDummyData } from '../api/tasks'

const dummy = [
  {
    title: 'Task 1',
    description: 'Description 1',
    completed: false
  },
  {
    title: 'Task 2',
    description: 'Description 2',
    completed: true
  },
  {
    title: 'Task 3',
    description: 'Description 3',
    completed: false
  },
  {
    title: 'Task 4',
    description: 'Description 4',
    completed: false
  }
]

export function Header () {
  const location = useLocation()
  const isInTasksPage = location.pathname === '/tasks'

  const handleInsertSample = async () => {
    await insertDummyData(dummy)
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
              <div>
                <Link to='/tasks-create'>
                  <button className='border white rounded-sm m-2 p-1 text-white'>
                    Insert Task
                  </button>
                </Link>
                <button className='border white rounded-sm m-2 p-1 text-white'>
                  Delete All
                </button>
                <button
                  className='border white rounded-sm m-2 p-1 text-white'
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
