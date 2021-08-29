import React from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import PopularItem from "../../components/popular/PopularItem";

const Popular = () => {
  return (
    <section className="popular">
      <h3 className="popular__title">Popular items</h3>
      <div className="popular__body">
        <div className="popular__button next">
          <ArrowBackIosIcon />
        </div>
        <div className="popular__content">
          <PopularItem type="order-1" />
          <PopularItem type="order-2" />
          <PopularItem type="order-3" />
          <PopularItem type="order-4" />
          <PopularItem type="order-5" />
        </div>

        <div className="popular__button prev">
          <ArrowForwardIosIcon />
        </div>
      </div>
    </section>
  );
};

export default Popular;
