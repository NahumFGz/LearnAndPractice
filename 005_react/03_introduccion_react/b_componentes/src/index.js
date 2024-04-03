import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const X = () => (
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    <li>Item 4</li>
  </ul>
);

// ! Estandarizando el codigo
// Children es un prop especial que permite pasar elementos hijos a un componente
const Li = ({ children }) => <li>{ children }</li>;
// Puedo pasar props adicionales
const Li2 = ({ children, estado }) => <li>{children} {estado}</li>;
// Puedo pasar props adicionales y usarlos para hacer logica
const Li3 = ({ children, estado, casa, edad }) => {
  console.log(casa, edad);
  return <li>{children} estoy {estado}</li>
}
const Y = () => (
  <ul>
    <Li>Item 1</Li>
    <Li2 estado={'Estado insertado'}>Item 2</Li2>
    <Li3
      estado={'Estado insertado'}
      casa={'Casa insertada'}
      edad={25}
    
    >Item 3</Li3>
    <li>Item 4</li>
  </ul>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <X />
  <Y />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
