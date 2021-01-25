import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import GlobalStyles from "../prebuilt/GlobalStyles";
import Shop from "../prebuilt/Shop";
import BuyCredits from "./BuyCredits.comp";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

const BuyCreditsContainer = () => {
  let history = useHistory();
  const [numItem, setNumItems] = useState(1);

  const add = () => setNumItems((num) => Math.min(10000, num + 1));
  const rem = () => setNumItems((num) => Math.max(1, num - 1));

  const getPrice = (numItem) =>
    (Math.round(numItem * 5 * 100) / 100).toFixed(2);
  return (
    <Elements stripe={stripePromise}>
      <GlobalStyles />
      <Shop onAdd={add} onRemove={rem} numItem={numItem} />
      <BuyCredits
        price={getPrice(numItem)}
        credits={numItem}
        onSuccessfulCheckout={() => history.push("/dashboard")}
        history={history}
      />
    </Elements>
  );
};

export default BuyCreditsContainer;
