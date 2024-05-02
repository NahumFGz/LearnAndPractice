import { products as initialProducts } from './mocks/products.json'
import { Products } from './components/Products'
import { useState } from 'react'
import { Header } from './components/Header'
import { useFilters } from './hooks/useFilters'
import { Footer } from './components/Footer'
import { IS_DEVELOPMENT } from './config'

function App () {
  const [products] = useState(initialProducts)
  const { filterProducts, filters, setFilters } = useFilters()
  const filteredProducts = filterProducts(products)

  return (
    <div className='text-white'>
      <Header changeFilters={setFilters} />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer filters={filters} />}
    </div>
  )
}

export default App
