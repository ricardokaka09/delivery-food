import React from "react";
import CheckoutItem from "../../components/checkout/CheckoutItem";

const Checkout = () => {
  return (
    <section className="checkout">
      <div className="checkout__product">
        <CheckoutItem />
      </div>
      <div className="checkout__action"></div>
    </section>
  );
};

export default Checkout;
