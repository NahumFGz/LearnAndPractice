import { useEffect, useState } from 'react'
import { getRandomFact } from './services/fatcs'
import { useCatImage } from './hooks/useCatImage'
import './App.css'

//! No nombrar a los hooks con metodos internos xq no deben estar atados a lo que se realiza
//! dentro del custom hook x: useFetchCat x: useReduxCat

// !Evitar que los customHooks devuelvan la actualización del estado

const useCatFact = () => {
  const [fact, setFact] = useState()

  const refreshFact = () => {
    getRandomFact().then(newFact => setFact(newFact))
  }

  // Para recuperar la cita y cargar la página
  useEffect(refreshFact, [])

  return { fact, refreshFact }
}

export function App () {
  const { fact, refreshFact } = useCatFact()
  const { imageURL } = useCatImage({ fact })

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main>
      <h1> App de gatitos</h1>

      <button onClick={handleClick}>
        Get New Fact
      </button>

      <section>
        {fact && <p>{fact}</p>}
        {imageURL && <img src={imageURL} alt={`Image extact using from ${fact}`} />}
      </section>
    </main>
  )
}
