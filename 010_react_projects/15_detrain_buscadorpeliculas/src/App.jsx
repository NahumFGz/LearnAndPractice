import { Movies } from './components/Movies'
import responseMovies from './mocks/with-results.json'

function App () {
  const movies = responseMovies.Search

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
          />
          <input className='m-2' type='checkbox' />
          <button className={`w-24 h-10 border text-white text-lg rounded-lg bg-slate-700 
                            hover:bg-slate-500
                            active:scale-95 transition duration-150 ease-in-out
                            `}
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
