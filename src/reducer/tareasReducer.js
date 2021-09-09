import { RETURN_ALL, LOADING, ERROR } from "../types/homeworkTypes";

const INITIAL_STATE = {
  tareas: {},
  loading: false,
  error: "",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RETURN_ALL:
      return {
        ...state,
        tareas: action.payload,
        loading: false,
        error: ''
      };

    case LOADING:
      return { ...state, loading: true };

    case ERROR:
      return { ...state, error: action.payload, loading: false };

    default:
      return state;
  }
};