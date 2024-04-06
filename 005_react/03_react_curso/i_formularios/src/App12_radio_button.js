// ! Componentes controlados -> Radio button
// * ¿Cómo sincronizar?
// nota: los name: crean el valor del estado
// ! Otra forma de sincronizar

import { useState } from "react";

function App() {
  const [value, setValue] = useState({ normal: "", texto: "", select: "felipe", check: false, estado: "Feliz"});
  
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

      <div>
        <label>Chancho</label>
        <input 
          onChange={handleChange} 
          type="radio" 
          value='Feliz' 
          name='estado' 
          checked={value.estado === 'Feliz'}
        /> Feliz
        <input 
          onChange={handleChange} 
          type="radio" 
          value='Triste' 
          name='estado'
          checked={value.estado === 'Triste'}
        /> Triste
        <input 
          onChange={handleChange} 
          type="radio" 
          value='Felipe' 
          name='estado'
          checked={value.estado === 'Felipe'}
        /> Felipe
      </div>

    </div>
  );
}

export default App;
