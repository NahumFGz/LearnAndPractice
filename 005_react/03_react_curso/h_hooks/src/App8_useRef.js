// !useRef
import { useRef } from "react";


const App = () => {
    const ref = useRef()
    const click = () => {
        // !Al asignar, permite poder acceder al DOM
        console.log(ref.current)
        console.log(ref.current.clientHeight)
    }

    return (
        <div onClick={click} ref={ref}>lala</div>
    )
};

export default App;
