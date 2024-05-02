import { AddToCartIcon, RemoveFromCartIcon } from './Icons'
import { useCart } from '../hooks/useCart'

export function Products ({ products }) {
  const { addToCart, removeFromCart, cart } = useCart()

  const checkProductInCart = product => {
    return cart.some(item => item.id === product.id)
  }

  return (
    <main className='grid grid-cols-2 gap-10 mx-20 md:grid-cols-3'>
      {products.map(product => {
        const isProductInCart = checkProductInCart(product)

        return (
          <div
            className='flex flex-col items-center justify-center p-4 bg-black rounded-lg gap-3'
            key={product.id}
          >
            <img
              className='w-[300px] h-[150px] object-cover rounded-lg'
              src={product.thumbnail}
              alt={product.title}
            />

            <div className='flex flex-row gap-2'>
              <strong>{product.title}</strong> -
              <span className='text-gray-500'>${product.price}</span>
            </div>

            <div>
              <button
                className={`${isProductInCart ? 'bg-red-500 hover:bg-red-700' : 'bg-blue-500 hover:bg-blue-700'}
                            ' px-4 py-2 rounded hover:scale-95 active:scale-90 transition duration-200 ease-in-out`}
                onClick={() => {
                  isProductInCart
                    ? removeFromCart(product)
                    : addToCart(product)
                }}
              >
                {
                  isProductInCart
                    ? <RemoveFromCartIcon />
                    : <AddToCartIcon />
                }
              </button>
            </div>

          </div>
        )
      })}
    </main>
  )
}
