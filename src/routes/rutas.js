import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Patients from "../pages/dashboard/patients/patients";
import User from "../pages/dashboard/user/user";
import Login from "../pages/login/login";
import Register from "../pages/register/register.js";

const Rutas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/user" element={<User />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/patients" element={<Patients />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Rutas;
