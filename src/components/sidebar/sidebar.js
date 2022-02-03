import React from "react";
import { Link } from "react-router-dom";
import "../sidebar/sidebar.css";

const Sidebar = () => {
  let classActiveMenu = "";

  let userName = localStorage.getItem("UserName");
  if (userName == "" || userName == undefined) {
    userName = "User Name";
  }

  if (false) {
    classActiveMenu += "active";
  }

  const LogOut = () => {
    localStorage.setItem("UserName", "");
    window.history.pushState({}, undefined, "/login");
    window.location.reload();
  };

  return (
    <div className="navigation">
      <ul>
        <li>
          <a className="pointerSidebar">
            <span className="icon">
              <ion-icon name="person-circle-outline"></ion-icon>
            </span>
            {<span className="title">{userName}</span>}
          </a>
        </li>
        <li className={classActiveMenu}>
          <Link to="/estadisticas">
            <a className="pointerSidebar">
              <span className="icon">
                <ion-icon name="bar-chart-outline"></ion-icon>
              </span>
              <span className="title">Estadisticas</span>
            </a>
          </Link>
        </li>
        <li className="usuariosLi">
          <Link to="/usuarios">
            <a className="pointerSidebar">
              <span className="icon">
                <ion-icon name="person-add-outline"></ion-icon>
              </span>
              <span className="title">Usuarios</span>
            </a>
          </Link>
        </li>
        <li>
          <Link to="/productos">
            <a className="pointerSidebar">
              <span className="icon">
                <ion-icon name="fast-food-outline"></ion-icon>
              </span>
              <span className="title">Productos</span>
            </a>
          </Link>
        </li>
        <li>
          <a className="pointerSidebar">
            <span className="icon">
              <ion-icon name="cash-outline"></ion-icon>
            </span>
            <span className="title">Ventas</span>
          </a>
        </li>
        <li>
          <a className="pointerSidebar">
            <span className="icon">
              <ion-icon name="people-outline"></ion-icon>
            </span>
            <span className="title">Clientes</span>
          </a>
        </li>
        <li
          onClick={() => {
            LogOut();
          }}
        >
          <a className="mt-5 pointerSidebar">
            <span className="icon">
              <ion-icon name="log-out-outline"></ion-icon>
            </span>
            <span className="title">Sign Out</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
