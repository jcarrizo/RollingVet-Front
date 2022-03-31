import React from 'react'
import '../register/register.css'
import Logo from '../../images/vet-icon.png'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

const Register = () => {

  const { register, handleSubmit } = useForm();
  const onSubmit = (dataRegister) => {

    if (dataRegister.password === dataRegister.confirmPassword) {

      fetch("http://localhost:8000/api/user", {
        method: "POST",
        body: JSON.stringify(dataRegister),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          toast("Se cargo el perfil correctamente", {
            type: "success",
            autoClose: 3000,
          });
          document.getElementById("buttonRegister").disabled = true;

          setTimeout(() => {
            window.history.pushState({}, undefined, "/")
            window.location.reload();
          }, 1500);

        })
        .catch((err) => console.error(err));
    }
    else {
      toast("Las contraseñas no coinciden", {
        type: "error",
        autoClose: 3000,
      });
    }

  };
  const Redireccion = () => {
    window.history.pushState({}, undefined, "/");
  }

  return (
    <div className="mainRegister">
      <Link to="/">
        <img className='logo-login d-flex align-items-center' src={Logo}></img>
      </Link>
      <form className="form1" onSubmit={handleSubmit(onSubmit)}>
        <input className="un " type="text" align="center" placeholder="Nombre de Usuario" maxLength={30} {...register("userName", { required: true })} required></input>
        <input className="un " type="email" align="center" placeholder="Correo" maxLength={30} {...register("email", { required: true })} required></input>
        <input className="pass" type="password" align="center" placeholder="Contraseña" maxLength={30} {...register("password", { required: true })} required></input>
        <input className="pass" type="password" align="center" placeholder="Repetir Contraseña" maxLength={30} {...register("confirmPassword", { required: true })} required></input>
        <button className="submit" id='buttonRegister' type='submit' >Registrar</button>
      </form >
      <div className="d-flex justify-content-center pt-4">
        <a className='textLink' href='' onClick={() => { Redireccion() }}>¿Ya tienes una cuenta? Ingresa aquí</a>
      </div>
    </div>
  )
}
export default Register;