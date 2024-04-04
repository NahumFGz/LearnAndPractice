// !Estado de un componente -> State
import { Component } from 'react';

class App extends Component {
  state = {
    valor: 3
  }
  // El metodo de render se ejecuta siempre que el estado cambia
  // Tambien se ejecutan cuando un componente padre se renderiza los hijos tambien se renderizan
  // * Resumen: cuando cambia el estado y cuando el metodo render del componente padre tmb se ha llamado
  render() {
    console.log(this.state)
    return (
      <div>
      <p>Hola Mundo</p>
      <button 
       className={`${this.state.valor}`}
       onClick={() => this.setState({valor: 2})}>
        Enviar
      </button>
      </div>
    )
  }

}


export default App;
