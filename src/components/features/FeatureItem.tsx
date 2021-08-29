import React from "react";
import DiscountIcon from "../../style/img/Discount-Icon.png";
import LocationIcon from "../../style/img/Location-Icon.png";
import TimeIcon from "../../style/img/Time-Icon.png";

const FeatureItem: React.FC<{ type: string; title: string }> = ({
  type,
  title,
}) => {
  return (
    <div className="featureItem">
      <figure className="featureItem__shape">
        <img
          src={
            type === "discount"
              ? DiscountIcon
              : type === "location"
              ? LocationIcon
              : type === "time"
              ? TimeIcon
              : ""
          }
          alt=""
          className="featureItem__img"
        />
      </figure>
      <h3 className="featureItem__title">{title}</h3>
    </div>
  );
};

export default FeatureItem;
