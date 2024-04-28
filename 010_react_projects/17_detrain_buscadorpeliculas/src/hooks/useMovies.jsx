import { searchMovies } from '../services/movies'
import { useState } from 'react'

export function useMovies ({ search }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [errorMovies, setErrorMovies] = useState(null)

  const getMovies = async () => {
    try {
      setLoading(true)
      setErrorMovies(null)

      const newMovies = await searchMovies({ search })
      setMovies(newMovies)
    } catch (e) {
      setErrorMovies('Error al buscar las peliculas')
    } finally {
      setLoading(false)
    }
  }

  return { movies, getMovies, loading, errorMovies }
}
