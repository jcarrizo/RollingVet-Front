import React from 'react';
import '../navbar/navbar.css';
import icon from "../../images/home/vet-icon.png"
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="body-navbar">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-1 border-bottom body-header">
        <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
          <img src={icon} className="logo"></img>
        </a>
        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li><a href="#" className="nav-link px-2 link-secondary">Home</a></li>
          <li><a href="#" className="nav-link px-2 link-dark">Servicios</a></li>
          <li><a href="#" className="nav-link px-2 link-dark">Contacto</a></li>
        </ul>
        <div className="col-md-3 text-end">
          <Link to="/login">
            <button type="button" className="btn btn-outline-primary">Login</button>
          </Link>
        </div>
      </header >
    </div >
  );
}
export default Navbar;