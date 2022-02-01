import React from 'react'
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Sidebar from '../../../components/sidebar/sidebar';
import '../registroUser/registroUser.css'

const RegistroUser = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data)
    fetch('http://localhost:8000/api/user', {
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
        toast("Se cargo el perfil correctamente", {
          type: "success",
          autoClose: 3000,
        });
      })
      .catch(err => console.error(err))
  };
  return (
    <div>
      <Sidebar />
      <div className="maindash">
        <h1 className='mt-4 ms-4'>Usuarios</h1>
        <div className="cardBoxtwo">
          <div className="card">
            <div>
              <div className="numbers">Crear Nuevo Usuario</div>
              <div>
                <form onSubmit={handleSubmit(onSubmit)} >
                  <div className="mb-3">
                    <label htmlFor="InputNameUsuario" className="form-label">Nombre de Usuario</label>
                    <input type="text" className="form-control" id="InputNameUsuario" maxLength={30} {...register("userName", { required: true })} required></input>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" maxLength={30} {...register("email", { required: true })} required></input>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="InputPassword1" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="InputPassword1" maxLength={30} {...register("password", { required: true })} required></input>
                  </div>
                  <label className="form-label">Tipo de Perfil</label>
                  <select className="form-select mb-4" aria-label="Default select example" {...register("typeProfile", { required: true })} required>
                    <option value="Vendedor">Vendedor</option>
                    <option value="Administrador">Administrador</option>
                  </select>
                  <button type="submit" className="btn btn-primary">Guardar</button>
                </form>
              </div>

            </div>


          </div>
          <div className="card">
            <div>
              <h1 className="numbers mb-4">Lista de Usuarios</h1>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td >Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="card">
            <div>
              <h1 className="numbers mb-4">Perfil de Usuario Seleccionado</h1>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td >Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
export default RegistroUser;