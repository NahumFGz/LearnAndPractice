import { useState } from "react";

// !Reglas de los hooks:
// No se llaman en los bucles o condicionales
// Se llaman en el nivel más alto
// Solo se llaman en componentes de react
// Solo se llaman en custom hooks
// *Cuando se crea un custom hook se una useNombreHook

const App = () => {
  // !Orden de ejecución
  // 1. useState recibe el valor incial del contador
  // 2. useState retorna una arreglo del contador y la función q va gatillar
  // 3. Si hay cambios en el contador useState vuelve a renderizar
  const valorInicialContador = 0
  const [contador, setContador] = useState(valorInicialContador);

  return (
    <div>
      Contador: {contador}
      <div>
        <button onClick={() => setContador(contador + 1)}>Incrementar</button>
      </div>
    </div>
  );
};

export default App;
