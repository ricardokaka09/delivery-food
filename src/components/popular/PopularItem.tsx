import React from "react";
import deal2 from "../../style/img/Deal-2.png";
import order1 from "../../style/img/order-1.png";
import order2 from "../../style/img/order-2.png";
import order3 from "../../style/img/order-3.png";
import order4 from "../../style/img/order-4.png";
import order5 from "../../style/img/order-5.png";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const PopularItem: React.FC<{ type: string }> = ({ type }) => {
  return (
    <div className="popular__item">
      <img
        src={
          type === "order-1"
            ? order1
            : type === "order-2"
            ? order2
            : type === "order-3"
            ? order3
            : type === "order-4"
            ? order4
            : type === "order-5"
            ? order5
            : ""
        }
        alt=""
        className="popular__item-img"
      />
      <div className="popular__item-info">
        <h4 className="popular__item-name">Thai soup</h4>
        <p className="popular__item-marker">
          <LocationOnIcon /> Foody man
        </p>
        <p className="popular__item-price">$3.88</p>
      </div>
      <button className="popular__item-button">order now</button>
    </div>
  );
};

export default PopularItem;