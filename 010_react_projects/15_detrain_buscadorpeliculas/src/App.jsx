function App () {
  return (
    <>
      <div className='flex flex-col items-center'>
        <h1 className='py-10 text-3xl text-white font-bold'>
          Buscador de peliculas
        </h1>

        <form>
          <input
            className='w-92 h-10 px-4 text-lg rounded-lg'
            placeholder='Avengers, StarWars, The Matrix...'
          />
          <input className='m-2' type='checkbox' />
          <button className='w-24 h-10 border text-white text-lg rounded-lg bg-slate-700 hover:bg-slate-500'> Buscar </button>
        </form>
      </div>

      <main>
        <div>
          {

          }
        </div>
      </main>

    </>
  )
}

export default App
