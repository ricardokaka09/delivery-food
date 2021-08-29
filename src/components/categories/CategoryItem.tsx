import React from "react";
import pizza from "../../style/img/pizza.png";
import burger from "../../style/img/burger.png";
import noodles from "../../style/img/noodles.png";
import sandwich from "../../style/img/sandwich.png";
import chowmein from "../../style/img/chowmein.png";
import steak from "../../style/img/steak.png";

const CategoryItem: React.FC<{ type: string; title: string }> = ({
  type,
  title,
}) => {
  return (
    <div className="category">
      <figure className="category__shape">
        <img
          src={
            type === "1"
              ? pizza
              : type === "2"
              ? burger
              : type === "3"
              ? noodles
              : type === "4"
              ? sandwich
              : type === "5"
              ? chowmein
              : steak
          }
          alt=""
          className="category__shape__img"
        />
        <figcaption className="category__caption">View</figcaption>
      </figure>
      <h3 className="category__title">{title}</h3>
    </div>
  );
};

export default CategoryItem;
