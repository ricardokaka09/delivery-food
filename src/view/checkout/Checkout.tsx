import React, { useEffect, useState, useRef } from "react";
import CheckoutItem from "../../components/checkout/CheckoutItem";
import ViewButton from "../../components/ViewButton";
import voucher from "../../style/img/voucher.png";

const Checkout = () => {
  const myRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [fixedForm, setFixedForm] = useState<boolean>(false);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
    if (position >= 162 && position < 560) {
      setFixedForm(true);
    } else {
      setFixedForm(false);
    }
    console.log(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <section className="checkout">
      <div className="checkout__content">
        <div className="checkout__product">
          <CheckoutItem />
          <CheckoutItem />
          <CheckoutItem />
        </div>
        <div
          className="checkout__action"
          style={
            fixedForm ? { position: "fixed", top: "0", right: "240px" } : {}
          }
        >
          <div className="checkout__action-form" ref={myRef}>
            <div className="checkout__action-form-title">
              <img src={voucher} alt="" />
              <p>Voucher</p>
            </div>
            <div className="checkout__action-form-voucher">
              <input
                type="text"
                className="checkout__action-form-voucher-input"
                placeholder="Voucher"
              />
              <button className="checkout__action-form-voucher-btn">
                APPLY
              </button>
            </div>
            <div className="checkout__action-form-total">
              <h3 className="checkout__action-form-total-item">
                Subtotal <span>3</span> :{" "}
              </h3>
              <p className="checkout__action-form-total-price">$10</p>
            </div>
          </div>
          <ViewButton
            type="viewButton__btn viewButton__btn-orderDetail"
            title="Proceed to Checkout"
          />
        </div>
      </div>
    </section>
  );
};

export default Checkout;
