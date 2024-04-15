import { searchMovies } from '../services/movies'
import { useRef, useState } from 'react'

export function useMovies ({ search }) {
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
      //! Tanto si ocurre el TRY o CATCH
      setLoading(false)
    }
  }

  return { movies, getMovies, loading, error }
}
