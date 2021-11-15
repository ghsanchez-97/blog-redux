import React from "react";
//Importación de redux
import { connect } from 'react-redux'
import { UserChangeId, UserChangeTitle } from 'actions/homeworkActions'

const Save = ({ tareasReducer }) => {

  const handleChangeId = (e) => {
    UserChangeId(e.target.value)
  }
  const handleChangeTitle = (e) => {
    UserChangeTitle(e.target.value)
  }

  return (
    <React.Fragment>
      <h1>Guardar Tarea</h1>
      Usuario Id:
      <input 
        type="number" 
        value={tareasReducer}
        onChange={handleChangeId}/>
      <br />
      <br />
      Tarea:
      <input 
        value={tareasReducer} 
        onChange={handleChangeTitle} />
      <br />
      <br />
      <button>Guardar</button>
    </React.Fragment>
  );
};

const mapStateToProps = ({ tareasReducer }) => tareasReducer

export default connect(mapStateToProps, { UserChangeId, UserChangeTitle } )(Save);
