import React from 'react'
import Sidebar from '../../../components/sidebar/sidebar';
import '../estadisticas/estadisticas.css'

const Estadisticas = () => {

  return (
    <div>
      <Sidebar />
      <div className="maindash">
        <div className="topbar">
          <div className="toggle">
            <ion-icon name="menu-outline"></ion-icon>
          </div>
          <div className="user">
            <img src="./img/user.jpeg" alt=""></img>
          </div>
        </div>
        <div className="cardBox">
          <div className="card">
            <div>
              <div className="numbers">1504</div>
              <div className="cardName">Daily Views</div>
            </div>
            <div className="iconBx">
              <ion-icon name="eye-outline"></ion-icon>
            </div>
          </div>
          <div className="card">
            <div>
              <div className="numbers">80</div>
              <div className="cardName">Sales</div>
            </div>
            <div className="iconBx">
              <ion-icon name="cart-outline"></ion-icon>
            </div>
          </div>
          <div className="card">
            <div>
              <div className="numbers">284</div>
              <div className="cardName">Comments</div>
            </div>
            <div className="iconBx">
              <ion-icon name="chatbubbles-outline"></ion-icon>
            </div>
          </div>
          <div className="card">
            <div>
              <div className="numbers">$7842</div>
              <div className="cardName">Earning</div>
            </div>
            <div className="iconBx">
              <ion-icon name="cash-outline"></ion-icon>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Estadisticas;
