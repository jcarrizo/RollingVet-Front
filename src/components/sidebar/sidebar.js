import React from 'react'
import '../sidebar/sidebar.css'


const Sidebar = () => {

  return (
    <div className="navigation">
      <ul>
        <li>
          <a href="#">
            <span className="icon">
              <ion-icon name="person-circle-outline"></ion-icon>
            </span>
            <span className="title">User Name</span>
          </a>
        </li>
        <li className='active'>
          <a href="#">
            <span className="icon">
              <ion-icon name="bar-chart-outline"></ion-icon>
            </span>
            <span className="title">Estadisticas</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="icon">
              <ion-icon name="person-add-outline"></ion-icon>
            </span>
            <span className="title">Usuarios</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="icon">
              <ion-icon name="bag-add-outline"></ion-icon>
            </span>
            <span className="title">Compras</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="icon">
              <ion-icon name="cash-outline"></ion-icon>
            </span>
            <span className="title">Ventas</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="icon">
              <ion-icon name="people-outline"></ion-icon>
            </span>
            <span className="title">Clientes</span>
          </a>
        </li>
        <li>
          <a href="#" className='mt-5'>
            <span className="icon">
              <ion-icon name="log-out-outline"></ion-icon>
            </span>
            <span className="title">Sign Out</span>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar;