import axios from "axios";
import { FETCH_USER, LOG_OUT_USER } from "./user.types";

export const fetchUser = () => async (dispatch) => {
  const resp = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: resp.data });
};
// return (dispatch) => {
//   axios
//     .get("/api/current_user")
//     .then((resp) => dispatch({ type: FETCH_USER, payload: resp }));
// };
export const logoutUser = () => async (dispatch) => {
  await axios.get("/api/logout");
  dispatch({ type: LOG_OUT_USER });
};

export const signIn = () => async (dispatch) => {
  let params = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "http://localhost:3000",
      "Access-Control-Allow-Headers": "X-Requested-With,content-type",
    },
    referrerPolicy: "no-referrer-when-downgrade",
    withCredientials: true,
  };
  const resp = await fetch("/auth/google", { credentials: "include" });
  // const resp = await axios({
  //   method: "GET",
  //   headers: {
  //     "Content-Type": "application/json",
  //     "Access-Control-Allow-Origin": "http://localhost:3000",
  //     "Access-Control-Allow-Headers": "X-Requested-With,content-type",
  //   },
  //   url: "/auth/google",
  //   withCredentials: true,
  // });
  console.log(resp);
};
