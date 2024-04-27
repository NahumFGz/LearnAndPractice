export function ListOfMovies ({ movies }) {
  return (
    movies.map((movie) => (
      <div key={movie.imdbID} className='flex flex-col items-center'>
        <img src={movie.Poster} alt={movie.Title} />
        <h2 className='font-bold'>{movie.Title}</h2>
        <p className='mt-2'>{movie.Year}</p>
      </div>
    ))
  )
}

export function NoFoundMovies () {
  return (
    <p>No se encontraron resultados</p>
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
