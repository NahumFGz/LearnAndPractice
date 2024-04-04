import Button from "./button";

const arr = [
  'chanchito feliz',
  'chanchito triste',
  'chanchito emocionado',
]

function App() {
  const miVariableRenderizadoCondicional = false
  
  if (miVariableRenderizadoCondicional) {
    return  <p>Mi variable es dio true!</p>
  }

  return (
    <div>
      <h1 onClick={ (e) => console.log('clic',e)}>Hola Mundo</h1>
      
      //Cuando se itera un array se debe agregar un key
      {arr.map(el => <p key={el}>{el}</p>)}
      
      <Button onClick={() => console.log('clikeado')}> Enviar </Button>
    </div>
  )
}

export default App;
