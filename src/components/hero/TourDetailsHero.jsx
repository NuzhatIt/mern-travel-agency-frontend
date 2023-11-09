import React from "react";
import featured4 from "../../assets/images/resources/featured/featured-4.jpg";

const TourDetailsHero = () => {
  return (
    <div>
      {/* Banner Section */}
      <div className="tour-single-banner">
        <div
          className="image-layer"
          style={{
            backgroundImage: `url(${featured4})`,
          }}
        />
        <div className="auto-container">
          <div className="content-box">
            <div className="content clearfix">
              <div className="t-type">
                <div className="icon">
                  <img src="assets/images/icons/t-icon-1.png" alt="" />
                </div>
                Tour Type <br />
                <strong>Adventure</strong>
              </div>
              <div className="links">
                <ul className="clearfix">
                  <li>
                    <a href="#">
                      Gallery <i className="far fa-images" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Video <i className="far fa-video-camera" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*End Banner Section */}
    </div>
  );
};

export default TourDetailsHero;
