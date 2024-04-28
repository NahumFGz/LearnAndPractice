import { searchMovies } from '../services/movies'
import { useRef, useState } from 'react'

export function useMovies ({ search }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [errorMovies, setErrorMovies] = useState(null)
  const previousSearch = useRef('')

  const getMovies = async () => {
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
  }

  return { movies, getMovies, loading, errorMovies }
}
