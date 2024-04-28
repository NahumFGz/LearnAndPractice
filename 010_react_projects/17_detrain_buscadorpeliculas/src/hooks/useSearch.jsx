import { useState, useEffect, useRef } from 'react'

export function useSearch () {
  const [search, updateSearch] = useState('')
  const [searchError, setSearchError] = useState(null)
  const isFirstRender = useRef(true)

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = search === ''
      return
    }

    // Validaciones de query
    if (search === '') {
      setSearchError('No se puede buscar una película vacía')
      return
    }

    if (search.length < 3) {
      setSearchError('La búsqueda debe tener al menos 3 caracteres')
      return
    }

    if (search.match(/^\d+$/)) {
      setSearchError('No se puede buscar una pelicula que inicie con un numero')
      return
    }

    setSearchError(null)
  }, [search])

  return { search, updateSearch, searchError }
}
