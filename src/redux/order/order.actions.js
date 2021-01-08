import axios from "axios";
import { SEND_PAYMENT } from "./order.types";

export const sendPayment = (
  stripe,
  price,
  cardElement,
  billingDetails
) => async (dispatch) => {
  const {
    data: { order, secret },
  } = await axios.post("/api/stripe", {
    amount: price * 100,
  });
  const paymentMethodReq = await stripe.createPaymentMethod({
    type: "card",
    card: cardElement,
    billing_details: billingDetails,
  });
  await stripe.confirmCardPayment(secret, {
    payment_method: paymentMethodReq.paymentMethod.id,
  });
  dispatch({ type: SEND_PAYMENT, payload: order });
};
