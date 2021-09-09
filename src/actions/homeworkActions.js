import axios from "axios";
import { LOADING, RETURN_ALL, ERROR } from "../types/homeworkTypes";

export const getAll = () => async (dispatch) => {
  dispatch({
    type: LOADING,
  });
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos");

    const tareas = {};
    res.data.map((tar) => (
        tareas[tar.userId] = {
            ...tareas[tar.userId],
            [tar.id]: {
                ...tar
            }
        }
    ))

    dispatch({
      type: RETURN_ALL,
      payload: tareas,
    });
  } catch (err) {
    console.log("Error: ", err.message);
    dispatch({
      type: ERROR,
      payload: "Información de tareas no disponible",
    });
  }
};
