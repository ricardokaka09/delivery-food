import React from "react";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import CategoryItem from "../../components/categories/CategoryItem";
const SearchFood = () => {
  return (
    <section className="searchFood">
      <div className="searchFood__top">
        <h3 className="searchFood__top-title">Search by Food</h3>
        <div className="searchFood__top-option">
          <div className="searchFood__top-viewall">
            View all
            <ChevronRightIcon />
          </div>
          <div className="searchFood__top-button">
            <div className="searchFood__top-button-next">
              <ChevronLeftIcon />
            </div>
            <div className="searchFood__top-button-prev">
              <ChevronRightIcon />
            </div>
          </div>
        </div>
      </div>
      <div className="searchFood__bottom">
        <CategoryItem type="1" title="Pizza" />
        <CategoryItem type="2" title="Burger" />
        <CategoryItem type="3" title="Noodles" />
        <CategoryItem type="4" title="Sandwich" />
        <CategoryItem type="5" title="Chowmein" />
        <CategoryItem type="6" title="Steak" />
      </div>
    </section>
  );
};

export default SearchFood;
