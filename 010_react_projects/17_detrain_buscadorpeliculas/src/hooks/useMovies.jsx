import { searchMovies } from '../services/movies'
import { useRef, useState } from 'react'

export function useMovies ({ search, sort }) {
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

  const sortedMovies = sort
    ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
    : movies

  // Cada vez que se actualiza el estado de sort, se ejecuta el hook useMovies
  console.log('Crear sorted movies', sortedMovies)

  return { movies: sortedMovies, getMovies, loading, errorMovies }
}
