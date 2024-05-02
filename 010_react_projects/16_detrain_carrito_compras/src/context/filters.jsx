import { createContext } from 'react'

// Creear el contexto
export const FiltersContext = createContext()

// Crear el provider
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
