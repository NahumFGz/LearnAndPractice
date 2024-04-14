// !Para evitar abusar de useRef

import './App.css'
import { useMovies } from './hooks/useMovies'
import { Movies } from './components/Movies'

function App () {
  const { movies } = useMovies()

  const handleSubmit = (event) => {
    event.preventDefault()
    const fields = new window.FormData(event.target)
    const query = fields.get('query')
    console.log(query)
  }

  return (
    <div className='page'>
      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input name='query' placeholder='Avengers, StarWars, The Matrix ....' />
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
