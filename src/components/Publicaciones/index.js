import React from "react";
import { connect } from "react-redux";
import * as userActions from "../../actions/userActions";
import * as publicActions from "../../actions/publicActions";

const { getAll: usersGetAll } = userActions;
const { getAll: publicsGetAll } = publicActions;

class Publicaciones extends React.Component {
  componentDidMount() {
    if (!this.props.usersReducer.users.length) {
      this.props.usersGetAll();
    }
  }

  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        <h1>Publicaciones de </h1>
        {this.props.match.params.key}
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ usersReducer, publicReducer }) => {
  return {
    usersReducer,
    publicReducer,
  };
};

const mapDispatchToProps = {
    usersGetAll,
    publicsGetAll
}

export default connect(mapStateToProps, mapDispatchToProps)(Publicaciones);
