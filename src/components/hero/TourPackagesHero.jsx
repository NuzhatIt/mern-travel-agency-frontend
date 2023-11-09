import React from "react";
import banner3 from "../../assets/images/resources/featured/banner-3.jpg";

const TourPackagesHero = () => {
  return (
    <div>
      <section className="inner-banner">
        <div
          className="image-layer"
          style={{
            backgroundImage: `url(${banner3})`,
          }}
        ></div>
        <div className="auto-container">
          <div className="content-box">
            <h1>Tour Packages</h1>
            <div className="bread-crumb">
              {/* <ul className="clearfix">
                <li><a href="index.html">Home</a></li>
                <li className="current">Tour Packages</li>
              </ul> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TourPackagesHero;
