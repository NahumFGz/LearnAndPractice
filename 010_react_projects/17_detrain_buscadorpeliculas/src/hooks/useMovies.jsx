import { searchMovies } from '../services/movies'
import { useCallback, useMemo, useRef, useState } from 'react'

export function useMovies ({ search, sort }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [errorMovies, setErrorMovies] = useState(null)
  const previousSearch = useRef('')

  const getMovies = useCallback(async () => {
    if (search === previousSearch.current) return console.log('Busqueda repetida')

    try {
      setLoading(true)
      setErrorMovies(null)

      previousSearch.current = search
      const newMovies = await searchMovies({ search })
      setMovies(newMovies)
    } catch (e) {
      setErrorMovies('Error al buscar las peliculas')
    } finally {
      setLoading(false)
    }
  })

  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [movies, sort])

  return { movies: sortedMovies, getMovies, loading, errorMovies }
}
