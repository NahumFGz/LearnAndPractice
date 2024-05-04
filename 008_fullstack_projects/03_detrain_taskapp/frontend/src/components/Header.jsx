import { Link, useLocation } from 'react-router-dom'

export function Header () {
  const location = useLocation()
  const isInTasksPage = location.pathname === '/tasks'

  const handleDeleteAll = () => {
    window.confirm('Are you sure you want to delete all tasks?')
    console.log('Delete All')
  }

  const handleInsertFakeData = () => {
    window.alert('Fake data inserted')
    console.log('Insert Fake Data')
  }

  return (
    <div className='text-white flex flex-row justify-between m-4'>

      <Link to='/tasks'>
        <span className='text-2xl'>
          Demo Task App
        </span>
      </Link>

      {
        isInTasksPage && (
          <div className='flex flex-row gap-2'>
            <Link to='tasks-create'>
              <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                Add Task
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
              onClick={handleInsertFakeData}
            >
              Insert Fake Data
            </button>
          </div>
        )
      }

    </div>
  )
}
