import React from 'react'
import '../login/login.css'
import Logo from '../../images/vet-icon.png'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const Login = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data)
    fetch('http://localhost:8000/api/user/login', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.length !== 0) {
          localStorage.setItem('UserName', data[0].userName);
          window.history.pushState({}, undefined, "/usuarios")
          window.location.reload();
        }
        else {
          alert('el email es incorrecto')
        }
      })
      .catch(err => console.error(err))
  };

  return (
    <div className="main">
      <Link to="/">
        <img className='logo-login d-flex align-items-center' src={Logo}></img>
      </Link>
      <form className="form1" onSubmit={handleSubmit(onSubmit)}>
        <input className="un " type="text" align="center" placeholder="Correo" maxLength={30} {...register("email", { required: true })} required></input>
        <input className="pass" type="password" align="center" placeholder="Contraseña" maxLength={30} {...register("password", { required: true })} required></input>
        <button className="submit" type='submit'>Ingresar</button>
      </form >
    </div>
  )
}

export default Login;