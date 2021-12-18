import React from 'react'
import '../login/login.css'
import Logo from '../../images/home/vet-icon.png'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="main">
      <Link to="/">
        <img className='logo-login d-flex align-items-center' src={Logo}></img>
      </Link>
      <form className="form1">
        <input className="un " type="text" align="center" placeholder="Correo"></input>
        <input className="pass" type="password" align="center" placeholder="Contraseña"></input>
        <a className="submit">Ingresar</a>
      </form >
    </div>
  )
}

export default Login;