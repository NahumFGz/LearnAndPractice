import { AddToCartIcon } from './Icons'

export function Products ({ products }) {
  return (
    <main className='grid grid-cols-2 gap-10 mx-20 md:grid-cols-3'>
      {products.map(product => (
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
            <button className='bg-blue-500 px-4 py-2 rounded hover:bg-blue-700 hover:scale-95 active:scale-90 transition duration-200 ease-in-out'>
              <AddToCartIcon />
            </button>
          </div>

        </div>
      ))}
    </main>
  )
}
