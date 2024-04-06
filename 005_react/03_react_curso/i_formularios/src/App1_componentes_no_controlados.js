// !Componentes no controlados
// Componentes que funcionan y no tengo el detalle de como
// ? Como podemos interceptar los datos para manejarlos con react???

function App() {
  
  const submit = (e) => {
    // Va impedir que el form haga su accion por defecto
    e.preventDefault()
    console.log(e.target)
    // Crear objeto con los datos
    console.log(new FormData(e.target))
    // Convertirlo a un arreglo
    console.log(Array.from(new FormData(e.target)))

    // Convierte en un objeto
    const data = Array.from(new FormData(e.target))
    console.log(Object.fromEntries(data))
  }
  
  
  return (
    <form onSubmit={submit}>
      <div>
        <span>
          lalala
        </span>
        <input name='campo'/>
      </div>
      <input name='campo-2'/>
      <input type='submit' value='Enviar'/>
    </form>
  )
}

export default App