import React from 'react'
import '../login/login.css'
import Logo from '../../images/vet-icon.png'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

const Login = () => {

  const { register, handleSubmit } = useForm();
  const onSubmit = dataLogin => {
    // console.log(data)
    fetch('http://localhost:8000/api/user/login', {
      method: 'POST',
      body: JSON.stringify(dataLogin),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        // console.log(data[0])
        if (data.length !== 0) {
          if (data[0].password == dataLogin.password) {
            localStorage.setItem('UserName', data[0].userName);
            window.history.pushState({}, undefined, "/user")
            window.location.reload();
          }
          else {
            toast.error("La contraseña ingresada es incorrecta")
          }
        }
        else {
          toast.error("El correo ingresado es incorrecto")
        }
      })
      .catch(err => console.error(err))
  };

  const Redireccion = () => {
    window.history.pushState({}, undefined, "/register");
  }

  return (
    <div className="main">
      <Link to="/">
        <img className='logo-login d-flex align-items-center' src={Logo}></img>
      </Link>
      <form className="form1" onSubmit={handleSubmit(onSubmit)}>
        <input className="un " type="email" align="center" placeholder="Correo" maxLength={30} {...register("email", { required: true })} required></input>
        <input className="pass" type="password" align="center" placeholder="Contraseña" maxLength={30} {...register("password", { required: true })} required></input>
        <button className="submit" type='submit'>Ingresar</button>
      </form >
      <div className="d-flex justify-content-center pt-4">
        <a className='textLink' href='' onClick={() => { Redireccion() }}>¿No posees una cuenta? Ingresa aquí</a>
      </div>

    </div>
  )
}
export default Login;