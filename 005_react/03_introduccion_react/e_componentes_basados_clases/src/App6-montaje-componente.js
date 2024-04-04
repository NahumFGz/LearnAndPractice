// ! Montaje del componente
// * Resumen de ejecución de métodos
// * 1. constructor
// * 2. render
// * 3. componentDidMount

import { Component } from 'react';

class Button extends Component {
  constructor (props) {
    super(props)
    console.log('constructor', props)
    // *es una mala practica usar el constructor para inicializar el estado
    // this.state = {
    //   chanchito: props.chanchito
    // }
  }

  componentDidMount () {
    console.log('componentDidMount')
  }

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
      <Button chanchito='feliz'/>
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
