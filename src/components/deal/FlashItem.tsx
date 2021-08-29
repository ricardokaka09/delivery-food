import React from "react";
import Discount from "./Discount";
import deal1 from "../../style/img/Deal-1.png";
import deal2 from "../../style/img/Deal-2.png";
import deal3 from "../../style/img/Deal-3.png";
import deal4 from "../../style/img/Deal-4.png";

const FlashItem: React.FC<{ type: string }> = ({ type }) => {
  return (
    <div className="dealItem">
      <div className="deal__img">
        <img
          src={
            type === "deal-1"
              ? deal1
              : type === "deal-2"
              ? deal2
              : type === "deal-3"
              ? deal3
              : type === "deal-4"
              ? deal4
              : ""
          }
          alt=""
        />
        <Discount />
      </div>
      <div className="deal__text">
        <p>Greys Vage</p>
        <div className="deal__remaining">6 Day Remaining</div>
      </div>
    </div>
  );
};

export default FlashItem;
