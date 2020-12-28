import axios from "axios";
import { FETCH_USER } from "./user.types";

export const fetchUser = () => async (dispatch) => {
  const resp = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: resp });
};
// return (dispatch) => {
//   axios
//     .get("/api/current_user")
//     .then((resp) => dispatch({ type: FETCH_USER, payload: resp }));
// };
