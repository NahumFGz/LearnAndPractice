import { useRef } from 'react'
import { Movies } from './components/Movies'
import responseMovies from './mocks/with-results.json'

const API_KEY = import.meta.env.VITE_IMDB_API_KEY

const searchMovies = async ({ search }) => {
  const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
  const json = await response.json()
  const movies = json.Search

  console.log(movies)
  return movies
}

function App () {
  const movies = responseMovies.Search
  const inputRef = useRef()

  const handleClick = (event) => {
    event.preventDefault()
    const search = inputRef.current.value
    searchMovies({ search })
  }

  return (
    <>
      <div className='flex flex-col items-center'>
        <h1 className='py-10 text-3xl text-white font-bold'>
          Buscador de peliculas
        </h1>

        <form>
          <input
            className='w-92 h-10 px-4 text-lg rounded-lg'
            placeholder='Avengers, StarWars, The Matrix...'
            ref={inputRef}
          />
          <input className='m-2' type='checkbox' />
          <button
            className={`w-24 h-10 border text-white text-lg rounded-lg bg-slate-700 
                            hover:bg-slate-500
                            active:scale-95 transition duration-150 ease-in-out
                            `}
            type='submit'
            onClick={handleClick}
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
