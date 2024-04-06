// ! Componentes controlados -> Radio button
// * ¿Cómo sincronizar?
// nota: los name: crean el valor del estado

import { useState } from "react";

function App() {
  const [value, setValue] = useState({ normal: "", texto: "", select: "felipe", check: false});
  
  const handleChange = ({target}) => {
    console.log(target.type, target.checked)
    setValue((state) => ({
      ...state,
      [target.name]:target.type === 'checkbox' 
      ? target.checked 
      : target.value
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
        checked={value.check}
      />

      <div onChange={handleChange}>
        <label>Chancho</label>
        <input type="radio" value='Feliz' name='estado'></input> Feliz
        <input type="radio" value='Triste' name='estado'></input> Triste
        <input type="radio" value='Felipe' name='estado'></input> Felipe
      </div>

    </div>
  );
}

export default App;
