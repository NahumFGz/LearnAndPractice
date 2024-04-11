import { useEffect, useState } from 'react'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMG_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`

export function App () {
  const [fact, setFact] = useState()

  // No puedes usar axios, react query, solo usar lo básico.
  useEffect(() => {
    async function getRandomFact () {
      const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
      const json = await res.json()
      setFact(json.fact)
    }

    getRandomFact()
  }, [])

  return (
    <main>
      <h1> App de gatitos</h1>
      {fact && <p>{fact}</p>}
    </main>
  )
}
