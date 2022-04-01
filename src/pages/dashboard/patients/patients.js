import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Sidebar from "../../../components/sidebar/sidebar";
import "../registroUser/registroUser.css";
import "../patients/patients.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Patients = () => {
  const { register, handleSubmit } = useForm();
  const [datosPacientes, setdatosPacientes] = useState([]);
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    ObtenerPacientes();
  }, []);

  const onSubmit = (data) => {
    data.dateTime = startDate.toLocaleString();
    console.log(data)
    fetch("http://localhost:8000/api/patients", {
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
        ObtenerPacientes();
      })
      .catch((err) => console.error(err));
  };

  const ObtenerPacientes = () => {
    fetch("http://localhost:8000/api/patients/allPatients", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setdatosPacientes(data);
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
          ObtenerPacientes();
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
                  <div className="form-floating mb-3">
                    <input type="text" className="form-control" placeholder="Paciente" id="floatingInputPatient" maxLength={30} {...register("patientAnimalName", { required: true })}
                      required></input>
                    <label for="floatingInputPatient">Nombre del Paciente Animal</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="text" className="form-control" placeholder="Dueño" id="floatingInputOwner" maxLength={30} {...register("ownerName", { required: true })}
                      required></input>
                    <label for="floatingInputOwner">Nombre del Dueño</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="text" className="form-control" placeholder="Especie" id="floatingInputSpecies" maxLength={30} {...register("species", { required: true })}
                      required></input>
                    <label for="floatingInputSpecies">Especie</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="text" className="form-control" placeholder="Especie" id="floatingInputRace" maxLength={30} {...register("race", { required: true })}
                      required></input>
                    <label for="floatingInputRace">Raza</label>
                  </div>
                  <div className="form-floating mb-3">
                    <textarea className="form-control TextArea" placeholder="Leave a comment here" id="floatingTextarea" rows="3" {...register("consultation", { required: true })}></textarea>
                    <label for="floatingTextarea">Causa de la visita</label>
                  </div>
                  <div className="mb-4">
                    <label className="form-label">
                      Fecha del Turno
                    </label>
                    <DatePicker showTimeSelect selected={startDate} dateFormat="Pp" onChange={(date) => { setStartDate(date) }} />
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
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">Paciente</th>
                    <th scope="col">Dueño</th>
                    <th scope="col">Fecha Turno</th>
                  </tr>
                </thead>
                <tbody className="table-hover">
                  {datosPacientes.map((datos) => {
                    // console.log(datos);
                    return (
                      <tr>
                        <td>{datos.patientAnimalName}</td>
                        <td>{datos.ownerName}</td>
                        <td>{datos.dateTime}</td>
                        <div className="d-flex align-items-center">
                          <button type="button" className="btn btn-warning me-2">Editar</button>
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
          <div className="card">
            <div>
              <h1 className="numbers mb-4">Perfil de Usuario Seleccionado</h1>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Patients;
