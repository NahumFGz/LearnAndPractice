// ! Componentes controlados
// El campo siempre debe saber el valor
// * Se logra tener los datos sincronizados de la UI y guardados en un estado local
import { useState } from 'react'


function App() {
  const [value, setValue] = useState('')  

  const handleChange = (e) => {
    setValue(e.target.value)
  } 
  console.log(value)
  return (
    <div>
      {value.length < 5 ? <span>Longitud minima de 5</span>: null}
      <input type="text" name="normal" value={value} onChange={handleChange}/>
    </div>
  )
}

export default App