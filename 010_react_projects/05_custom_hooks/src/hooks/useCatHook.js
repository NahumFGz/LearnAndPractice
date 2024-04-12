//! No nombrar a los hooks con metodos internos xq no deben estar atados a lo que se realiza
//! dentro del custom hook x: useFetchCat x: useReduxCat

// !Evitar que los customHooks devuelvan la actualización del estado

import { useState, useEffect } from 'react'
import { getRandomFact } from '../services/fatcs'

export function useCatFact () {
  const [fact, setFact] = useState()

  const refreshFact = () => {
    getRandomFact().then(newFact => setFact(newFact))
  }

  // Para recuperar la cita y cargar la página
  useEffect(refreshFact, [])

  return { fact, refreshFact }
}
