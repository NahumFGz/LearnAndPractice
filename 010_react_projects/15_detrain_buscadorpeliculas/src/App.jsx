import { useSearch } from './hooks/useSearch'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'

function App () {
  const { search, updateSearch, error } = useSearch()
  const { movies, getMovies } = useMovies({ search })

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('handleSubmit', { search })
    getMovies()
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
