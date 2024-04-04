// !Ciclo de vida de los componentes
// ? ¿Cuando se ejecuta un componente?
// * 1. Cuando el estado cambia
// * 2. Cuando el metodo render del componente padre se ejecuta (en este caso Button esta dentro del render principal de App)

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
  // El metodo de render se ejecuta siempre que el estado cambia
  // Tambien se ejecutan cuando un componente padre se renderiza los hijos tambien se renderizan
  // * Resumen: cuando cambia el estado y cuando el metodo render del componente padre tmb se ha llamado
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
