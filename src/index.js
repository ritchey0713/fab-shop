import React from "react";
import ReactDOM from "react-dom";
import "materialize-css/dist/css/materialize.min.css";

import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./components/App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
