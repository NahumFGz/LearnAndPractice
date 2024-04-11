import { useEffect, useState } from 'react'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export function App () {
  const [fact, setFact] = useState()
  const [imageURL, setImageUrl] = useState()

  // No puedes usar axios, react query, solo usar lo básico.
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)

        const threeFirstWords = fact.split(' ', 3).join(' ')
        console.log('threeFirstWords', threeFirstWords)

        setImageUrl(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red`)
      })
  }, [])

  return (
    <main>
      <h1> App de gatitos</h1>
      {fact && <p>{fact}</p>}
      {imageURL && <img src={imageURL} alt={`Image extact using from ${fact}`} />}
    </main>
  )
}
