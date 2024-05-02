import { useState } from 'react'

export function Filters () {
  const [minPrice, setMinPrice] = useState(0)

  const handleChange = (event) => {
    setMinPrice(event.target.value)
  }

  return (
    <section className='flex flex-col gap-2'>
      <div className='flex flex-row gap-2'>
        <label htmlFor='price'> MinPrice </label>
        <input
          type='range'
          id='price'
          min='0'
          max='1000'
          value={minPrice}
          onChange={handleChange}
        />
        <span> ${minPrice} </span>
      </div>

      <div className='flex items-center justify-center'>
        <label htmlFor='category'> </label>
        <select
          className='bg-slate-700 border p-1 rounded'
          id='category'
        >
          <option value='all'> All </option>
          <option value='laptops'> Portátiles </option>
          <option value='smartphones'> Celulares </option>
        </select>
      </div>
    </section>
  )
}
