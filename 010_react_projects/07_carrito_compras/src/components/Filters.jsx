import { useState } from 'react'
import './Filters.css'

export function Filters ({ onChange }) {
  const [minPrice, setMinPrice] = useState(0)

  const handleChangeMinPrice = (event) => {
    setMinPrice(event.target.value)
    // Aqui algo huele mal
    // DOS FUENTES DE VERDAD
    onChange(prevState => ({
      ...prevState,
      minPrice: parseInt(event.target.value)
    })
    )
  }

  const handleChangeCategory = (event) => {
    // Aqui algo huele mal
    // Aqui estamos pasando la funcion de actualizacion del estado
    // nativa de React a un componente hijo
    onChange(prevState => ({
      ...prevState,
      category: event.target.value
    })
    )
  }

  return (
    <section className='filters'>
      <div>
        <label htmlFor='price'>Precio a partir de: </label>
        <input
          type='range'
          id='price'
          min='0'
          max='1000'
          onChange={handleChangeMinPrice}
        />
        <span> {`${minPrice}`}</span>
      </div>

      <div>
        <label htmlFor='category' />
        <select id='category' onChange={handleChangeCategory}>
          <option value='all'>Todas</option>
          <option value='laptops'>Laptops</option>
          <option value='smartphones'>Celulares</option>
        </select>
      </div>

    </section>
  )
}
