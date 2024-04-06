// ! Desuscribirse de useEffect

import { useState, useEffect } from "react";

const useContador = (inicial) => {
  const [contador, setContador] = useState(inicial)
  
  const incrementar = () => {
    setContador(contador + 1)
  }

  return [contador, incrementar]
}

const Interval = ({ contador }) => {
  useEffect(()=>{
    const i = setInterval(() => console.log(contador),1000)

    //!Retorna una funcion que permite dessuscribir el efecto
    return () => clearInterval(i)
  }, [contador])
}

const App = () => {
  const[contador, incrementar] = useContador(0)

  useEffect(() => {
    document.title = contador
  }, [contador])

  return (
    <div>
      Contador: {contador}
      <div>
        <button onClick={incrementar}>Incrementar</button>
        <Interval contador={contador}/>
      </div>
    </div>
  );
};

export default App;
