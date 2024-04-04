// ! Subiendo el estado
// ? Donde tenemos que declarar los estados de los componentes?
// Se debe declarar el estado en el componente padre, 
// y luego pasarlo a los componentes hijos a través de las props.

import { Component } from "react";

class Input extends Component {
  render() {
    return (
      <input
        value={this.props.value}
        onChange={this.props.onChange}
      />
    )
  }

}

class App extends Component {
  state = {
    nombre: '',
    apellido: '',
  }

  updateValues = (prop, value) => {
    // Actualizacion dinamica de los valores
    // Funciona para cualquier propiedad que se le pase como argumento
    this.setState({ [prop]: value })
  }

  render() {
    return (
      <p>
        Nombre completo: {`${this.state.nombre} ${this.state.apellido}`}
        <Input 
          value={this.state.nombre}
          onChange={(e) => this.updateValues('nombre', e.target.value)}
        />
        <Input 
          value={this.state.apellido}
          onChange={(e) => this.updateValues('apellido', e.target.value)}
        />
      </p>
    )
  }
}

export default App;
