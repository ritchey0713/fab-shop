import { CREATE_FAB_REQUEST } from "./fab.types";

const INITIAL_STATE = {
  requests: {},
  errors: {},
};

const fabReducer = (state = INITIAL_STATE, action) => {
  console.log("in reducer");
  switch (action.type) {
    case CREATE_FAB_REQUEST:
      return Object.assign({}, state, {
        requests: {
          ...state.requests,
          [action.payload._id]: action.payload,
        },
      });
    default:
      return state;
  }
};

export default fabReducer;
