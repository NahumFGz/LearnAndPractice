// ! useReducer
import { useReducer, useState } from "react";

// const state = { contador:0 }
//const reducer = (acc, el) => { return newAcc}
// action = { type: string, payload: any }

const inicial = { contador: 0 };

const reducer = (state, action) => {
  //1. preguntar que tipo de accion se recibe
  switch (action.type) {
    case "incrementar":
      return { contador: state.contador + 1 };
    case "decrementar":
      return { contador: state.contador - 1 };
    case "set":
      return { contador: action.payload };
    default:
      return state
  }
};

//!reducer
/*
reducer: Una función reductora que determina cómo se actualiza el estado en base a una acción. Esta función es definida arriba en tu código y se llama cada vez que se despacha una acción.
inicial: El estado inicial de tu componente, en este caso, { contador: 0 }.
*/

const App = () => {
  const [state, dispatch] = useReducer(reducer, inicial);
  const [valor, setValor] = useState(0)

  return (
    <div>
      Contador: {state.contador}
      <input value={valor} onChange={e => setValor(e.target.value)}/>
      <button onClick={() => dispatch({ type: 'incrementar' })}>Más</button>
      <button onClick={() => dispatch({ type: 'decrementar' })}>Menos</button>
      <button onClick={() => dispatch({ type: 'set' , payload: valor})}>Set</button>
    
    </div>
  );
};

export default App;
