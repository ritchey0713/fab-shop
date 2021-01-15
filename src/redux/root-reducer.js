import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import orderReducer from "./order/order.reducer";
import fabReducer from "./fab/fab.reducer";

// const persistConfig = {
//   key: "root",
//   storage,
//   whitelist: ["user"],
// };

const rootReducer = combineReducers({
  user: userReducer,
  order: orderReducer,
  fab: fabReducer,
});

// export default rootReducer;

export default rootReducer;
