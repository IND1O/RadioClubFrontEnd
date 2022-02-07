import React from "react";
import { useHistory } from "react-router-dom";
import moment from "moment";

const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {
  let {
    numero,
    tipo,
    nombre,
    licencia,
    dni,
    telefono,
    direccion,
    email,
    pago,
    id,
  } = el;

  let history = useHistory();

  const handleEdit = () => {
    setDataToEdit(el);
    history.push(`/editar/${id}`);
  };

  return (
    <tr>
      <td>
        <div className="d-flex align-items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDPmETqRkJjQo5XZVmMs6JAevxyNS3n6Npwd5Hz9uXFG0qq4J5X0fVeUx0xxgX9q-uVWs&usqp=CAU"
            alt=""
            style={{ width: 60, height: 60 }}
            className="rounded-circle"
          />
          <div className="ms-3">
            <p className="fw-bold mb-1">{nombre}</p>
            <p className="text-muted mb-0">{email}</p>
            <p className="text-muted mb-1">N° de Socio: {numero}</p>
          </div>
        </div>
      </td>
      <td>
        {tipo === "Activo" ? (
          <span className="badge rounded-pill bg-info">{tipo}</span>
        ) : (
          <span className="badge rounded-pill bg-warning text-dark">
            {tipo}
          </span>
        )}
      </td>

      <p className="fw-bold mb-1"> {licencia}</p>
      <td>
        <p className="fw-bold mb-1"> {direccion}</p>
        <p className="text-muted mb-0">Telefono: {telefono}</p>
        <p className="text-muted mb-0">DNI: {dni}</p>
      </td>
      <td>
        {pago === null ? (
          <p className="text-danger fw-bold mb-1">No registra pagos</p>
        ) : (
          <p className="text-success fw-bold mb-1">
            {" "}
            {moment(pago).format("DD-MM-YYYY")}
          </p>
        )}
      </td>
      <td>
        <button className="btn btn-outline-info mr-2" onClick={handleEdit}>
          <i className="bi bi-pencil-fill"></i> Editar
        </button>
        {"  "}
        <button
          className="btn btn-outline-danger"
          onClick={() => deleteData(id)}
        >
          <i className="bi bi-trash-fill"></i>Borrar
        </button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
