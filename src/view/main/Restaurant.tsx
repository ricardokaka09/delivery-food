import React from "react";
import RestaurantItem from "../../components/featureRes/RestaurantItem";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ViewButton from "../../components/ViewButton";

const Restaurant = () => {
  return (
    <section className="restaurant">
      <h3 className="restaurant__title">Features Restaurant</h3>
      <div className="restaurant__body">
        <RestaurantItem />
        <RestaurantItem />
        <RestaurantItem />
        <RestaurantItem />
        <RestaurantItem />
        <RestaurantItem />
        <RestaurantItem />
        <RestaurantItem />
      </div>
      <ViewButton
        type="viewButton__btn viewButton__btn-restaurant"
        title="View All"
      />
    </section>
  );
};

export default Restaurant;
