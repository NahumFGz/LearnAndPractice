// ! Actualizacion de componentes
// * Resumen de ejecución de métodos
// * 1. constructor
// * 2. render
// * 3. componentDidMount
// * 4. componentDidUpdate

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

  // * Este metodo se ejecuta antes de que el componente se actualice
  // * recibe dos parametros, el anterior estado y las propiedades anteriores
  componentDidUpdate (prevProps, prevState) {
    console.log('componentDidUpdate', prevProps, prevState)
  }

  render () {
    console.log('Ejecutando el metodo render de Button')
    return (
      <button onClick={() => this.setState({prop: 1})}>
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
