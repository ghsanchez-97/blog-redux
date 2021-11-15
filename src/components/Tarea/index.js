import React from "react";
//Importacion de redux
import { connect } from "react-redux";
import { getAll } from "../../actions/homeworkActions";
//Importación de Link
import { Link } from "react-router-dom";
//Importación de los componentes loadings y errors
import Loading from "../General/Spinner";
import Error from "../General/Error";
//Importación de estilos
import "./styles.css";

const Tareas = ({ tareasReducer }) => {

  const showContent = () => {
    const { tareas, loading, error } = tareasReducer;

    if (loading) {
      return <Loading />;
    }
    if (error) {
      return <Error message={error} />;
    }

    return Object.keys(tareas).map((user_id) => (
      <div key={user_id}>
        <h2>Usuario {user_id}</h2>
        <div className="container__tareas">{putHomework(user_id)}</div>
      </div>
    ));
  };

  const putHomework = (user_id) => {
    const { tareas } = tareasReducer;
    const foruser = { ...tareas[user_id] };

    return Object.keys(foruser).map((tar_id) => (
      <div key={tar_id}>
        <input type="checkbox" defaultChecked={foruser[tar_id].completed} />
        {foruser[tar_id].title}
      </div>
    ));
  };

  return (
    <React.Fragment>
      <button>
        <Link to="/tareas/saves">Agregar Tarea</Link>
      </button>
      <div>{showContent()}</div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  tareasReducer: state.tareasReducer,
});

export default connect(mapStateToProps, getAll)(Tareas);
