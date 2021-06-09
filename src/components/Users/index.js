import React from "react";
import "../styles/App.css";
import { connect } from "react-redux";
import * as userActions from "../../actions/userActions";
import Spinner from '../General/Spinner';
import Error from '../General/Error';
import Tabla from './Tabla'

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
      <Tabla/>
    )
  }

  render() {
    return (
      <div>
        <h1>Usuarios</h1>
        {this.putContent() }
      </div>
    )
  }
}

const mapStateToProps = (reducers) => {
  return reducers.usersReducer;
};

export default connect(mapStateToProps, userActions)(Users);
