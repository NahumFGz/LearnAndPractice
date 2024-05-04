export function Header () {
  return (
    <div className='text-white flex flex-row justify-between m-4'>

      <span className='text-2xl'>
        Demo Task App
      </span>

      <div className='flex flex-row gap-2'>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          Add Task
        </button>

        <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>
          Delete All
        </button>

        <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>
          Insert Fake Data
        </button>
      </div>

    </div>
  )
}
