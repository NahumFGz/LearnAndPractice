import Button from "./button";

function App() {
  return (
    <div>
      <h1 onClick={ (e) => console.log('clic',e)}>Hola Mundo</h1>
      <Button onClick={() => console.log('clikeado')}> Enviar </Button>
    </div>
  )
}

export default App;
