import React from 'react'
import '../login/login.css'
import Logo from '../../images/home/vet-icon.png'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const Login = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div className="main">
      <Link to="/">
        <img className='logo-login d-flex align-items-center' src={Logo}></img>
      </Link>
      <form className="form1" onSubmit={handleSubmit(onSubmit)}>
        <input className="un " type="text" align="center" placeholder="Correo" maxLength={15} {...register("correo", { required: true })} required></input>
        <input className="pass" type="password" align="center" placeholder="Contraseña" maxLength={15} {...register("contrasena", { required: true })} required></input>
        <button className="submit" type='submit'>Ingresar</button>
      </form >
    </div>
  )
}

export default Login;