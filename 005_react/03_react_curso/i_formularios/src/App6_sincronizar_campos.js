// ! Componentes controlados -> Sincronizar multiples valores
// * Se podrian crear multiples useState
// * Pero la mejor solución es que el valor incial de useState sea un objeto con los 'name'

import { useState } from "react";

function App() {
  const [value, setValue] = useState({ normal: "por defecto", texto: "" });
  const handleChange = (e) => {
    // ? Como hago para actualizar el objeto correspondiente
    console.log(e.target.name);

    // !Opcion 2: Pasar una funcion que reciba el valor (se cambia el nombre para evitar conflicto)
    setValue((state) => ({
      ...state,
      [e.target.name]:e.target.value
    }));
  };
  console.log(value);
  return (
    <div>
      {value.length < 5 ? <span>Longitud minima de 5</span> : null}
      <input
        type="text"
        name="normal"
        value={value.normal}
        onChange={handleChange}
      />
      <textarea name="texto" onChange={handleChange} value={value.texto} />
    </div>
  );
}

export default App;
