import { RETURN_ALL, LOADING, ERROR, USERCHANGEID, USERCHANGETITLE } from "../types/homeworkTypes";

const INITIAL_STATE = {
  tareas: {},
  loading: false,
  error: "",
  user_id: '',
  title: ''
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

    case USERCHANGEID:
      return {...state, user_id: action.payload};

    case USERCHANGETITLE:
      return {...state, title: action.payload};

    default:
      return state;
  }
};