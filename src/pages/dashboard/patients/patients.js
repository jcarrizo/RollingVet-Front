import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Sidebar from "../../../components/sidebar/sidebar";
import "../registroUser/registroUser.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Patients = () => {
  const { register, handleSubmit } = useForm();
  const [datosUsuarios, setdatosUsuarios] = useState([]);
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    ObtenerUsuarios();
  }, []);

  const onSubmit = (data) => {
    fetch("http://localhost:8000/api/user", {
      method: "POST",
      body: JSON.stringify(data),
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
        ObtenerUsuarios();
      })
      .catch((err) => console.error(err));
  };

  const ObtenerUsuarios = () => {
    fetch("http://localhost:8000/api/user/allUsers", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setdatosUsuarios(data);
      })
      .catch((err) => console.error(err));
  };

  const EliminarUsuario = (id) => {
    console.log(id);
    let data = {
      id: id,
    };

    if (window.confirm("¿Está seguro que desea eliminar el paciente?")) {
      fetch("http://localhost:8000/api/user/deleteUser", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          toast("Se elimino el perfil correctamente", {
            type: "success",
            autoClose: 3000,
          });
          ObtenerUsuarios();
        })
        .catch((err) => console.error(err));
    }
  };


  return (
    <div>
      <Sidebar />
      <div className="maindash">
        <div className="iconPage d-flex align-items-center mt-4 ms-4">
          <ion-icon className="mt-2" name="paw-outline"></ion-icon>
          <h1 className="mt-2 ms-2">Pacientes</h1>
        </div>
        <div className="cardBoxtwo">
          <div className="card">
            <div>
              <div className="numbers mb-4">Nuevo Paciente</div>
              <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-3">
                    <label htmlFor="InputNameUsuario" className="form-label">
                      Nombre del Paciente Animal
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="InputNameUsuario"
                      maxLength={30}
                      {...register("userName", { required: true })}
                      required
                    ></input>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="InputNameUsuario" className="form-label">
                      Nombre del Dueño
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="InputNameUsuario"
                      maxLength={30}
                      {...register("userName", { required: true })}
                      required
                    ></input>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Especie
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      maxLength={30}
                      {...register("email", { required: true })}
                      required
                    ></input>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="InputPassword1" className="form-label">
                      Raza
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="InputPassword1"
                      maxLength={30}
                      {...register("password", { required: true })}
                      required
                    ></input>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="InputPassword1" className="form-label">
                      Fecha del Turno
                    </label>
                    <DatePicker showTimeSelect selected={startDate} onChange={(date) => setStartDate(date)} />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Guardar
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="card">
            <div>
              <h1 className="numbers mb-4">Lista de los Turnos</h1>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Usuario</th>
                    <th scope="col">Email</th>
                    <th scope="col">Rango</th>
                  </tr>
                </thead>
                <tbody className="">
                  {datosUsuarios.map((datos) => {
                    console.log(datos);
                    return (
                      <tr>
                        <td>{datos.userName}</td>
                        <td>{datos.email}</td>
                        <td>{datos.typeProfile}</td>
                        <div className="d-flex align-items-center">
                          <button type="button" class="btn btn-warning me-2">Editar</button>
                          <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => {
                              EliminarUsuario(datos._id);
                            }}
                          >
                            Eliminar
                          </button>

                        </div>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Patients;
