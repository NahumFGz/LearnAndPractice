import { useState } from "react";
import { Component } from "react";

class App extends Component {
  state = { contador: 0 };

  incrementar = () => {
    this.setState({ contador: this.state.contador + 1});
  };

  render() {
    return (
      <div>
        Contador: {this.state.contador}
        <div>
          <button onClick={this.incrementar}>Incrementar</button>
        </div>
      </div>
    );
  }
}

// const App = () => {
//   const valorInicialContador = 0
//   const [contador, setContador] = useState(valorInicialContador);

//   return (
//     <div>
//       Contador: {contador}
//       <div>
//         <button onClick={() => setContador(contador + 1)}>Incrementar</button>
//       </div>
//     </div>
//   );
// };

export default App;
