import { RETURN_FOR_USER, LOADING, ERROR } from "../types/public-types";
import * as usertypes from "../types/user-types";
import axios from "axios";

const { RETURN_ALL: USERS_RETURN_ALL } = usertypes;

export const getForUser = (key) => async (dispatch, getState) => {
  
  dispatch({
    type: LOADING
  })
  
  const { users } = getState().usersReducer;
  const { publics } = getState().publicReducer;
  const user_id = users[key].id;

  try {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?userId=${user_id}`
    );
  
    const publics_update = [...publics, res.data];
  
    dispatch({
      type: RETURN_FOR_USER,
      payload: publics_update,
    });
  
    const publics_key = publics_update.length - 1;
    const users_update = [...users];
    users_update[key] = {
      ...users[key],
      publics_key,
    };
  
    dispatch({
      type: USERS_RETURN_ALL,
      payload: users_update,
    });
  }catch(error){
    console.log(error.message);
    dispatch({
      type:ERROR,
      payload: 'Publicaciones no disponibles.'
    })
  }

};
