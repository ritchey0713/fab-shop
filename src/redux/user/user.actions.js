import axios from "axios";
import { FETCH_USER } from "./user.types";

const fetchUser = () => {
  return (dispatch) => {
    axios
      .get("/api/current_user")
      .then((resp) => dispatch({ type: FETCH_USER, payload: resp }));
  };
};
