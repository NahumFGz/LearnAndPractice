// ! Desmontando componentes
// * Resumen de ejecución de métodos
// * 1. constructor
// * 2. render
// * 3. componentDidMount
// * 4. componentDidUpdate
// * 5. componentWillUnmount

import { Component } from "react";

class Button extends Component {
  constructor(props) {
    super(props);
    console.log("constructor", props);
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate", prevProps, prevState);
  }

  componentWillUnmount() {
    console.log("Desmontando componente", this.props, this.state);
  }

  render() {
    console.log("Ejecutando el metodo render de Button");
    return <button onClick={() => this.setState({ prop: 1 })}>Enviar</button>;
  }
}

class App extends Component {
  state = {
    valor: 3,
  };
  render() {
    console.log(this.state);
    return (
      <div>
        <p>Hola Mundo</p>
        {this.state.valor === 3 ? <Button chanchito="feliz" /> : null}
        <button
          className={`${this.state.valor}`}
          onClick={() => this.setState({ valor: 2 })}
        >
          Enviar en App
        </button>
      </div>
    );
  }
}

export default App;






