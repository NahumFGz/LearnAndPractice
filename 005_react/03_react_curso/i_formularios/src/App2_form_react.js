// !Componentes no controlados -> Forma de REACT
import { useRef } from "react";

function App() {
  const input = useRef()
  const file = useRef()
  const submit = () => {
    console.log(input.current.value)
    console.log(file.current.files[0])

    // !Se crea un form con cada valor que se va enviar a un endpoint
    const form = new FormData()
    form.append('archivo', file.current.files[0])
    form.append('nombre', input.current.value)
    fetch('/lala', {method:'POST', body:form})
  }
  return (
    <div>
      <div>
        <span>lalala</span>
        <br />
        <input type="text" name="campo" ref={input}/>
        <input type="file" ref={file}/>
      </div>
      <input type="submit" value="enviar" onClick={submit} />
    </div>
  );
}

export default App;
