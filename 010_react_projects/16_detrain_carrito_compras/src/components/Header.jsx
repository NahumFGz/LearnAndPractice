import { Filters } from './Filters'

export function Header () {
  return (
    <>
      <div className='flex flex-col items-center justify-center my-20 gap-4'>
        <h1 className='text-4xl'> React shopping cart </h1>
        <Filters />
      </div>
    </>
  )
}
