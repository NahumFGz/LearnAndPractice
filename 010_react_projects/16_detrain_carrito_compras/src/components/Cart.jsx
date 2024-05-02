import { useId, useState } from 'react'
import { CartIcon, ClearCartIcon } from './Icons.jsx'

export function Cart () {
  const cartCheckboxId = useId()
  const [isOpen, setIsOpen] = useState(false)

  const toggleCart = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <label
        htmlFor={cartCheckboxId}
        onClick={toggleCart}
        className={`flex justify-center items-center bg-blue-500 p-1
                    absolute right-3 top-3 z-50 w-12 h-12
                    rounded-full cursor-pointer 
                    transition-all duration-300 hover:scale-110`}
      >
        <CartIcon />
      </label>
      <input
        id={cartCheckboxId}
        type='checkbox'
        className='hidden'
        checked={isOpen}
      />

      <aside
        className={`${isOpen ? 'block' : 'hidden'} 
                    fixed right-0 top-0 w-96 h-screen bg-black p-4`}
      >
        <ul className='mt-20 border-b border-gray-700 pb-4'>
          <li className='mb-5 flex flex-col items-center gap-2'>
            <div>
              <img
                src='https://cdn.dummyjson.com/product-images/1/thumbnail.jpg'
                alt='Iphone'
                className='w-56 aspect-video rounded-sm'
              />
            </div>

            <div>
              <strong> iPhone </strong> - $1499
            </div>

            <div>
              <small>
                Qty: 1
              </small>
              <button>
                +
              </button>
            </div>
          </li>

        </ul>

        <div className='flex flex-row justify-center'>
          <button className='mt-2 rounded-sm px-4 py-2 bg-gray-500 hover:scale-95 active:scale-90'>
            <ClearCartIcon />
          </button>
        </div>

      </aside>
    </>
  )
}
