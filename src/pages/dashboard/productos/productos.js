import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Sidebar from "../../../components/sidebar/sidebar";
import "../productos/productos.css";

const Productos = () => {
  const { register, handleSubmit } = useForm();
  const [datosUsuarios, setdatosUsuarios] = useState([]);

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
        <h1 className="mt-4 ms-4">Productos y Categorias</h1>
        <div className="cardBoxtwo">
          <div className="card">
            <div>
              <div className="numbers mb-4">Nueva Categoria</div>
              <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-3">
                    <label htmlFor="InputNameUsuario" className="form-label">
                      Nombre de la Categoria
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="InputNameUsuario"
                      maxLength={30}
                      {...register("categoryName", { required: true })}
                      required
                    ></input>
                  </div>
                  <div className="mb-3">
                    <label
                      for="exampleFormControlTextarea1"
                      className="form-label"
                    >
                      Descripción
                    </label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                    ></textarea>
                  </div>
                  <label className="form-label">Estado</label>
                  <select
                    className="form-select mb-4"
                    aria-label="Default select example"
                    {...register("estado", { required: true })}
                    required
                  >
                    <option value="Vendedor">Vendedor</option>
                    <option value="Administrador">Administrador</option>
                  </select>
                  <button type="submit" className="btn btn-primary">
                    Guardar
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="card">
            <div>
              <h1 className="numbers mb-4">Lista de Categorias</h1>
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
                        <button
                          type="button"
                          className="btn btn-outline-danger mb-3"
                          onClick={() => {
                            EliminarUsuario(datos._id);
                          }}
                        >
                          Eliminar
                        </button>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div className="card">
            <div>
              <div className="numbers mb-4">Nuevo Producto</div>
              <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-3">
                    <label htmlFor="InputNameUsuario" className="form-label">
                      Nombre de el Producto
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="InputNameUsuario"
                      maxLength={30}
                      {...register("categoryName", { required: true })}
                      required
                    ></input>
                  </div>
                  <div>
                    <label className="form-label">Categoria</label>
                    <select
                      className="form-select mb-4"
                      aria-label="Default select example"
                      {...register("estado", { required: true })}
                      required
                    >
                      <option value="Vendedor">Vendedor</option>
                      <option value="Administrador">Administrador</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="InputNameUsuario" className="form-label">
                      Codigo
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="InputNameUsuario"
                      maxLength={30}
                      {...register("categoryName", { required: true })}
                      required
                    ></input>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="InputNameUsuario" className="form-label">
                      Precio Venta
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="InputNameUsuario"
                      min={0}
                      {...register("categoryName", { required: true })}
                      required
                    ></input>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="InputNameUsuario" className="form-label">
                      Precio Compra
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="InputNameUsuario"
                      min={0}
                      {...register("categoryName", { required: true })}
                      required
                    ></input>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="InputNameUsuario" className="form-label">
                      Stock
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="InputNameUsuario"
                      min={0}
                      {...register("categoryName", { required: true })}
                      required
                    ></input>
                  </div>
                  <div className="mb-3">
                    <label
                      for="exampleFormControlTextarea1"
                      className="form-label"
                    >
                      Descripción
                    </label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                    ></textarea>
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
              <h1 className="numbers mb-4">Lista de Productos</h1>
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
                        <button
                          type="button"
                          className="btn btn-outline-danger mb-3"
                          onClick={() => {
                            EliminarUsuario(datos._id);
                          }}
                        >
                          Eliminar
                        </button>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div >
    </div >
  );
};
export default Productos;
