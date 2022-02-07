import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import "animate.css";

const initialForm = {
  numero: "",
  tipo: "",
  nombre: "",
  licencia: "",
  dni: "",
  telefono: "",
  direccion: "",
  email: "",
  pago: "",
  id: null,
};

const CrudForm = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
  const [form, setform] = useState(initialForm);
  let history = useHistory();

  useEffect(() => {
    if (dataToEdit) {
      setform(dataToEdit);
    } else {
      setform(initialForm);
    }
  }, [dataToEdit]);

  const handelChange = (e) => {
    setform({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    if (
      !form.nombre ||
      !form.numero ||
      !form.tipo ||
      !form.licencia ||
      !form.direccion ||
      !form.dni
    ) {
      // Swal.fire({
      //   icon: "error",
      //   title: "Datos incompletos...",
      //   text: "'Numero', 'Tipo', 'Nombre', 'Licencia', 'Dni' y 'Dirección' son obligatorios",
      // });
      Swal.fire({
        icon: "error",
        title: "Datos incompletos...",
        confirmButtonColor: "#3085d6",
        text: "'Numero', 'Tipo', 'Nombre', 'Licencia', 'Dni' y 'Dirección' son obligatorios",
        showClass: {
          popup: "animate__animated animate__bounceInDown",
        },
        hideClass: {
          popup: "animate__animated animate__bounceOutRight",
        },
      });
      return;
    }
    if (form.id === null) {
      createData(form);
    } else {
      updateData(form);
    }
    handelReset();
  };
  const handelReset = (e) => {
    setform(initialForm);
    setDataToEdit(null);
    history.push("/");
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h3>{dataToEdit ? "Editar Socio" : "Agregar Socio"}</h3>
            <form onSubmit={handelSubmit}>
              <div className="form-group">
                <label>Número de Socio</label>
                <input
                  className="form-control"
                  type="number"
                  name="numero"
                  placeholder="Numero"
                  onChange={handelChange}
                  value={form.numero}
                />
              </div>
              <div className="form-group">
                <label>Tipo de Socio</label>
                <input
                  className="form-control"
                  type="text"
                  name="tipo"
                  placeholder="Tipo"
                  onChange={handelChange}
                  value={form.tipo}
                />
              </div>
              <div className="form-group">
                <label>Nombre del Socio</label>
                <input
                  className="form-control"
                  type="text"
                  name="nombre"
                  placeholder="Nombre"
                  onChange={handelChange}
                  value={form.nombre}
                />
              </div>
              <div className="form-group">
                <label>Licencia del Socio</label>
                <input
                  className="form-control"
                  type="text"
                  name="licencia"
                  placeholder="Licencia"
                  onChange={handelChange}
                  value={form.licencia}
                />
              </div>
              <div className="form-group">
                <label>DNI del Socio</label>
                <input
                  className="form-control"
                  type="number"
                  name="dni"
                  placeholder="DNI"
                  onChange={handelChange}
                  value={form.dni}
                />
              </div>
              <div className="form-group">
                <label>Dirección del Socio</label>
                <input
                  className="form-control"
                  type="text"
                  name="direccion"
                  placeholder="Dirección"
                  onChange={handelChange}
                  value={form.direccion}
                />
              </div>
              <div className="form-group">
                <label>Telefono del Socio</label>
                <input
                  className="form-control"
                  type="number"
                  name="telefono"
                  placeholder="Telefono"
                  onChange={handelChange}
                  value={form.telefono}
                />
              </div>

              <div className="form-group">
                <label>Email del Socio</label>
                <input
                  className="form-control"
                  type="text"
                  name="email"
                  placeholder="Email"
                  onChange={handelChange}
                  value={form.email}
                />
              </div>
              <div className="form-group">
                <label>Cuota</label>
                <input
                  className="form-control"
                  type="date"
                  name="pago"
                  placeholder="Cuota"
                  onChange={handelChange}
                  value={form.pago}
                />
              </div>
              <input
                className="btn btn-outline-primary font-weight-bold text-uppercase d-block w-100"
                type="submit"
                value="Enviar"
              />
              {"  "}
              <input
                className="btn btn-outline-danger font-weight-bold text-uppercase d-block w-100"
                type="reset"
                value="Limpiar"
                onClick={handelReset}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrudForm;
