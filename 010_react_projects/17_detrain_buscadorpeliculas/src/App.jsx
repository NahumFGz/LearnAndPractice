import { useState } from 'react'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'

function App () {
  const [sort, setSort] = useState(false)
  const { search, updateSearch, searchError } = useSearch()
  const { movies, getMovies, loading, errorMovies } = useMovies({ search, sort })

  const handleSubmit = (event) => {
    event.preventDefault()
    if (searchError) return
    getMovies()
    console.log({ movies })
  }

  const handleTypeSearch = (event) => {
    const newQuery = event.target.value
    updateSearch(newQuery)
    console.log({ search })
  }

  const handleSort = (event) => {
    const isChecked = event.target.checked
    setSort(isChecked)
  }

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
            value={search}
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
            className={`rounded bg-white/10 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-white/20
            active:scale-95 transition duration-150 ease-in-out`}
          >
            Buscar
          </button>
        </form>
        {searchError && <p className='mt-4 text-red-500 text-sm'>{searchError}</p>}
        {loading && <p className='text-white'>Cargando...</p>}
        {errorMovies && <p className='text-red-500'>{errorMovies}</p>}
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
