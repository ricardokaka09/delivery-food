import React from "react";
import ViewButton from "../../components/ViewButton";

const OrderFinal = () => {
  return (
    <section className="orderFinal">
      <div className="orderFinal__text-box">
        <h2 className="orderFinal__title">
          Are you ready to order with the best deals?
        </h2>
        <ViewButton type="viewButton__orderFinal" title="Proceed to order" />
      </div>
    </section>
  );
};

export default OrderFinal;
