import { Star, StarOutline } from "@material-ui/icons";
import React from "react";
import Feature1 from "../../style/img/Featured-1.png";
import ResLogo1 from "../../style/img/Res-logo-1.png";
import AlarmOnIcon from "@material-ui/icons/AlarmOn";
import discountIcon from "../../style/img/discountIcon.png";

const RestaurantItem: React.FC = () => {
  return (
    <div className="restaurantItem">
      <div className="res__img">
        <img src={Feature1} alt="" />
        <div className="res__bagde">
          <div className="res__bagde__discount">
            <img
              className="res__bagde__discount-icon"
              src={discountIcon}
              alt=""
            />
            <p className="res__bagde__discount-title">20% Off</p>
          </div>
          <div className="res__bagde__fast">
            <AlarmOnIcon className="res__bagde__fast-icon" />
            <p className="res__bagde__fast-title">Fast</p>
          </div>
        </div>
      </div>
      <div className="res__logo">
        <img src={ResLogo1} alt="" className="res__logo-img" />
        <div className="res__logo-info">
          <h4>Foodworld</h4>
          <div className="res__logo-rate">
            <Star className="res__logo-icon" /> <span>40</span>
          </div>
        </div>
      </div>
      <div className="res__text">
        <div className="res__remaining">Open tomorrow</div>
      </div>
    </div>
  );
};

export default RestaurantItem;
