import withResults from '../mocks/with-results.json'
import withoutResults from '../mocks/no-results.json'
import { useEffect, useState } from 'react'

export function useMovies ({ search }) {
  const [responseMovies, setResponseMovies] = useState([])
  const movies = responseMovies?.Search

  const mappedMovies = movies?.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster
  }))

  const getMovies = () => {
    if (search) {
      setResponseMovies(withResults)
    } else {
      setResponseMovies(withoutResults)
    }
  }

  useEffect(() => { console.log('dsadasda->', { search, movies }) }, [search])

  return { movies: mappedMovies, getMovies }
}
