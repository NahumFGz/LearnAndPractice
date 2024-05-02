import { AddToCartIcon } from './Icons'

export function Products ({ products }) {
  return (
    <main className='grid grid-cols-2 gap-10 m-20 md:grid-cols-3'>
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

          <div>
            <strong>{product.title}</strong> - ${product.price}
          </div>

          <div>
            <button className='bg-blue-500 p-3 rounded hover:bg-blue-700 hover:scale-95 active:scale-90 transition duration-200 ease-in-out'>
              <AddToCartIcon />
            </button>
          </div>

        </div>
      ))}
    </main>
  )
}
