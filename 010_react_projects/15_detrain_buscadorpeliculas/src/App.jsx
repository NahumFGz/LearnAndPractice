import { useState, useEffect } from 'react'
import { Movies } from './components/Movies'
import { searchMovies } from './services/movies'

function App () {
  const [search, setSearch] = useState('')
  const [movies, setMovies] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault()
    const fields = Object.fromEntries(new window.FormData(event.target))
    const query = fields.query
    console.log(query)
    setSearch(query)
  }

  useEffect(() => {
    const fetchMovies = async () => {
      const newMovies = await searchMovies({ search })
      setMovies(newMovies)
    }

    fetchMovies()
  }, [search])

  return (
    <>
      <div className='flex flex-col items-center'>
        <h1 className='py-10 text-3xl text-white font-bold'>
          Buscador de peliculas
        </h1>

        <form onSubmit={handleSubmit}>
          <input
            name='query'
            className='w-92 h-10 px-4 text-lg rounded-lg'
            placeholder='Avengers, StarWars, The Matrix...'
          />
          <input
            name='check'
            className='m-2'
            type='checkbox'
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
