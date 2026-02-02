import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import {App} from './App.jsx';

//Instanciamos el root en una variable
const root = createRoot(document.getElementById('root'));


//Renderizamos el root
root.render(
  <App/>
);