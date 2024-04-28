import mockResults from './mocks/with-results.json'

function App () {
  const movies = mockResults?.Search

  return (
    <>
      <div className='bg-gray-900 p-4'>
        <h1 className='text-white text-2xl font-bold mb-4'> Buscador de peliculas </h1>

        <form className='flex flex-wrap gap-2'>
          <input
            className='flex-1 p-2'
            placeholder='Avengers, Star Wars, The Matrix...'
          />
          <input
            type='checkbox'
          />

          <button
            type='submit'
            class={`rounded bg-white/10 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-white/20
            active:scale-95 transition duration-150 ease-in-out`}
          >
            Button text
          </button>
        </form>
      </div>

      <main className='bg-gray-800 p-4'>
        <div className='grid gird-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {
            movies.map((movie) => (
              <div key={movie.imdbID} className='bg-gray-700 p-4 rounded-lg shadow-lg m-2 flex flex-col items-center'>
                <img src={movie.Poster} alt={movie.Title} className='w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg' />
                <h2 className='text-white text-lg'>{movie.Title}</h2>
                <p className='text-gray-400'>{movie.Year}</p>
              </div>
            ))
          }
        </div>
      </main>
    </>
  )
}
export default App
