import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegistroUser from "../pages/dashboard/registroUser/registroUser";
import Login from "../pages/login/login";

const Rutas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/usuarios" element={<RegistroUser />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Rutas;
