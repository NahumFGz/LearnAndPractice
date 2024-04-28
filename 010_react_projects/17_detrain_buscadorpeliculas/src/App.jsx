import { useState, useEffect } from 'react'
import { Movies } from './components/Movies'
import mockResults from './mocks/with-results.json'

function App () {
  const movies = mockResults?.Search
  const [query, setQuery] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('handleSubmit', { query })
  }

  const handleTypeSearch = (event) => {
    const newQuery = event.target.value
    setQuery(newQuery)
    console.log('handleTypeSearch', { newQuery })
  }

  const handleSort = (event) => {
    const isChecked = event.target.checked
    console.log('handleSort', { isChecked })
  }

  useEffect(() => {
    // Validaciones de query
    if (query === '') {
      setError('No se puede buscar una película vacía')
      return
    }

    if (query.length < 3) {
      setError('La búsqueda debe tener al menos 3 caracteres')
      return
    }

    if (query.match(/^\d+$/)) {
      setError('No se puede buscar una pelicula con un número')
      return
    }

    setError(null)
  }, [query])

  return (
    <>
      <div className='bg-gray-900 p-4'>
        <h1 className='text-white text-2xl font-bold mb-4'> Buscador de peliculas </h1>

        <form
          className='flex flex-wrap gap-2'
          onSubmit={handleSubmit}
        >
          <input
            name='query'
            className='flex-1 p-2'
            placeholder='Avengers, Star Wars, The Matrix...'
            onChange={handleTypeSearch}
          />
          <input
            name='check'
            type='checkbox'
            onChange={handleSort}
          />

          <button
            type='submit'
            class={`rounded bg-white/10 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-white/20
            active:scale-95 transition duration-150 ease-in-out`}
          >
            Button text
          </button>
        </form>
        {error && <p className='mt-4 text-red-500 text-sm'>{error}</p>}
      </div>

      <main className='bg-gray-800 p-4'>
        <div className='grid gird-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          <Movies movies={movies} />
        </div>
      </main>
    </>
  )
}
export default App
