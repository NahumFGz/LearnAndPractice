// !Para evitar abusar de useRef

import './App.css'
import { useMovies } from './hooks/useMovies'
import { Movies } from './components/Movies'

function App () {
  const { movies } = useMovies()

  const handleSubmit = (event) => {
    event.preventDefault()
    const fields = Object.fromEntries(new window.FormData(event.target))
    console.log(fields)
  }

  return (
    <div className='page'>
      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input name='query' placeholder='Avengers, StarWars, The Matrix ....' />
          <input name='otro' placeholder='Avengers, StarWars, The Matrix ....' />
          <input name='alt' placeholder='Avengers, StarWars, The Matrix ....' />
          <input name='enter' placeholder='Avengers, StarWars, The Matrix ....' />
          <input name='ninja' placeholder='Avengers, StarWars, The Matrix ....' />
          <input name='mail' placeholder='Avengers, StarWars, The Matrix ....' />
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
