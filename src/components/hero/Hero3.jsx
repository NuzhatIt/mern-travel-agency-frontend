import { useEffect } from "react";

import bannerArrow from "../../assets/images/background/banner-arrow.png";
import bgGradient1 from "../../assets/images/background/bg-gradient-1.png";
import yellow1 from "../../assets/images/elements/yellow-1.png";
import manWithBag from "../../assets/images/resources/misc/man-with-bag.jpg";

import useWOW from "../../custom-hooks/useWOW";

const Hero3 = () => {
  const { initWOW } = useWOW();
  useEffect(() => {
    initWOW();
  }, []);
  return (
    <>
      {/* <!-- Banner Section --> */}
      <div className="banner-section">
        <div className="banner-container">
          <div
            className="banner-arrow wow slideInLeft"
            data-wow-delay="0ms"
            data-wow-duration="1500ms"
          >
            <img src={bannerArrow} alt="" />
          </div>
          <div className="auto-container">
            <div className="row clearfix">
              <div className="left-col col-lg-6 col-md-12">
                <div className="inner">
                  <div className="clearfix">
                    <div className="content">
                      <div className="bg-image">
                        <img src={bgGradient1} alt="" />
                      </div>
                      <h3>Start Travelling Now</h3>
                      <h1>
                        <i className="d-icon">
                          <img src={yellow1} alt="" title="" />
                        </i>
                        Explore the Top Destination of Planet Earth
                      </h1>
                      <p className="travilo-text">
                        Embrace the journey; Travel with passion and purpose.
                      </p>
                      {/* <div className="form-box site-form"> */}
                        {/* <form method="post" action="index.html">
                          <div className="row clearfix">
                            <div className="form-group col-xl-3 col-lg-6 col-md-6 col-sm-12">
                              <div className="field-label">Destination</div>
                              <div className="field-inner">
                                <input
                                  type="text"
                                  name="field-name"
                                  value=""
                                  placeholder="Where to go?"
                                  required
                                />
                                <i className="alt-icon fa fa-map-marker-alt"></i>
                              </div>
                            </div>
                            <div className="form-group col-xl-3 col-lg-6 col-md-6 col-sm-12">
                              <div className="field-label">Check in</div>
                              <div className="field-inner">
                                <input
                                  className="datepicker"
                                  type="text"
                                  name="field-name"
                                  value=""
                                  placeholder="Check in"
                                  required
                                />
                                <i className="alt-icon fa fa-calendar-alt"></i>
                              </div>
                            </div>
                            <div className="form-group col-xl-3 col-lg-6 col-md-6 col-sm-12">
                              <div className="field-label">Check out</div>
                              <div className="field-inner">
                                <input
                                  className="datepicker"
                                  type="text"
                                  name="field-name"
                                  value=""
                                  placeholder="Check out"
                                  required
                                />
                                <i className="alt-icon fa fa-calendar-alt"></i>
                              </div>
                            </div>
                            <div className="form-group col-xl-3 col-lg-6 col-md-6 col-sm-12">
                              <div className="field-label">Guests</div>
                              <div className="field-inner">
                                <input
                                  type="text"
                                  name="field-name"
                                  value=""
                                  placeholder="Guests"
                                  required
                                />
                                <i className="alt-icon fa fa-user"></i>
                              </div>
                            </div>
                          </div>
                          <button type="submit" className="theme-btn f-btn">
                            <span>
                              Search <i className="fa-solid fa-search"></i>
                            </span>
                          </button>
                        </form> */}
                      {/* </div> */}
                      <p className="lower-text">
                        <span>3200</span> tour packages waiting for you
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right-col col-lg-6 col-md-12">
                <div
                  className="inner wow fadeInRight"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                >
                  <div
                    className="image-layer"
                    style={{ backgroundImage: `url(${manWithBag})` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--End Banner Section --> */}
    </>
  );
};

export default Hero3;
