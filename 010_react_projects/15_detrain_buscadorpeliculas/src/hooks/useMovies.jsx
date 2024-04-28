import { searchMovies } from '../services/movies'
import { useRef, useState, useMemo, useCallback } from 'react'

// Cada vez que se renderiza App, se crea un nuevo objeto movies,
// por lo que se vuelve a ejecutar el hook useMovies y se vuelven a crear las funciones y variables.

export function useMovies ({ search, sort }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const previousSearch = useRef(search)

  const getMovies = useCallback(async () => {
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
  })

  const sortedMoviesMemo = useMemo(() => {
    console.log('sortedMoviesMemo')

    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [sort, movies])

  return { movies: sortedMoviesMemo, getMovies, loading, error }
}
