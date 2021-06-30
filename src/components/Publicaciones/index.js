import React from "react";
import { connect } from "react-redux";
import * as userActions from "../../actions/userActions";
import * as publicActions from "../../actions/publicActions";
import Spinner from "../General/Spinner";
import Error from "../General/Error"; 

const { getAll: usersGetAll } = userActions;
const { getForUser: publicsForUser } = publicActions;

class Publicaciones extends React.Component {
  async componentDidMount() {

    const {
      usersGetAll,
      publicsForUser,
      match:{ params: { key } }
    } = this.props;

    if (!this.props.usersReducer.users.length) {
      await usersGetAll();
    }

    if(this.props.usersReducer.error){
      return;
    }

    if(!('publics_key' in this.props.usersReducer.users[key])){
      publicsForUser(key);
    }
  }
  
  putUser = () =>{
    const { usersReducer, match:{ params: { key } }} = this.props;

    if(usersReducer.error){
      return <Error message={usersReducer.error} />
    }
    
    if(!usersReducer.users.length || usersReducer.loading){
      return <Spinner />
    }

    const name = usersReducer.users[key].name

    return(
      <h1>Publicaciones de {name} </h1>
    )

  }

  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        {this.props.match.params.key}
        {this.putUser()}
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
