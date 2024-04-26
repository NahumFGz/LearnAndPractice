import { useEffect, useState } from 'react'
import confetti from 'canvas-confetti'

const CAT_RANDOM_FACT_ENDPOINT = 'https://catfact.ninja/fact'

function App () {
  const [fact, setFact] = useState()
  const [imgURL, setImgURL] = useState()

  const getRandomFact = () => {
    console.log('useEffect')
    fetch(CAT_RANDOM_FACT_ENDPOINT)
      .then(response => response.json())
      .then(data => setFact(data.fact))
  }

  const handleClick = () => {
    getRandomFact()
    confetti()
  }

  useEffect(() => {
    getRandomFact()
  }, [])

  useEffect(() => {
    console.log('useEffect fact')

    if (!fact) return

    const firstLetter = fact.split(' ', 3).join(' ')
    setImgURL(`https://cataas.com/cat/says/${firstLetter}?fontSize=50&fontColor=red`)
  }, [fact])
  return (
    <>
      <div className='flex flex-col justify-center items-center gap-4 text-white'>
        <h1>Prueba técnica</h1>
        <button
          className='border border-purple-300 rounded p-2 hover:bg-slate-100 hover:text-black'
          onClick={handleClick}
        >
          New fact
        </button>
      </div>

      <article className='text-base text-white flex items-center justify-center gap-10 w-full'>
        <section className='max-w-1/2'>
          <p className='ml-10'>
            {fact}
          </p>
        </section>

        <aside className='max-w-1/2'>
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
