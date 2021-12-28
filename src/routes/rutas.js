import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Contact from '../pages/contact/contact';
import Estadisticas from '../pages/dashboard/estadisticas/estadisticas';
import Home from "../pages/home/home";
import Login from "../pages/login/login";

const Rutas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
        <Route path="/login" element={<Login />}>
        </Route>
        <Route path="/Contacto" element={<Contact />}>
        </Route>
        <Route path="/estadisticas" element={<Estadisticas />}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
};
export default Rutas;