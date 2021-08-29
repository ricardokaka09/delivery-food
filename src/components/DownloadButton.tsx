import React from "react";
import googlePlayIcon from "../style/img/Google Play logo.png";
import appstoreIcon from "../style/img/Apple logo.png";

const DownloadButton: React.FC<{ type: string; name: string }> = ({
  type,
  name,
}) => {
  return (
    <div className="button">
      <figure className="button__shape">
        <img
          src={type === "googlePlay" ? googlePlayIcon : appstoreIcon}
          alt=""
          className="button__photo"
        />
      </figure>
      <div className="button__title">
        <p>Get IT ON</p>
        <h3 className="button__title-name">{name}</h3>
      </div>
    </div>
  );
};

export default DownloadButton;
