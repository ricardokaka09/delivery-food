import React from "react";
import DownloadButton from "../../components/DownloadButton";
import phone1 from "../../style/img/PhoneShadow1.png";
import phone2 from "../../style/img/PhoneShadow2.png";

const Download = () => {
  return (
    <section className="downloadApp">
      <div className="downloadApp__bg"></div>
      <div className="downloadApp__content">
        <div className="downloadApp__phone">
          <img
            src={phone1}
            alt=""
            className="downloadApp__phone-photo downloadApp__phone-photo-1"
          />
          <img
            src={phone2}
            alt=""
            className="downloadApp__phone-photo downloadApp__phone-photo-2"
          />
        </div>

        <div className="downloadApp__heading">
          <div className="downloadApp__heading-info">
            <h2>Install the app</h2>
            <p>
              It's never been easier to order food. Look for the finest
              discounts and you'll be lost in a world of delectable food.
            </p>
          </div>
          <div className="downloadApp__heading-button">
            <DownloadButton type="googlePlay" name="Google Play" />
            <DownloadButton type="appStore" name="App Store" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
