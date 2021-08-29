import React from "react";
import FlashItem from "../../components/deal/FlashItem";

const FlashDeal = () => {
  return (
    <section className="flashDeals">
      <div className="flashDeals__content">
        <FlashItem type="deal-1" />
        <FlashItem type="deal-2" />
        <FlashItem type="deal-3" />
        <FlashItem type="deal-4" />
      </div>
    </section>
  );
};

export default FlashDeal;
