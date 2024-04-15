// !FORMA CONTROLADA

import './App.css'
import { useMovies } from './hooks/useMovies'
import { Movies } from './components/Movies'
import { useState } from 'react'

function App () {
  const { movies } = useMovies()
  const [query, setQuery] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log({ query })
  }

  // !Desventaja: La forma controlada ejecuta un render en cada cambio
  // !Ventaja: Permite tener una mayor control sobre las validaciones
  // * Mas adelante hay un hook para evitar el renderizado en cada cambio
  console.log('render')

  const handleChange = (event) => {
    setQuery(event.target.value)
  }

  return (
    <div className='page'>
      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input onChange={handleChange} value={query} name='query' placeholder='Avengers, StarWars, The Matrix ....' />
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
