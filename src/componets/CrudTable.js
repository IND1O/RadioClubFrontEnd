import React from "react";
import CrudTableRow from "./CrudTableRow";

const CrudTable = ({ data, setDataToEdit, deleteData }) => {
  return (
    <div>
      <div className="container my-5">
        <div className="shadow-4 rounded-5 overflow-hidden">
          <table className="table align-middle mb-0 bg-white">
            <thead className="bg-light">
              <tr>
                <th>Nombre</th>
                <th>Tipo</th>
                <th>Licencia</th>
                <th>Datos Personales</th>
                <th>Cuota</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {data.length > 0 ? (
                data.map((el) => (
                  <CrudTableRow
                    key={el.id}
                    el={el}
                    setDataToEdit={setDataToEdit}
                    deleteData={deleteData}
                  />
                ))
              ) : (
                <tr>
                  <td colSpan={3}>Sin Datos</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CrudTable;
