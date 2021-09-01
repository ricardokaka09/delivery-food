import React from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import AlarmIcon from "@material-ui/icons/Alarm";
import StarRateIcon from "@material-ui/icons/StarRate";
import restaurantAvatar from "../../style/img/restaurantsAvatar.png";
import ViewButton from "../../components/ViewButton";
import RestaurantItem from "../../components/featureRes/RestaurantItem";
import PopularItem from "../../components/popular/PopularItem";
const Restaurants = () => {
  return (
    <section className="restaurants">
      <div className="restaurants__top">
        <div className="restaurants__highlight">
          <figure className="restaurants__highlight__shape">
            <img src={restaurantAvatar} alt="" />
          </figure>
          <div className="restaurants__info">
            <div className="restaurants__info-link">
              <ul className="restaurants__info-list">
                <li className="restaurants__info-list-option">
                  <a href="">Home</a>
                </li>
                <li>
                  <ArrowForwardIosIcon />
                </li>
                <li className="restaurants__info-list-option">
                  <a href="">Da Nang</a>
                </li>
                <li>
                  <ArrowForwardIosIcon />
                </li>
                <li>Thien duong cua Soup</li>
              </ul>
            </div>
            <div className="restaurants__info__preview">
              <StarRateIcon className="restaurants__info__preview-icon" />
              <StarRateIcon className="restaurants__info__preview-icon" />
              <StarRateIcon className="restaurants__info__preview-icon" />
              <StarRateIcon className="restaurants__info__preview-icon" />
              <StarRateIcon className="restaurants__info__preview-icon" />
            </div>
            <div className="restaurants__info__address">
              <h3 className="restaurants__info__address-title">
                Trà Sữa Tiên Hưởng Đóng Chai - 46 Nguyễn Văn Nghi
              </h3>
              <p>46 Nguyễn Văn Nghi, P. 5, Gò Vấp, TP. HCM</p>
            </div>
            <div className="restaurants__info__open">
              <p>mo cua</p>
              <div className="restaurants__info__open-time">
                <AlarmIcon></AlarmIcon>
                <p>
                  9:00 <span>- 20:00</span>
                </p>
              </div>
            </div>
            <ViewButton
              type="viewButton__btn viewButton__btn-orderDetail"
              title="Explore now"
            />
          </div>
        </div>
      </div>
      <div className="restaurants__bottom">
        <div className="restaurants__detail">
          <div className="restaurants__detail-category">
            <div className="restaurants__detail-category-title">Danh Muc</div>
            <ul className="restaurants__detail-category-list">
              <li className="restaurants__detail-category-option restaurants__detail-category-option-active">
                Tra sua dong chai
              </li>
              <li className="restaurants__detail-category-option">
                Tra sua dong chai
              </li>
              <li className="restaurants__detail-category-option">
                Tra sua dong chai
              </li>
            </ul>
          </div>
          <div className="restaurants__detail-food">
            <PopularItem type="order-1" name="restaurant__item" />
            <PopularItem type="order-2" name="restaurant__item" />
            <PopularItem type="order-3" name="restaurant__item" />
            <PopularItem type="order-4" name="restaurant__item" />
            <PopularItem type="order-5" name="restaurant__item" />
            <PopularItem type="order-3" name="restaurant__item" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Restaurants;
