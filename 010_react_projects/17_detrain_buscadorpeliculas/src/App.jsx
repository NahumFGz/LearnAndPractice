import mockResults from './mocks/with-results.json'

function App () {
  const movies = mockResults?.Search

  return (
    <>
      <div>
        <h1 className='text-white'> Buscador de peliculas </h1>

        <form>
          <input
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

      <main>
        <div>
          {
            movies.map((movie) => (
              <div key={movie.imdbID}>
                <img src={movie.Poster} alt={movie.Title} />
                <h2>{movie.Title}</h2>
                <p>{movie.Year}</p>
              </div>
            ))
          }
        </div>
      </main>
    </>
  )
}
export default App
