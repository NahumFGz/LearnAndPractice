import { useState, useEffect } from 'react'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'

function useSearch () {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)

  useEffect(() => {
    if (search === '') {
      setError('No se puede buscar una película vacía')
      return
    }

    if (search.length < 3) {
      setError('La búsqueda debe tener al menos 3 caracteres')
      return
    }

    if (search.match(/^\d+$/)) {
      setError('No se puede buscar una pelicula con un número')
      return
    }

    setError(null)
  }, [search])

  return { search, updateSearch, error }
}

function App () {
  const { movies } = useMovies()
  const { search, updateSearch, error } = useSearch()

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('handleSubmit', { search })
  }
  const handleChange = (event) => {
    const newQuery = event.target.value
    updateSearch(newQuery)
    console.log('handleChange', { newQuery })
  }

  const handleSort = (event) => {
    console.log('handleSort', event.target.checked)
  }

  return (
    <>
      <div className='flex flex-col items-center'>
        <h1 className='py-10 text-3xl text-white font-bold'>
          Buscador de peliculas
        </h1>

        <form onSubmit={handleSubmit}>
          <input
            name='query'
            value={search}
            className='w-92 h-10 px-4 text-lg rounded-lg'
            placeholder='Avengers, StarWars, The Matrix...'
            onChange={handleChange}
          />
          <input
            name='check'
            className='m-2'
            type='checkbox'
            onChange={handleSort}
          />
          <button
            className={`w-24 h-10 border text-white text-lg rounded-lg bg-slate-700 
                            hover:bg-slate-500
                            active:scale-95 transition duration-150 ease-in-out
                            `}
            type='submit'
          > Buscar
          </button>
        </form>
        {error && <p className='mt-4 text-red-500 text-sm'>{error}</p>}
      </div>

      <main>
        <div className='text-white grid grid-cols-3 gap-4 mt-10'>
          <Movies movies={movies} />
        </div>
      </main>

    </>
  )
}

export default App
