import styles from "./StripeButton.module.scss";

import StripeCheckout, { Token } from "react-stripe-checkout";

const StripeButton: React.FC<{ price: number }> = ({ price }) => {
  const priceForStripe = +(price * 100).toFixed(2);
  const publisableKey =
    "pk_test_51J95DqJdNfM2LJnUmj1JttXFvxWlNqndRaNIoo7S9altlsNC64mgE6sXtbMAcQpP8HV13N5amWNlt6Hck9lLf1m700xeqzZlxy";
  const onToken = (token: Token) => {
    console.log(token);
    alert("Payment Successfull");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Toy Shop"
      billingAddress
      shippingAddress
      currency="eur"
      image="/icon.png"
      description={`Your total is €${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publisableKey}
    />
  );
};

export default StripeButton;
