import React from "react";
import StripeCheckout from "react-stripe-checkout";

import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HT8IVHye9tS9SYFZYNKZyYnFF3qRnLQoeIll51jwlUnj1LLDw7Q7tU34gbcbmYawqzG09uDl2kn9Xpfue5MrHNO00w7qA9tHP";

  const onToken = (token) => {
    axios({
      url: "/payments",
      method: "post",
      data: { amount: priceForStripe, token },
    })
      .then((response) => {
        alert("Payment Successful");
      })
      .catch((error) => {
        console.log(error);
        alert(
          "There is a issue with your credit card. Please make sure to use provided credit card."
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
