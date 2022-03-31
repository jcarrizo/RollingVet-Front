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
    window.history.pushState({}, undefined, "/");
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
