import React from "react";
import CityList from "../../components/footer/CityList";
import MailIcon from "@material-ui/icons/Mail";
import ViewButton from "../../components/ViewButton";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <h3>Our Top cities</h3>
        <div className="footer__col">
          <CityList />
          <CityList />
          <CityList />
          <CityList />
          <CityList />
        </div>
      </div>
      <div className="footer__middle">
        <div className="footer__menu">
          <div className="footer__menu-company">
            <h3 className="footer__menu-company-title">Company</h3>
            <ul className="footer__col-1">
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Teams</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
          <div className="footer__menu-company">
            <h3 className="footer__menu-company-title">Contact</h3>
            <ul className="footer__col-1">
              <li>
                <a href="#">Help & Support</a>
              </li>
              <li>
                <a href="#">Partner with us </a>
              </li>
              <li>
                <a href="#">Ride with us</a>
              </li>
            </ul>
          </div>
          <div className="footer__menu-company">
            <h3 className="footer__menu-company-title">Legal</h3>
            <ul className="footer__col-1">
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Refund & Cancellation</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Cookie Policy</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__subcription">
          <h3 className="footer__subcription-title">Follow Us</h3>
          <div className="footer__subcription-icon">
            <FacebookIcon className="footer__subcription-icon-fb" />
            <InstagramIcon className="footer__subcription-icon-insta" />
            <TwitterIcon className="footer__subcription-icon-twitter" />
            <YouTubeIcon className="footer__subcription-icon-youtube" />
            {/* <p>icon1</p> */}
            {/* <p>icon1</p> */}
          </div>
          <p className="footer__subcription-detail">
            Receive exclusive offers in your mailbox
          </p>
          <div className="form__input form__input-footer">
            <MailIcon />
            <input
              className="form__input-email"
              type="text"
              name="Email"
              id=""
              placeholder="Enter Your Email"
            />
            <ViewButton type="viewButton__footer" title="Subcribe" />
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="legal">
          {" "}
          All right reserved. <span> &copy; Hung Dang, 2021</span>
        </div>
        <div className="madeby">
          Made with by <span>&hearts; </span>Dang Cong Hung{" "}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
