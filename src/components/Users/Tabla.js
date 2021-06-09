import React from "react";
import { connect } from "react-redux";
import "../styles/Icons.css";
import { Link } from "react-router-dom";

const Tabla = (props) => {
  const putFiles = () =>
    props.users.map((user, key) => (
      <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.website}</td>
        <td>
          <Link to={ `/publicaciones/${key}` }>
            <div className="eye-solid icon"></div>
          </Link>
        </td>
      </tr>
    ));

  return (
    <React.Fragment>
      <table className="tabla">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Enlace</th>
          </tr>
        </thead>
        <tbody>{putFiles()}</tbody>
      </table>
    </React.Fragment>
  );
};

const mapStateToProps = (reducer) => {
  return reducer.usersReducer;
};

export default connect(mapStateToProps)(Tabla);
