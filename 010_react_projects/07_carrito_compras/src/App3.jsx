import { products as initialProducts } from './mocks/products.json'
import { Products } from './components/Products'
import { useContext, useState } from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { IS_DEVELOPMENT } from './config'
import { FiltersContext } from './context/filters'

function useFilters () {
  const { filters, setFilters } = useContext(FiltersContext)

  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice &&
        (
          filters.category === 'all' ||
          product.category === filters.category
        )
      )
    })
  }

  return { filterProducts, filters, setFilters }
}

function App () {
  const [products] = useState(initialProducts)
  const { filterProducts, filters, setFilters } = useFilters()

  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header changeFilters={setFilters} />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer filters={filters} />}
    </>
  )
}

export default App
