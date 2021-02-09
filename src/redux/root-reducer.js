import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import orderReducer from "./order/order.reducer";
import fabReducer from "./fab/fab.reducer";
import { reducer as reduxForm } from "redux-form";
import surveyReducer from "./survey/survey.reducer";
// const persistConfig = {
//   key: "root",
//   storage,
//   whitelist: ["user"],
// };

const rootReducer = combineReducers({
  user: userReducer,
  order: orderReducer,
  fab: fabReducer,
  // survey: surveyReducer
  form: reduxForm,
});

// export default rootReducer;

export default rootReducer;
