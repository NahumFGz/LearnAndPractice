import { useEffect, useState } from 'react'
import './App.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export function App () {
  const [fact, setFact] = useState()
  const [imageURL, setImageUrl] = useState()

  // !BUENA PRACTICA -> Cada efecto solo debe tener una responsabilidad
  // Efecto para recuperar las 3 palabras
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)
      })
  }, [])

  // Efecto para generar la URL
  useEffect(() => {
    if (!fact) return

    const threeFirstWords = fact.split(' ', 3).join(' ')
    console.log('threeFirstWords', threeFirstWords)

    setImageUrl(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red`)
  }, [fact])

  return (
    <main>
      <h1> App de gatitos</h1>
      <section>
        {fact && <p>{fact}</p>}
        {imageURL && <img src={imageURL} alt={`Image extact using from ${fact}`} />}
      </section>
    </main>
  )
}
