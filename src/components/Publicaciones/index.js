import React from "react";
import { connect } from "react-redux";
import * as userActions from "../../actions/userActions";
import * as publicActions from "../../actions/publicActions";

const { getAll: usersGetAll } = userActions;
const { getForUser: publicsForUser } = publicActions;

class Publicaciones extends React.Component {
  async componentDidMount() {
    if (!this.props.usersReducer.users.length) {
      await this.props.usersGetAll();
    }
    this.props.publicsForUser(this.props.match.params.key);
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
    publicsForUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Publicaciones);
