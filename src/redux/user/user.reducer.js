import { FETCH_USER } from "./user.types";

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
    default:
      return state;
  }
};

export default userReducer;
