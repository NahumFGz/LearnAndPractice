import { products as initialProducts } from './mocks/products.json'
import { Products } from './components/Products'

function App () {
  return (
    <div className='text-white'>
      <p>Carrito de compras C: </p>
      <Products products={initialProducts} />
    </div>
  )
}

export default App
