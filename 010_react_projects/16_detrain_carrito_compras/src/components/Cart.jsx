import { useId, useState } from 'react'
import { CartIcon, ClearCartIcon } from './Icons.jsx'
import { useCart } from '../hooks/useCart.js'

function CartItem ({ thumbnail, price, title, quantity, addToCart }) {
  return (
    <li className='mb-5 flex flex-col items-center gap-2'>
      <div>
        <img
          src={thumbnail}
          alt={title}
          className='w-72 aspect-video rounded-sm'
        />
      </div>

      <div>
        <strong> {title} </strong> - ${price}
      </div>

      <div>
        <small>
          Qty: {quantity}
        </small>
        <button
          className='ml-2 px-2 align-middle border-2 border-gray-500 rounded-sm'
          onClick={addToCart}
        >
          +
        </button>
      </div>
    </li>
  )
}

export function Cart () {
  const cartCheckboxId = useId()
  const [isOpen, setIsOpen] = useState(false)
  const { cart, clearCart, addToCart } = useCart()

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
          {
            cart.map((product) => {
              return (
                <CartItem
                  key={product.id}
                  addToCart={() => addToCart(product)}
                  {...product}
                />
              )
            })
          }
        </ul>

        <div className='flex flex-row justify-center'>
          <button
            className='mt-2 rounded-sm px-4 py-2 bg-gray-500 hover:scale-95 active:scale-90'
            onClick={clearCart}
          >
            <ClearCartIcon />
          </button>
        </div>

      </aside>
    </>
  )
}
