import { SEND_PAYMENT } from "./order.types";

const INITIAL_STATE = {};

const orderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEND_PAYMENT:
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    default:
      return state;
  }
};

export default orderReducer;
