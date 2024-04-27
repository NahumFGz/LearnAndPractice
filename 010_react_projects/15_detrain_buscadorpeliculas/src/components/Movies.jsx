export function ListOfMovies ({ movies }) {
  return (
    movies.map((movie) => (
      <div key={movie.id} className='flex flex-col items-center'>
        <img src={movie.poster} alt={movie.title} />
        <h2 className='font-bold'>{movie.title}</h2>
        <p className='mt-2'>{movie.year}</p>
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
