import './App.css'
import { useMovies } from './hooks/useMovies'
import { Movies } from './components/Movies'
import { useRef } from 'react'

function App () {
  const { movies } = useMovies()
  const inputRef = useRef() // ABUSA DE ESTO

  const handleSubmit = (event) => {
    event.preventDefault()
    const inputEl = inputRef.current
    const value = inputEl.value
    console.log(value)
  }

  return (
    <div className='page'>
      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input ref={inputRef} placeholder='Avengers, StarWars, The Matrix ....' />
          <button type='submit'> Buscar </button>
        </form>
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
