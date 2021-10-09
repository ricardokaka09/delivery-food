import React, { useRef } from "react";
import deal2 from "../../style/img/Deal-2.png";
import order1 from "../../style/img/order-1.png";
import order2 from "../../style/img/order-2.png";
import order3 from "../../style/img/order-3.png";
import order4 from "../../style/img/order-4.png";
import order5 from "../../style/img/order-5.png";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import {
  LegacyRef,
  Ref,
  RefObject,
} from "hoist-non-react-statics/node_modules/@types/react";
import { Link } from "react-router-dom";

const PopularItem: React.FC<{
  type: string;
  name?: string;
  data_tab?: string;
  refer?: React.RefObject<HTMLDivElement>;
  getSlide?: () => void;
}> = ({ type, name, data_tab, refer, getSlide }) => {
  const myRef = useRef<HTMLDivElement>(null);
  getSlide = () => {
    console.log(refer?.current?.getAttribute("data-tab"));
  };

  return (
    <div
      className={name ? `popular__item popular__item-${name}` : "popular__item"}
      data-tab={data_tab}
      ref={refer}
    >
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
      <Link to="/checkout">
        <button className="popular__item-button">order now</button>
      </Link>
    </div>
  );
};

export default PopularItem;
