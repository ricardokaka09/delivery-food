import React from "react";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import photo1 from "../../style/img/order-1.png";
import DeleteIcon from "@material-ui/icons/Delete";

const CheckoutItem = () => {
  return (
    <div className="checkoutItem">
      <figure className="checkoutItem__shape">
        <img src={photo1} alt="" className="checkoutItem__shape-photo" />
        <figcaption className="checkoutItem__shape-caption">
          ten san phâm
        </figcaption>
      </figure>
      <div className="checkoutItem__price"></div>
      <div className="checkoutItem__quantity">
        <RemoveIcon className="checkoutItem__quatity-icon" />
        <span>1</span>
        <AddIcon className="checkoutItem__quatity-icon" />
      </div>
      <div className="checkoutItem__remove">
        <DeleteIcon className="checkoutItem__remove-icon" />
      </div>
    </div>
  );
};

export default CheckoutItem;
