import { useEffect, useState } from 'react'

const CAT_RANDOM_FACT_ENDPOINT = 'https://catfact.ninja/fact'

function App () {
  const [fact, setFact] = useState()
  const [imgURL, setImgURL] = useState()

  useEffect(() => {
    console.log('useEffect')
    fetch(CAT_RANDOM_FACT_ENDPOINT)
      .then(response => response.json())
      .then(data => setFact(data.fact))
  }, [])

  useEffect(() => {
    console.log('useEffect fact')

    if (!fact) return

    const firstLetter = fact.split(' ', 3).join(' ')
    setImgURL(`https://cataas.com/cat/says/${firstLetter}?fontSize=50&fontColor=red`)
  }, [fact])
  return (
    <>
      <h1 className=' py-10 text-white text-3xl flex justify-center'>Prueba técnica</h1>

      <article className='text-base text-white flex items-center justify-center gap-10'>
        <section>
          <p className='ml-10'>
            {fact}
          </p>
        </section>

        <aside>
          <img
            className='max-w-[300px] m-10'
            src={imgURL}
          />
        </aside>
      </article>
    </>
  )
}

export default App
