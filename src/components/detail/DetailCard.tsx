import React from "react";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import detailCard1 from "../../style/img/DetailCard-1.png";
import detailCard2 from "../../style/img/DetailCard-2.png";
import detailCard3 from "../../style/img/DetailCard-3.png";
import ViewButton from "../ViewButton";

interface detailCard {
  img: string;
  type: string;
  productName: string;
  heading: string;
  describe: string;
}
const DetailCard: React.FC<detailCard> = ({
  img,
  type,
  productName,
  heading,
  describe,
}) => {
  return (
    <div className={`detailCard ${type}`}>
      <figure className="detailCard__photo">
        <img
          src={
            img === "detail-1"
              ? detailCard1
              : img === "detail-2"
              ? detailCard2
              : detailCard3
          }
          alt=""
        />
      </figure>
      <div className="detailCard__describe">
        <div className="detailCard__describe-text">
          <h3>
            {heading}
            <strong>{productName}</strong>
          </h3>
          <p>{describe}</p>
        </div>
        <div className="detailCard__describe-button">
          <ViewButton
            type="viewButton__btn viewButton__btn-orderDetail"
            title="Proceed to order"
          />
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
