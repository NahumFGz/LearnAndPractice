// ! Componentes controlados -> Etiqueta Checkbox
// * ¿Cómo sincronizar?

import { useState } from "react";

function App() {
  const [value, setValue] = useState({ normal: "por defecto", texto: "", select: "felipe", check: false});
  const handleChange = (e) => {
    console.log(e.target.type, e.target.checked)
    // ! Para check puede tener un error al llamar
    setValue((state) => ({
      ...state,
      [e.target.name]:e.target.type === 'checkbox' ? e.target.checked : e.target.value
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

      <select value={value.select} name='select' onChange={handleChange}>
        <option value=''>--Seleccione--</option>
        <option value='chanchofeliz'>--Chancho feliz--</option>
        <option value='chanchitofeliz'>--Chanchito feliz--</option>
        <option value='chanchitotriste'>--Chanchito triste--</option>
        <option value='felipe'>--Felipe--</option>
      </select>

      <input
        type="checkbox"
        name="check"
        onChange={handleChange}
        //!Para sincronizar aqui no se usa 'value', se usa
        checked={value.check}

      />
    </div>
  );
}

export default App;
