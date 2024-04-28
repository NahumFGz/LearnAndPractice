import { useState, useEffect } from 'react'

export function useSearch () {
  const [search, setUpdateSearch] = useState('')
  const [error, setError] = useState(null)

  useEffect(() => {
    // Validaciones de query
    if (search === '') {
      setError('No se puede buscar una película vacía')
      return
    }

    if (search.length < 3) {
      setError('La búsqueda debe tener al menos 3 caracteres')
      return
    }

    if (search.match(/^\d+$/)) {
      setError('No se puede buscar una pelicula con un número')
      return
    }

    setError(null)
  }, [search])

  return { search, setUpdateSearch, error }
}
