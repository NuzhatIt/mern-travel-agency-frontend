import { useEffect } from "react";

import bgGradient6 from "../../assets/images/background/bg-gradient-6.png";
import bgGradient5 from "../../assets/images/background/bg-gradient-5.png";
import purple1 from "../../assets/images/elements/purple-1.png";
import fIcon3 from "../../assets/images/icons/f-icon-3.png";
import fIcon4 from "../../assets/images/icons/f-icon-4.png";
import fIcon5 from "../../assets/images/icons/f-icon-5.png";
import fIcon6 from "../../assets/images/icons/f-icon-6.png";
import yellow2 from "../../assets/images/elements/yellow-2.png";
import manHiking from "../../assets/images/resources/misc/man-hiking.png";

import useWOW from "../../custom-hooks/useWOW";

const WhyUs3 = () => {
  const { initWOW } = useWOW();
  useEffect(() => {
    initWOW();
  }, []);
  return (
    <>
      {/* <!--Why Us Section--> */}
      <div className="why-us">
        <div className="bg-grad-left">
          <img src={bgGradient6} alt="" title="" />
        </div>
        <div className="bg-grad-right">
          <img src={bgGradient5} alt="" title="" />
        </div>
        <div className="auto-container">
          <div className="row clearfix">
            {/* <!--Text Col--> */}
            <div className="text-col col-lg-7 col-md-12 col-sm-12">
              <div
                className="inner wow fadeInRight"
                data-wow-duration="1500ms"
                data-wow-delay="0ms"
              >
                <div className="d-elem-1">
                  <img src={purple1} alt="" />
                </div>
                <div className="title-box">
                  <div className="subtitle">Why Choose Travello</div>
                  <h2>
                    <span>We Let Your Sweet Memory Ever Unforgottable</span>
                  </h2>
                </div>
                <div className="features">
                  <div className="row clearfix">
                    <div className="f-block-two col-lg-6 col-md-6 col-sm-12">
                      <div className="inner-box">
                        <div className="icon">
                          <img src={fIcon3} alt="" />
                        </div>
                        <h4>Expert Travel Agent</h4>
                        <p className="travilo-text">
                          Trust in the guidance of our seasoned travel agents,
                          to curate your perfect journey.
                        </p>
                      </div>
                    </div>
                    {/* <!-- .f-block-two --> */}

                    <div className="f-block-two col-lg-6 col-md-6 col-sm-12">
                      <div className="inner-box">
                        <div className="icon">
                          <img src={fIcon4} alt="" />
                        </div>
                        <h4>Easy Booking Options</h4>
                        <p className="travilo-text">
                          With our user-friendly booking platform, planning your
                          dream vacation becomes a breeze.
                        </p>
                      </div>
                    </div>
                    {/* <!-- .f-block-two --> */}

                    <div className="f-block-two col-lg-6 col-md-6 col-sm-12">
                      <div className="inner-box">
                        <div className="icon">
                          <img src={fIcon5} alt="" />
                        </div>
                        <h4>World Class Service</h4>
                        <p className="travilo-text">
                          Immerse yourself in a world of unparalleled service,
                          for unforgettable travel experience.
                        </p>
                      </div>
                    </div>
                    {/* <!-- .f-block-two --> */}

                    <div className="f-block-two col-lg-6 col-md-6 col-sm-12">
                      <div className="inner-box">
                        <div className="icon">
                          <img src={fIcon6} alt="" />
                        </div>
                        <h4>Total Secured Travel</h4>
                        <p className="travilo-text">
                          Rest assured as we prioritize your safety and peace of
                          mind, your travel is fully protected.
                        </p>
                      </div>
                    </div>
                    {/* <!-- .f-block-two --> */}
                  </div>
                </div>
              </div>
            </div>

            {/* <!--Image Col--> */}
            <div className="image-col col-lg-5 col-md-12 col-sm-12">
              <div
                className="inner wow fadeInLeft"
                data-wow-duration="1500ms"
                data-wow-delay="0ms"
              >
                <div className="d-elem-2">
                  <img src={yellow2} alt="" />
                </div>
                <div className="image-box">
                  <img src={manHiking} alt="" title="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyUs3;
