import { useEffect, useState } from 'react'
import { getRandomFact } from './services/fatcs'
import './App.css'

export function App () {
  const [fact, setFact] = useState()
  const [imageURL, setImageUrl] = useState()

  useEffect(() => {
    getRandomFact().then(setFact)
    // !Se pueden pasar las funciones como parametro
    // .then(setFact) recibe el parametro de la función
    // * es similar a newFact => setFact(newFact)
  }, [])

  useEffect(() => {
    if (!fact) return

    const threeFirstWords = fact.split(' ', 3).join(' ')
    console.log('threeFirstWords', threeFirstWords)

    const CAT_URL = `https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red`
    console.log(CAT_URL)
    setImageUrl(CAT_URL)
  }, [fact])

  const handleClick = async () => {
    const newFact = await getRandomFact()
    setFact(newFact)
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
