import { useState, useId } from 'react'
import './Filters.css'
import { useFilters } from '../hooks/useFilters'

export function Filters () {
  const { setFilters } = useFilters()

  const [minPrice, setMinPrice] = useState(0) // Estado local
  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  console.log(
    'Filters -> minPriceFilterId', minPriceFilterId,
    'Filters -> categoryFilterId', categoryFilterId
  )

  const handleChangeMinPrice = (event) => {
    setMinPrice(event.target.value)
    // Aqui algo huele mal
    // DOS FUENTES DE VERDAD
    setFilters(prevState => ({
      ...prevState,
      minPrice: parseInt(event.target.value)
    })
    )
  }

  const handleChangeCategory = (event) => {
    // Aqui algo huele mal
    // Aqui estamos pasando la funcion de actualizacion del estado
    // nativa de React a un componente hijo
    setFilters(prevState => ({
      ...prevState,
      category: event.target.value
    })
    )
  }

  return (
    <section className={minPriceFilterId}>
      <div>
        <label htmlFor='price'>Precio a partir de: </label>
        <input
          type='range'
          id={minPriceFilterId}
          min='0'
          max='1000'
          onChange={handleChangeMinPrice}
        />
        <span> {`${minPrice}`}</span>
      </div>

      <div>
        <label htmlFor={categoryFilterId} />
        <select id={categoryFilterId} onChange={handleChangeCategory}>
          <option value='all'>Todas</option>
          <option value='laptops'>Laptops</option>
          <option value='smartphones'>Celulares</option>
        </select>
      </div>

    </section>
  )
}
