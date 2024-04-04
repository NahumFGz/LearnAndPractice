// !Ciclo de vida de los componentes
// ? ¿Montando, actualizando y desmontando?
// * Montando: es cuando el componente se renderiza por primera vez
// * Actualizando: es cuando el componente ya ha sido renderizado y se actualiza
// * Desmontando: es cuando el componente se elimina del DOM
import { Component } from 'react';

class Button extends Component {
  render () {
    console.log('Ejecutando el metodo render de Button')
    return (
      <button>
        Enviar
      </button>
    )
  }
}


class App extends Component {
  state = {
    valor: 3
  }
  render() {
    console.log(this.state)
    return (
      <div>
      <p>Hola Mundo</p>
      <Button />
      <button 
       className={`${this.state.valor}`}
       onClick={() => this.setState({valor: 2})}>
        Enviar en App
      </button>
      </div>
    )
  }

}


export default App;
