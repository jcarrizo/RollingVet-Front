import React from 'react';
import ReactDOM from 'react-dom';
import Rutas from './routes/rutas';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../src/index.css"

ReactDOM.render(
  <React.StrictMode>
    <Rutas />
    <ToastContainer />
  </React.StrictMode>,
  document.getElementById('root')
);

