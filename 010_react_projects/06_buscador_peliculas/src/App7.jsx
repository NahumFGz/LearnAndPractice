// !Validar de forma CONTROLADA
import './App.css'
import { useMovies } from './hooks/useMovies'
import { Movies } from './components/Movies'
import { useEffect, useState } from 'react'

function App () {
  const { movies } = useMovies()
  const [query, setQuery] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log({ query })
  }

  const handleChange = (event) => {
    setQuery(event.target.value)
  }

  useEffect(() => {
    //! Forma INCORRECTA DE VALIDAR -> Hay que asegurarse que estamos usando el nuevo estado
    if (query === '') {
      setError('No se puede buscar una película vacía')
      return
    }

    if (query.match(/^\d+$/)) {
      setError('No se puede buscar una pelicula con un número')
      return
    }

    if (query.length < 3) {
      setError('La búsqueda debe tener al menos 3 caracters')
      return
    }

    setError(null)
  }, [query])

  return (
    <div className='page'>
      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input onChange={handleChange} value={query} name='query' placeholder='Avengers, StarWars, The Matrix ....' />
          <button type='submit'> Buscar </button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
