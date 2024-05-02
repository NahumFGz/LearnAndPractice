import { useCart } from '../hooks/useCart'
import { useFilters } from '../hooks/useFilters'

export function Footer () {
  const { filters } = useFilters()
  const { cart } = useCart()

  // Crear un objeto con el nombre y la cantidad de cada producto
  const listNameQuantity = cart.map((product) => {
    return { title: product.title, quantity: product.quantity }
  })
  return (
    <footer className='fixed left-4 bottom-4 text-left bg-black bg-opacity-90 p-2 rounded-lg'>
      <div className='flex flex-col gap-2'>
        <div>
          Filters: {JSON.stringify(filters)}
        </div>
        {/* <div>
          Products: {JSON.stringify(cart)}
        </div> */}
        {
          listNameQuantity.map((product, index) => {
            return (
              <div key={index}>
                {product.title} - {product.quantity}
              </div>
            )
          })
        }
      </div>
      {/*
      <h4 className='text-white text-sm sm:text-base'>
        Prueba técnica de React ⚛️ － <span className='text-blue-500'>@midudev</span>
      </h4>
      <h5 className='text-white text-xs sm:text-sm'>Shopping Cart con useContext &amp; useReducer</h5>
      */}
    </footer>
  )
}

// bg-opacity-70 p-2 sm:p-4 rounded-full shadow-lg backdrop-blur-md
