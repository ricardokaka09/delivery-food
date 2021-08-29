import React, { useEffect, useState } from "react";
import marker from "../../style/img/MapMarker.png";
import menu from "../../style/img/Menu.png";
import invoice from "../../style/img/Invoice.png";
import donut from "../../style/img/Donut.png";

interface Type {
  type: string;
}
const WorkItem: React.FC<Type> = ({ type }) => {
  useEffect(() => {}, []);
  return (
    <div className="work">
      <img
        src={
          type === "MapMarker"
            ? marker
            : type === "Menu"
            ? menu
            : type === "Invoice"
            ? invoice
            : type === "Donut"
            ? donut
            : ""
        }
        alt=""
      />
      <div className="work__text">
        <h3 className="work__title">Section Location</h3>
        <p className="work__body">
          Choose the location where your food will be delivered
        </p>
      </div>
    </div>
  );
};

export default WorkItem;
