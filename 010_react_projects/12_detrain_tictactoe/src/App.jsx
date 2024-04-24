function App () {
  return (
    <>
      <main className='h-screen font-sans bg-[#222] text-gray-200 flex justify-center items-center'>
        <article>
          <h1 className='flex justify-center items-center text-4xl font-semibold mb-3'>Tic tac toe</h1>
          <div className='flex justify-center items-center'>
            <button
              className={`w-24 p-3 m-6 bg-transparent border border-gray-200 text-gray-200 text-sm
                      rounded transition duration-200 font-bold cursor-pointer
                      hover:bg-gray-200 hover:text-gray-800`}
            >
              Reset game
            </button>
          </div>

          <section className='grid grid-cols-3 gap-2'>
            {
              Array.from({ length: 9 }).map((_, index) => (
                <div
                  key={index}
                  className='w-24 h-24 flex items-center justify-center border-2 border-gray-200 text-4xl rounded-md'
                >
                  X
                </div>
              ))
            }
          </section>

          <section className='mt-5 flex items-center justify-center'>
            <div
              className='w-16 h-16 flex items-center justify-center text-4xl rounded-md bg-cyan-700'
            >
              X
            </div>

            <div
              className='w-16 h-16 flex items-center justify-center text-4xl rounded-md'
            >
              O
            </div>
          </section>
        </article>
      </main>
    </>
  )
}

export default App
