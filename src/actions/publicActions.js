import { RETURN_ALL, LOADING, ERROR } from "../types/public-types";
import axios from "axios";

export const getAll = () => async (dispatch) => {
  dispatch({
    type: LOADING,
  });
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    dispatch({
      type: RETURN_ALL,
      payload: res.data,
    });
  } catch (err) {
    console.log("Error: ", err.message);
    dispatch({
      type: ERROR,
      payload: "Error algo sucedio, intenta más tarde",
    });
  }
};

export const getForUser = (key) => async (dispatch, getState) => {
  const { users } = getState().usersReducer;
  const user_id = users[key].id;

  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?userId=${user_id}`
  );
  dispatch({
    type: RETURN_ALL,
    payload: res.data,
  });
};
