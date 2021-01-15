import { SEND_PAYMENT } from "./order.types";

const INITIAL_STATE = {
  invoices: {},
};

const orderReducer = (state = INITIAL_STATE, action) => {
  console.log(action.payload);
  switch (action.type) {
    case SEND_PAYMENT:
      return Object.assign({}, state, {
        invoices: {
          ...state.invoices,
          [action.payload._id]: action.payload,
        },
      });
    default:
      return state;
  }
};

export default orderReducer;
