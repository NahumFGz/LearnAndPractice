import logo from './logo.svg';
import './main.css';

const estilo = {
  backgroundColor: '#456',
  color: '#fff',
  padding: '10px 15px',
  margin: '10px 15px',
}

const estilo2 = {
  boxShadow: '0 0 5px rgba(0,0,0,0.1)',
}

// Puedo pasar los parametos como valores
const estiloFn = (bg = '#333') => (
  {
    backgroundColor: bg,
    color: '#fff',
    padding: '10px 15px',
    margin: '10px 15px',
  }
)

// Puedo pasar los parametos como objeto
const estiloFn2 = ({bg = '#222'}) => (
  {
    backgroundColor: bg,
    color: '#fff',
    padding: '10px 15px',
    margin: '10px 15px',
  }
)

const Li = ( { children } ) => {
  return (
    <li className='clase-li'>{children}</li>
  )
}

function App() {
  return (
    <ul className='clase-li'>
      <Li estado='feliz'>Valor de li</Li>
    </ul>
  );
}

export default App;
