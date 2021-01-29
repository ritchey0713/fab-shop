import React from "react";
import ReactDOM from "react-dom";
import "materialize-css/dist/css/materialize.min.css";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import App from "./components/App";

import axios from "axios";

// test emails
window.axios = axios;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
