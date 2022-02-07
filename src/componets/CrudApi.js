import React, { useEffect, useState, useReducer } from "react";
import { HashRouter, NavLink, Route, Switch } from "react-router-dom";
import { TYPES } from "../actions/crudActions";
import { helpHttp } from "../helpers/helpHttp";
import Error404 from "../page/Error404";
import { crudInitialState, crudReducer } from "../reducers/crudReducer";
import CrudForm from "./CrudForm";
import Swal from "sweetalert2";
import CrudTable from "./CrudTable";
import Loader from "./Loader";
import Message from "./Message";
import Modals from "./Modals";
import "animate.css";

const CrudApi = () => {
  const [state, dispatch] = useReducer(crudReducer, crudInitialState);
  const { db } = state;
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let api = helpHttp();
  //let url = "https://app-radiobcknd.herokuapp.com/api/socios";
  let url = "http://localhost:3001/api/socios";

  useEffect(() => {
    setLoading(true);
    helpHttp()
      .get(url)
      .then((res) => {
        if (!res.err) {
          dispatch({ type: TYPES.READ_ALL_DATA, payload: res });
          setError(null);
        } else {
          dispatch({ type: TYPES.NO_DATA });
          setError(res);
        }
        setLoading(false);
      });
  }, [url]);

  const createData = (data) => {
    data.id = Date.now();

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.post(url, options).then((res) => {
      if (!res.err) {
        dispatch({ type: TYPES.CREATE_DATA, payload: res });
        Swal.fire({
          title: "Socio Creado Correctamente",
          icon: "success",
          confirmButtonColor: "#3085d6",

          showClass: {
            popup: "animate__animated animate__bounceInDown",
          },
          hideClass: {
            popup: "animate__animated animate__bounceOutRight",
          },
        });
      } else {
        setError(res);
      }
    });
  };

  const updateData = (data) => {
    let endpoint = `${url}/${data.id}`;

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.put(endpoint, options).then((res) => {
      if (!res.err) {
        dispatch({ type: TYPES.UPDATE_DATA, payload: data });
        Swal.fire({
          title: "Socio Actualizado Correctamente",
          icon: "success",
          confirmButtonColor: "#3085d6",

          showClass: {
            popup: "animate__animated animate__bounceInDown",
          },
          hideClass: {
            popup: "animate__animated animate__bounceOutRight",
          },
        });
      } else {
        setError(res);
      }
    });
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(`¿Estás seguro de eliminar el registro?`);
    if (isDelete) {
      let endpoint = `${url}/${id}`;
      let options = {
        headers: { "content-type": "application/json" },
      };
      api.del(endpoint, options).then((res) => {
        if (!res.err) {
          dispatch({ type: TYPES.DELETE_DATA, payload: id });
          Swal.fire({
            title: "Socio Eliminado Correctamente",
            icon: "success",
            confirmButtonColor: "#3085d6",

            showClass: {
              popup: "animate__animated animate__bounceInDown",
            },
            hideClass: {
              popup: "animate__animated animate__bounceOutRight",
            },
          });
        } else {
          setError(res);
        }
      });
    } else {
      return;
    }
    // Swal.fire({
    //   title: "¿Estas seguro?",
    //   text: "Un socio que se elimina no se puede recuperar",
    //   icon: "warning",
    //   showCancelButton: true,
    //   confirmButtonColor: "#3085d6",
    //   cancelButtonColor: "#d33",
    //   confirmButtonText: "Eliminar",
    //   cancelButtonText: "Cancelar",
    // }).then((result) => {
    //   if (result.value) {
    //     // pasarlo al action
    //     dispatch({ type: TYPES.DELETE_DATA, payload: id });
    //   }
    // });
  };

  return (
    <div>
      <HashRouter>
        <header>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="nav-wrapper">
              <NavLink to="/" activeClassName="active" className="navbar-brand">
                Radio Club de Tucumán
              </NavLink>
              {"  "}
              <NavLink
                to="/agregar"
                activeClassName="active"
                className="navbar-brand"
              >
                Agregar
              </NavLink>
              <Modals />
            </div>
            {"  "}
          </nav>
        </header>
        <Switch>
          <Route exact path="/">
            {loading && <Loader />}
            {error && (
              <Message
                msg={`Error ${error.status}: ${error.statusText}`}
                bgColor="#dc3545"
              />
            )}
            {db && (
              <CrudTable
                data={db}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
              />
            )}
          </Route>
          <Route exact path="/agregar">
            <CrudForm
              createData={createData}
              updateData={updateData}
              dataToEdit={dataToEdit}
              setDataToEdit={setDataToEdit}
            />
          </Route>
          <Route exact path="/editar/:id">
            <CrudForm
              createData={createData}
              updateData={updateData}
              dataToEdit={dataToEdit}
              setDataToEdit={setDataToEdit}
            />
          </Route>
          <Route path="*" children={<Error404 />} />
        </Switch>
      </HashRouter>
    </div>
  );
};

export default CrudApi;
