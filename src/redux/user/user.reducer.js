import { FETCH_USER } from "./user.types";

const INITIAL_STATE = {
  current_user: null,
  error: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case FETCH_USER:
      return state;
    default:
      return state;
  }
};

export default userReducer;
