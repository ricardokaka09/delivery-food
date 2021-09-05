import React from "react";
import PropTypes from "prop-types";
import Nav from "./Nav";
import MotorcycleIcon from "@material-ui/icons/Motorcycle";
import LockIcon from "@material-ui/icons/Lock";
import Button from "@material-ui/core/Button";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import img from "../../style/img/Image_header.png";
import ViewButton from "../../components/ViewButton";
import header__img__shadow from "../../style/img/shadow-bg-header.png";
const Header: React.FC = (props) => {
  return (
    <section className="header">
      {/* <Nav /> */}
      <div className="header-bottom">
        <div className="header__option">
          <h2>Are you staving?</h2>
          <p>Within a few click , find meals that are accessible near you</p>
          <div className="form">
            <div className="form__top">
              <div className="delivery">
                <MotorcycleIcon className="delivery-icon" />
                <span>Delivery</span>
              </div>
              <div className="pickup delivery-active">
                <LockIcon className="delivery-icon" />
                <span>Pickup</span>
              </div>
            </div>
            <div className="form__input form__input-search">
              <LocationOnIcon />
              <input
                className="form__input-email form__input-email-header"
                type="text"
                name="Email"
                id=""
                placeholder="Nhap email"
              />
              <ViewButton type="viewButton__find" title="Find Food" />
            </div>
          </div>
        </div>
        <div className="header__img">
          <img src={img} alt="" className="img" />
          <img src={header__img__shadow} alt="" className="img img-shadow" />
        </div>
      </div>
    </section>
  );
};

Header.propTypes = {};

export default Header;
