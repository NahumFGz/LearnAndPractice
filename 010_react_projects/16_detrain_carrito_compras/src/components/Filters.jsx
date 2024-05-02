import { useState, useId } from 'react'
import { useFilters } from '../hooks/useFilters'

export function Filters () {
  const { setFilters } = useFilters()
  const [minPrice, setMinPrice] = useState(0)
  const minPriceFieldId = useId()
  const cateforyFieldId = useId()

  const handleChangeMinPrice = (event) => {
    setMinPrice(event.target.value)
    setFilters(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }

  const handleChangeCategory = (event) => {
    setFilters(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }

  return (
    <section className='flex flex-col gap-2'>
      <div className='flex flex-row gap-2'>
        <label htmlFor={minPriceFieldId}> MinPrice </label>
        <input
          type='range'
          id={minPriceFieldId}
          min='0'
          max='1000'
          value={minPrice}
          onChange={handleChangeMinPrice}
        />
        <span> ${minPrice} </span>
      </div>

      <div className='flex items-center justify-center'>
        <label htmlFor={cateforyFieldId}> </label>
        <select
          className='bg-slate-700 border p-1 rounded'
          id={cateforyFieldId}
          onChange={handleChangeCategory}
        >
          <option value='all'> All </option>
          <option value='laptops'> Portátiles </option>
          <option value='smartphones'> Celulares </option>
        </select>
      </div>
    </section>
  )
}
