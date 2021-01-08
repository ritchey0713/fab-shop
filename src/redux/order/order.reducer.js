import { SEND_PAYMENT } from "./order.types";

const INITIAL_STATE = {};

const orderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEND_PAYMENT:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default orderReducer;
