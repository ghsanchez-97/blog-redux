import axios from "axios";
import { LOADING, RETURN_ALL, ERROR } from "../types/user-types";

export const getAll = () => async (dispatch) => {
    dispatch({
        type:LOADING
    })
    try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");

    dispatch({
      type: RETURN_ALL,
      payload: res.data,
    });
  } catch (err) {
    console.log("Error: ", err.message);
    dispatch({
        type: ERROR,
        payload: 'Error algo sucedio, intenta más tarde'
    })
  }
};
