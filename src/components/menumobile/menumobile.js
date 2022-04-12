import React from "react";
import { Link } from "react-router-dom";
import LogoR from '../../images/vet-icon-remove.png'
import "../sidebar/sidebar.css";
const MenuMobile = () => {
  const LogOut = () => {
    localStorage.setItem("UserName", "");
    window.history.pushState({}, undefined, "/");
    window.location.reload();
  };


  return (
    <div className="menumobile">
      <div className="collapse" id="navbarToggleExternalContent">
        <div className="bg-primary p-4">
          <h5 className="text-white h4">Menu</h5>
          <Link to="/user">
            <a className="pointerSidebar d-flex align-items-center">
              <span className="icon iconMobile">
                <ion-icon name="person-outline"></ion-icon>
              </span>
              <span className="title titlemobile ms-2">Usuarios</span>
            </a>
          </Link>
          <Link to="/patients">
            <a className="pointerSidebar d-flex align-items-center">
              <span className="icon iconMobile">
                <ion-icon name="paw-outline"></ion-icon>
              </span>
              <span className="title titlemobile ms-2">Pacientes</span>
            </a>
          </Link>
          <a className="pointerSidebar d-flex align-items-center" onClick={() => {
            LogOut();
          }}>
            <span className="icon iconMobile">
              <ion-icon name="log-out-outline"></ion-icon>
            </span>
            <span className="title titlemobile ms-2 ">Salir</span>
          </a>
        </div>
      </div>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <img className="ImgLogoMobile" src={LogoR}></img>
        </div>
      </nav>
    </div>)
};
export default MenuMobile;
