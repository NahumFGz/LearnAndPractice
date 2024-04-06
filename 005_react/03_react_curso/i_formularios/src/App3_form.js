//! En esta alternativa los campos de input siempre deben tener un name UNICO
function App() {
  
  const submit = (e) => {
    e.preventDefault()

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
      <input type='file' name='archivo'/>
      <input type='submit' value='Enviar'/>
    </form>
  )
}

export default App