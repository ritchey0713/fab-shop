import axios from "axios";
import { SEND_PAYMENT } from "./order.types";

export const sendPayment = (
  stripe,
  price,
  cardElement,
  billingDetails
) => async (dispatch) => {
  const data = await axios.post("/api/stripe", {
    amount: price * 100,
  });
  const paymentMethodReq = await stripe.createPaymentMethod({
    type: "card",
    card: cardElement,
    billing_details: billingDetails,
  });

  console.log(data);
  const paymentInfo = await stripe.confirmCardPayment(data.clientSecret, {
    payment_method: paymentMethodReq.paymentMethod.id,
  });
  //dispatch({ type: SEND_PAYMENT, payload: data });
};

export const defaultTest = () => async (dispatch) => {
  console.log("TEST");
};
