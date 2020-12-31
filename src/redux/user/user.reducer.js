import { FETCH_USER, LOG_OUT_USER } from "./user.types";

const INITIAL_STATE = {
  current_user: null,
  error: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USER:
      return {
        ...state,
        current_user: action.payload.data || false,
      };
    case LOG_OUT_USER:
      return {
        ...state,
        current_user: false,
      };
    default:
      return state;
  }
};

export default userReducer;
