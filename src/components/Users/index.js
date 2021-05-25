import React from "react";
import "../styles/App.css";
import { connect } from "react-redux";
import * as userActions from "../../actions/userActions";
import Spinner from '../General/Spinner';
import Error from '../General/Error';

class Users extends React.Component {
  componentDidMount() {
    this.props.getAll();
  }

  putContent = () => {
    if(this.props.loading){
      return <Spinner />
    }

    if(this.props.error){
      return <Error message={this.props.error} />;
    }

    return (
      <table className="tabla">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Enlace</th>
            </tr>
          </thead>
          <tbody>{this.putFiles()}</tbody>
        </table>
    )
  }

  putFiles = () =>
    this.props.users.map((user) => (
      <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.website}</td>
      </tr>
    ));

  render() {
    return (
      <div>
        {this.putContent() }
      </div>
    )
  }
}

const mapStateToProps = (reducers) => {
  return reducers.usersReducer;
};

export default connect(mapStateToProps, userActions)(Users);
