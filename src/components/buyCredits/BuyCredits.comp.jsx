import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import styled from "@emotion/styled";

import Row from "../prebuilt/Row.component";
import BillingDetailsFields from "../prebuilt/BillingDetailsFields.component";
import SubmitButton from "../prebuilt/SubmitButton";
import CheckoutError from "../prebuilt/CheckoutError.component";
import { connect } from "react-redux";
import { addCredits } from "../../redux/user/user.actions";

const CardElementContainer = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  & .StripeElement {
    width: 100%;
    padding: 15px;
  }
`;

const iframeStyles = {
  base: {
    color: "#fff",
    fontSize: "16px",
    iconColor: "#fff",
    "::placeholder": {
      color: "#87bbfd",
    },
  },
  invalid: {
    iconColor: "#FFC7EE",
    color: "#FFC7EE",
  },
  complete: {
    iconColor: "#cbf4c9",
  },
};

const cardElementOpts = {
  iconStyle: "solid",
  style: iframeStyles,
  hidePostalCode: true,
};

const BuyCredits = ({
  price,
  addCredits,
  credits,
  onSuccessfulCheckout,
  history,
}) => {
  const [isProcessing, setProcessingTo] = useState(false);
  const [checkoutError, setCheckoutError] = useState();

  const stripe = useStripe();
  const elements = useElements();

  const handleCardDetailsChange = (ev) => {
    ev.error ? setCheckoutError(ev.error.message) : setCheckoutError();
  };

  const handleFormSubmit = async (ev) => {
    ev.preventDefault();

    const billingDetails = {
      name: ev.target.name.value,
      email: ev.target.email.value,
      address: {
        city: ev.target.city.value,
        line1: ev.target.address.value,
        state: ev.target.state.value,
        postal_code: ev.target.zip.value,
      },
    };

    setProcessingTo(true);

    const cardElement = elements.getElement("card");
    try {
      addCredits(stripe, credits, price, cardElement, billingDetails, history);
      // defaultTest();
      // set error from reducer
      // if (paymentMethodReq.error) {
      //   setCheckoutError(paymentMethodReq.error.message);
      //   setProcessingTo(false);
      //   return;
      // }
      // set error from reducer
      // if (data.error) {
      //   setCheckoutError(data.error.message);
      //   setProcessingTo(false);
      //   return;
      // }
      // onSuccessfulCheckout();
    } catch (err) {
      setCheckoutError(err.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <Row>
          <BillingDetailsFields />
        </Row>
        <Row>
          <CardElementContainer>
            <CardElement
              options={cardElementOpts}
              onChange={handleCardDetailsChange}
            />
          </CardElementContainer>
        </Row>
        {checkoutError && <CheckoutError>{checkoutError}</CheckoutError>}
        <Row>
          {/* TIP always disable your submit button while processing payments */}
          <SubmitButton disabled={isProcessing || !stripe}>
            {isProcessing ? "Processing..." : `Pay $${price}`}
          </SubmitButton>
        </Row>
      </form>
    </div>
  );
};

export default connect(null, { addCredits })(BuyCredits);
