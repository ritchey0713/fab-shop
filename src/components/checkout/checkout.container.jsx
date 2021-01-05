import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./checkout.component";
import Shop from "./prebuilt/Shop";

const stripePromise = loadStripe(process.env.PUBLISHABLLE_KEY);

const CheckoutContainer = () => {
  let history = useHistory();
  const [numItem, setNumItems] = useState(1);

  const add = () => setNumItems((num) => Math.min(12, num + 1));
  const rem = () => setNumItems((num) => Math.max(1, num - 1));

  const getPrice = (numItem) =>
    (Math.round(numItem * 1.5 * 100) / 100).toFixed(2);

  return (
    <Elements stripe={stripePromise}>
      <Shop onAdd={add} onRemove={rem} numItem={numItem} />
      <CheckoutForm
        price={getPrice(numItem)}
        onSuccessfulCheckout={() => history.push("/success")}
      />
    </Elements>
  );
};

export default CheckoutContainer;
