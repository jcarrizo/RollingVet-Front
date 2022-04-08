import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Sidebar from "../../../components/sidebar/sidebar";
import "../registroUser/registroUser.css";
import "../patients/patients.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import MenuMobile from "../../../components/menumobile/menumobile";

const Patients = () => {
  const { register, handleSubmit } = useForm();
  const [datosPacientes, setdatosPacientes] = useState([]);
  const [PacienteSeleccion, setPacienteSeleccion] = useState([]);
  const [EditarBool, SetEditarBool] = useState([]);
  const [startDate, setStartDate] = useState(new Date());


  useEffect(() => {
    ObtenerPacientes();
    SetEditarBool(false)
  }, []);

  const onSubmit = (data) => {
    data.dateTime = new Date(startDate);
    console.log(EditarBool)
    if (EditarBool == false) {
      // console.log("Agregando nuevo")
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
          document.getElementById("ButtonGuardar").disabled = true;
          setTimeout(() => {
            window.location.reload();
          }, 1500);
        })
        .catch((err) => console.error(err));
      SetEditarBool(false)

    } else {
      // console.log(EditarBool)
      data._id = PacienteSeleccion._id;
      fetch("http://localhost:8000/api/patients/editPatients", {
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
          document.getElementById("ButtonGuardar").disabled = true;
          setTimeout(() => {
            window.location.reload();
          }, 1500);
        })
        .catch((err) => console.error(err));
    }
    // console.log(data)
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


  const EditarPaciente = (data) => {
    SetEditarBool(true)
    document.getElementById("TitlePatient").innerHTML = "Editar Paciente";
    document.getElementById("floatingInputPatient").value = data.patientAnimalName;
    document.getElementById("floatingInputOwner").value = data.ownerName;
    document.getElementById("floatingInputSpecies").value = data.species;
    document.getElementById("floatingInputRace").value = data.race;
    document.getElementById("floatingTextarea").value = data.consultation;
    let fecha = Date.parse(data.dateTime)

    setStartDate(fecha)
    // Flag = true;
    let hola = document.getElementById("DatePicker").value

    // console.log(hola)
  }



  const EliminarPaciente = (id) => {
    let data = {
      _id: id,
    };
    if (window.confirm("¿Está seguro que desea eliminar el paciente?")) {
      fetch("http://localhost:8000/api/patients/deletePatients", {
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
          window.location.reload();
        })
        .catch((err) => console.error(err));
    }
  };

  const Limpiar = () => {
    document.getElementById("TitlePatient").innerHTML = "Nuevo Paciente";
    setStartDate(Date.now());
    SetEditarBool(false)
  }

  return (
    <div>
      <Sidebar />
      <MenuMobile />
      <div className="maindash">
        <div className="iconPage d-flex align-items-center mt-4 ms-4">
          <ion-icon className="mt-2" name="paw-outline"></ion-icon>
          <h1 className="mt-2 ms-2">Pacientes</h1>
        </div>
        <div className="cardBoxtwo">

          {/*  Nuevo Paciente */}
          <div className="card">
            <h1 className="numbers mb-4" id="TitlePatient">Nuevo Paciente</h1>
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
                <DatePicker id="DatePicker" showTimeSelect selected={startDate} dateFormat="dd/MM/yyyy h:mm aa" onChange={(date) => { setStartDate(date); console.log(date) }} />
              </div>

              <button type="submit" id="ButtonGuardar" className="btn btn-primary me-3">
                Guardar
              </button>
              <button type="reset" id="ButtonReset" className="btn btn-warning" onClick={() => { Limpiar() }}>
                Cancelar
              </button>

            </form>
          </div>

          {/*  Lista de los Turnos */}
          <div className="card">
            <h1 className="numbers mb-4">Lista de los Turnos</h1>
            <div className="horizontal-scroll">
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
                    let fecha = new Date(datos.dateTime);
                    return (
                      <tr className="pointerHand" onClick={() => { setPacienteSeleccion(datos) }}>
                        <td>{datos.patientAnimalName}</td>
                        <td>{datos.ownerName}</td>
                        <td>{fecha.toLocaleString('en-GB')}</td>
                        <div className="d-flex align-items-center">
                          <button type="button" className="btn btn-warning me-2" onClick={() => { EditarPaciente(datos); }}>Editar</button>
                          <button type="button" className="btn btn-danger" onClick={() => {
                            EliminarPaciente(datos._id);
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

          {/*  Usuario Seleccionado */}
          <div className="card">
            <div>
              <h1 className="numbers mb-4">Perfil de Usuario Seleccionado</h1>
              <div className="row gutters-sm">
                <div className="col-md-8">
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Paciente</h6>
                    </div>
                    <div className="col-sm-9 text-secondary" id="TextPatientAnimalName" >
                      {PacienteSeleccion.patientAnimalName}
                    </div>
                  </div>
                  <hr className="mb-4"></hr>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Dueño</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {PacienteSeleccion.ownerName}
                    </div>
                  </div>
                  <hr className="mb-4"></hr>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Especie</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {PacienteSeleccion.species}
                    </div>
                  </div>
                  <hr className="mb-4"></hr>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Raza</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {PacienteSeleccion.race}
                    </div>
                  </div>
                  <hr className="mb-4"></hr>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Fecha Turno</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {

                        new Date(PacienteSeleccion.dateTime).toLocaleString('en-GB')}
                    </div>
                  </div>
                  <hr className="mb-4"></hr>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Razon de la Consulta</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {PacienteSeleccion.consultation}
                    </div>
                  </div>
                  <hr className="mb-4"></hr>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};
export default Patients;
