import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const x =  React.createElement('p', null, 'Hello, world!'); // <p>Hello, world!</p>

// Las funciones no se pueden llamar directamente por eso se usa jsx <X />
const X = () => <p>Hola mundo!!!!</p>
root.render(
  <X />
);

// JSX es una sintaxis de extensión de JavaScript. Permite escribir HTML en React.
// JSX produce elementos de React.
// JSX es cambiado por React.createElement() en tiempo de compilación.

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
