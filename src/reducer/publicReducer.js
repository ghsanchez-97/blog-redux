import { RETURN_FOR_USER, LOADING, ERROR } from "../types/public-types";

const INITIAL_STATE = {
  publics: [],
  loading: false,
  error: "",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RETURN_FOR_USER:
      return {
        ...state,
        publics: action.payload,
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
