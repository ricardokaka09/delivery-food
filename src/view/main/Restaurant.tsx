import React from "react";
import RestaurantItem from "../../components/featureRes/RestaurantItem";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ViewButton from "../../components/ViewButton";
import { Link } from "react-router-dom";
import { restaurantFeature } from "../../helpers/getData";

const Restaurant = () => {
  return (
    <section className="restaurant">
      <h3 className="restaurant__title">Features Restaurant</h3>
      <div className="restaurant__body">
        {restaurantFeature.map((item) => (
          <RestaurantItem img={item.img} rate={item.rate} logo={item.logo} />
        ))}
      </div>
      <Link to="/restaurants">
        <ViewButton
          type="viewButton__btn viewButton__btn-restaurant"
          title="View All"
        />
      </Link>
    </section>
  );
};

export default Restaurant;
