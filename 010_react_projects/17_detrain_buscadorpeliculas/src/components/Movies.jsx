function ListOfMovies ({ movies }) {
  return (
    movies.map((movie) => (
      <div key={movie.imdbID} className='bg-gray-700 p-4 rounded-lg shadow-lg m-2 flex flex-col items-center'>
        <img src={movie.Poster} alt={movie.Title} className='w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg' />
        <h2 className='text-white text-lg'>{movie.Title}</h2>
        <p className='text-gray-400'>{movie.Year}</p>
      </div>
    ))
  )
}

function NoFoundMovies () {
  return (
    <div className='bg-gray-700 p-4 rounded-lg shadow-lg m-2 flex flex-col items-center'>
      <h2 className='text-white text-lg'>No se encontraron resultados</h2>
    </div>
  )
}

export function Movies ({ movies }) {
  const hasMovies = movies?.length > 0

  return (
    hasMovies
      ? <ListOfMovies movies={movies} />
      : <NoFoundMovies />
  )
}
