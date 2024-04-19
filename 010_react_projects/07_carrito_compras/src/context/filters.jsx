import { createContext, useState } from 'react'

// 1. Crear el contexto
// Este es el contexto que vamos a consumir
export const FiltersContext = createContext()

// 2. Proveer el contexto
// Este es el que provee el acceso al contexto
export function FiltersProvider ({ children }) {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 500
  })

  return (
    <FiltersContext.Provider value={{
      filters,
      setFilters
    }}
    >
      {children}
    </FiltersContext.Provider>
  )
}
