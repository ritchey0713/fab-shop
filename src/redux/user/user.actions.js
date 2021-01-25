import axios from "axios";
import { FETCH_USER, LOG_OUT_USER, ADD_CREDITS } from "./user.types";

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

export const addCredits = (
  stripe,
  credits,
  price,
  cardElement,
  billingDetails,
  history
) => async (dispatch) => {
  const {
    data: { user, secret },
  } = await axios.post("/api/credits", {
    amount: price * 100,
    credits,
  });
  const paymentMethodReq = await stripe.createPaymentMethod({
    type: "card",
    card: cardElement,
    billing_details: billingDetails,
  });
  await stripe.confirmCardPayment(secret, {
    payment_method: paymentMethodReq.paymentMethod.id,
  });
  dispatch({ type: ADD_CREDITS, payload: user });
  history.push("/dashboard");
};
