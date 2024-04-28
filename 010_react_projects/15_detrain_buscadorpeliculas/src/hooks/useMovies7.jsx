import { searchMovies } from '../services/movies'
import { useRef, useState, useMemo } from 'react'

export function useMovies ({ search, sort }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const previousSearch = useRef(search)

  const getMovies = async () => {
    if (search === previousSearch.current) return

    try {
      setLoading(true)
      setError(null)

      previousSearch.current = search
      const newMovies = await searchMovies({ search })
      setMovies(newMovies)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  // !Explicación de useMemo -> 1:43:00
  // https://www.youtube.com/watch?v=GOEiMwDJ3lc
  const sortedMoviesMemo = useMemo(() => {
    console.log('sortedMoviesMemo')

    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [sort, movies])

  return { movies: sortedMoviesMemo, getMovies, loading, error }
}
