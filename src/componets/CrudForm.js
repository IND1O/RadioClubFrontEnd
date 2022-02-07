import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

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

const validateForm = (form) => {
  let errors = [];
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/; //Solo letras y espacios en blancos
  //let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexComments = /^.{1,10}$/; //solo acepta 10 caracteres
  let regexMayu = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/; //Primera letra en mayúscula

  if (!form.numero.trim()) {
    errors.numero = "El 'número de socio' es obligatorio";
  }

  if (!form.tipo.trim()) {
    errors.tipo = "El 'tipo de socio' es obligatorio";
  } else if (!regexName.test(form.tipo.trim())) {
    errors.tipo = "El 'tipo de socio' solo acepta letras";
  } else if (!regexMayu.test(form.tipo.trim())) {
    errors.tipo = "El 'tipo de socio' lleva su primera letra en mayúscula";
  }

  if (!form.nombre.trim()) {
    errors.nombre = "El 'nombre de socio' es obligatorio";
  } else if (!regexName.test(form.nombre.trim())) {
    errors.nombre = "El 'nombre' solo acepta letras y espacios en blancos";
  } else if (!regexMayu.test(form.nombre.trim())) {
    errors.nombre =
      "En el campo 'nombre' la primera letra de cada palabra débe ser en mayúscula";
  }

  if (!form.licencia.trim()) {
    errors.licencia = "La 'licencia del socio' es obligatoria";
  } else if (!regexComments.test(form.licencia.trim())) {
    errors.licencia =
      "La 'licencia del socio' no debe exceder los 10 caracteres";
  }

  if (!form.dni.trim()) {
    errors.dni = "El 'DNI del socio' es obligatorio";
  }

  if (!form.direccion.trim()) {
    errors.direccion = "La 'dirección del socio' es obligatoria";
  }

  return errors;
};

let style = {
  fontWeight: "bold",
  color: "#dc3545",
};

const CrudForm = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
  const [form, setform] = useState(initialForm);
  const [errors, setErrors] = useState({});

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

  const handdleBlur = (e) => {
    handelChange(e);
    setErrors(validateForm(form));
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    setErrors(validateForm(form));

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
                  onBlur={handdleBlur}
                  onChange={handelChange}
                  value={form.numero}
                />
                {errors.numero && <p style={style}>{errors.numero}</p>}
              </div>
              <div className="form-group">
                <label>Tipo de Socio</label>
                <input
                  className="form-control"
                  type="text"
                  name="tipo"
                  placeholder="Tipo"
                  onBlur={handdleBlur}
                  onChange={handelChange}
                  value={form.tipo}
                />
                {errors.tipo && <p style={style}>{errors.tipo}</p>}
              </div>
              <div className="form-group">
                <label>Nombre del Socio</label>
                <input
                  className="form-control"
                  type="text"
                  name="nombre"
                  placeholder="Nombre"
                  onBlur={handdleBlur}
                  onChange={handelChange}
                  value={form.nombre}
                />
                {errors.nombre && <p style={style}>{errors.nombre}</p>}
              </div>
              <div className="form-group">
                <label>Licencia del Socio</label>
                <input
                  className="form-control"
                  type="text"
                  name="licencia"
                  placeholder="Licencia"
                  onBlur={handdleBlur}
                  onChange={handelChange}
                  value={form.licencia}
                />
                {errors.licencia && <p style={style}>{errors.licencia}</p>}
              </div>
              <div className="form-group">
                <label>DNI del Socio</label>
                <input
                  className="form-control"
                  type="number"
                  name="dni"
                  placeholder="DNI"
                  onBlur={handdleBlur}
                  onChange={handelChange}
                  value={form.dni}
                />
                {errors.dni && <p style={style}>{errors.dni}</p>}
              </div>
              <div className="form-group">
                <label>Dirección del Socio</label>
                <input
                  className="form-control"
                  type="text"
                  name="direccion"
                  placeholder="Dirección"
                  onBlur={handdleBlur}
                  onChange={handelChange}
                  value={form.direccion}
                />
                {errors.direccion && <p style={style}>{errors.direccion}</p>}
              </div>
              <div className="form-group">
                <label>Telefono del Socio</label>
                <input
                  className="form-control"
                  type="number"
                  name="telefono"
                  placeholder="Telefono"
                  onBlur={handdleBlur}
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
                  onBlur={handdleBlur}
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
                  onBlur={handdleBlur}
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
