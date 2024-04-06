// ! Todas las funciones en React funcionana como funciones puras
// Una función pura nunca cambia su valor de retorno

// * Las funciones impuras son las que no retornan siempre lo mismo
// otro tipo de función impura puden ser llamadas a APIs o BD xq puenden cambiar lo 
// que nos retornan
const impura = () => new Date().toLocaleDateString()
console.log(impura)


const MiComponente = ({ miProp }) => {
  //! Se puede hacer destrc aqui o en los paremetros
  //const {miProp} = props

  return <div>Nombre: {miProp}</div>;
};

const App = () => {
  return <MiComponente miProp={"Chanchito feliz"} />;
};

export default App;
