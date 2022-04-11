import React, { useEffect, useState } from "react";
import MenuMobile from "../../../components/menumobile/menumobile";
import Sidebar from "../../../components/sidebar/sidebar";
import "../user/user.css";

const User = () => {
  const [datosUsuarios, setdatosUsuarios] = useState([]);
  useEffect(() => {
    ObtenerUsuarios();
  }, []);
  const ObtenerUsuarios = () => {
    fetch("http://localhost:8000/api/user/allUsers", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setdatosUsuarios(data);
      })
      .catch((err) => console.error(err));
  };
  return (<div>
    <Sidebar />
    <MenuMobile />
    <div className="maindash">
      <div className="iconPage d-flex align-items-center mt-4 ms-4">
        <ion-icon className="mt-2" name="person-outline"></ion-icon>
        <h1 className="mt-2 ms-2">Usuarios</h1>
      </div>
      <div className="cardBoxtwo">
        <div className="card">
          <h1 className="numbers mb-4">Lista de Usuarios</h1>
          <div className="horizontal-scroll">
            <table className="table ">
              <thead>
                <tr>
                  <th scope="col">Usuario</th>
                  <th scope="col">Email</th>
                </tr>
              </thead>
              <tbody className="">
                {datosUsuarios.map((datos) => {
                  console.log(datos);
                  return (
                    <tr>
                      <td>{datos.userName}</td>
                      <td>{datos.email}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>);
}
export default User;