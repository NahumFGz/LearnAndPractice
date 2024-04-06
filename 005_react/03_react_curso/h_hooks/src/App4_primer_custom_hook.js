import { useState } from "react";

const useContador = (inicial) => {
  const [contador, setContador] = useState(inicial)
  
  const incrementar = () => {
    setContador(contador + 1)
  }

  return [contador, incrementar]
}


const App = () => {
  const[contador, incrementar] = useContador(0)

  return (
    <div>
      Contador: {contador}
      <div>
        <button onClick={incrementar}>Incrementar</button>
      </div>
    </div>
  );
};

export default App;
