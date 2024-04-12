import { useEffect, useState } from 'react'
import { getRandomFact } from './services/fatcs'
import { useCatImage } from './hooks/useCatImage'
import './App.css'

export function App () {
  const [fact, setFact] = useState()
  const { imageURL } = useCatImage({ fact })

  useEffect(() => {
    getRandomFact().then(newFact => setFact(newFact))
  }, [])

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
