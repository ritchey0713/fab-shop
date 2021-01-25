import { ADD_CREDITS, FETCH_USER, LOG_OUT_USER } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  error: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case FETCH_USER:
    case ADD_CREDITS:
      return {
        ...state,
        currentUser: action.payload || false,
      };
    case LOG_OUT_USER:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default userReducer;
