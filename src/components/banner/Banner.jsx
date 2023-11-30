import React from "react";

const Banner = ({ bannerImage, heading }) => {
  return (
    <div className="inner-banner">
      <div
        className="image-layer"
        style={{
          backgroundImage: `url(${bannerImage})`,
        }}
      ></div>
      <div className="auto-container">
        <div className="content-box">
          <h1>{heading}</h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
