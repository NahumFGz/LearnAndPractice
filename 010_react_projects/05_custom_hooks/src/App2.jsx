import { useEffect, useState } from 'react'
import { getRandomFact } from './services/fatcs'
import './App.css'

export function App () {
  const [fact, setFact] = useState()
  const [imageURL, setImageUrl] = useState()

  const getAndSetRandomFact = async () => {
    const randomFact = await getRandomFact()
    setFact(randomFact)
  }

  useEffect(() => {
    getAndSetRandomFact()
  }, [])

  useEffect(() => {
    if (!fact) return

    const threeFirstWords = fact.split(' ', 3).join(' ')
    console.log('threeFirstWords', threeFirstWords)

    const CAT_URL = `https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red`
    console.log(CAT_URL)
    setImageUrl(CAT_URL)
  }, [fact])

  const handleClick = () => {
    getAndSetRandomFact()
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
