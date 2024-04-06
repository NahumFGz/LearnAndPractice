import { useState, useEffect } from "react";

const useContador = (inicial) => {
  const [contador, setContador] = useState(inicial)
  
  const incrementar = () => {
    setContador(contador + 1)
  }

  return [contador, incrementar]
}


const App = () => {
  const[contador, incrementar] = useContador(0)
  
  //!Descripción de useEffect
  // 1. recibe 2 argumentos, el primero una función con la lógica que se va ejecutar
  // el segundo argumento [] son las dependencias que se necesitan para usar
  // Si no se ponen las dependencias el hook se va ejecutar en cada cambio
  // * Siempre poner las dependencias para evitar errores
  // ? Para que se ejecute siempre que se renderize el componente, no poner []
  // ? Para que se ejecute solo la primera vez que se renderiza el componente, dejar vacio[]
  // ? Para que se ejecute por cada cambio se tiene que poner [dependencias]
  /*
  useEffect(() => {
    console.log('soy un efecto')
  }, [])
  */
  useEffect(() => {
    document.title = contador
  }, [contador])

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
