import React from "react";
import logo from "../../style/img/logo.png";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { SearchOutlined } from "@material-ui/icons";
import PersonIcon from "@material-ui/icons/Person";
import { Link } from "react-router-dom";
const Nav: React.FC = () => {
  return (
    <header>
      <div className="nav">
        <div className="logo layout">
          <Link to="/">
            <img src={logo} alt="" />
            <h3>
              food{" "}
              <span>
                wa<span className="G">G</span>on
              </span>
            </h3>
          </Link>
        </div>
        <div className="location layout">
          <h3 className="location__text">Deliver to :</h3>
          <LocationOnIcon className="location__icon" />
          <h3 className="location__text"> Duong Hoang Hoa Thám ,Tp.Da Nang</h3>
        </div>
        <div className="form layout">
          <SearchOutlined />
          <h4>Search Food</h4>
          <Link to="/login">
            <div className="login">
              <PersonIcon />
              <span>Login</span>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Nav;
