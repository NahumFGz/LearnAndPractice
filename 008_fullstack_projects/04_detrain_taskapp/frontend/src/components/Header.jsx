import { Link, useLocation } from 'react-router-dom'

export function Header () {
  const location = useLocation()
  const isInTasksPage = location.pathname === '/tasks'

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
                <button className='border white rounded-sm m-2 p-1 text-white'>
                  Insert Sample
                </button>
              </div>
            )
        }
      </div>

    </header>
  )
}
