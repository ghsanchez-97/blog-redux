import React from "react";
import { connect } from "react-redux";
import * as userActions from "../../actions/userActions";
import * as publicActions from "../../actions/publicActions";
import Spinner from "../General/Spinner";
import Error from "../General/Error";
import "../styles/App.css";

const { getAll: usersGetAll } = userActions;
const { getForUser: publicsForUser, openexit } = publicActions;

class Publicaciones extends React.Component {
  async componentDidMount() {
    const {
      usersGetAll,
      publicsForUser,
      match: {
        params: { key },
      },
    } = this.props;

    if (!this.props.usersReducer.users.length) {
      await usersGetAll();
    }

    if (this.props.usersReducer.error) {
      return;
    }

    if (!("publics_key" in this.props.usersReducer.users[key])) {
      publicsForUser(key);
    }
  }

  putUser = () => {
    const {
      usersReducer,
      match: {
        params: { key },
      },
    } = this.props;

    if (usersReducer.error) {
      return <Error message={usersReducer.error} />;
    }

    if (!usersReducer.users.length || usersReducer.loading) {
      return <Spinner />;
    }

    const name = usersReducer.users[key].name;

    return <h1>Publicaciones de {name} </h1>;
  };

  putPlubics = () => {
    const {
      usersReducer,
      usersReducer: { users },
      publicReducer,
      publicReducer: { publics },
      match: {
        params: { key },
      },
    } = this.props;

    if (!users.length) return;

    if (usersReducer.error) return;

    if (publicReducer.loading) {
      return <Spinner />;
    }

    if (publicReducer.error) {
      return <Error message={publicReducer.error} />;
    }

    if (!publics.length) return;

    if (!("publics_key" in users[key])) return;

    const { publics_key } = users[key];

    return this.showInfo(
      publics[publics_key],
      publics_key,
    )
  };

  showInfo = (publics, pub_key) => (
    publics.map((publics, com_key) => (
      <div
        className="pub_title"
        key={publics.id}
        onClick={() => this.props.openexit(pub_key, com_key)}
      >
        <h2>{publics.title}</h2>
        <h3>{publics.body}</h3>
        {
          (publics.open) ? 'Open' : 'Close'
        }
      </div>
    ))
  );

  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        {this.putUser()}
        {this.putPlubics()}
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
  publicsForUser,
  openexit
};

export default connect(mapStateToProps, mapDispatchToProps)(Publicaciones);
