import { createContext } from 'react'

// 1. Crear el contexto
// Este es el contexto que vamos a consumir
export const FiltersContext = createContext()

// 2. Proveer el contexto
// Este es el que provee el acceso al contexto
export function FiltersProvider ({ children }) {
  return (
    <FiltersContext.Provider value={{
      category: 'all',
      minPrice: 0
    }}
    >
      {children}
    </FiltersContext.Provider>
  )
}
