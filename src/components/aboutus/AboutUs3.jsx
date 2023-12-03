import { useEffect } from "react";
import bgGradient2 from "../../assets/images/background/bg-gradient-2.png";
import bgGradient26 from "../../assets/images/background/bg-gradient-26.png";
import green1 from "../../assets/images/elements/green-1.png";
import pink4 from "../../assets/images/elements/pink-4.png";
import yellow3 from "../../assets/images/elements/yellow-3.png";
import fIcon1 from "../../assets/images/icons/f-icon-1.png";
import fIcon2 from "../../assets/images/icons/f-icon-2.png";
import manHiking2 from "../../assets/images/resources/misc/man-hiking-2.jpg";
import tickets from "../../assets/images/resources/misc/tickets.jpg";

import useWOW from "../../custom-hooks/useWOW";

const AboutUs3 = () => {
  const { initWOW } = useWOW();
  useEffect(() => {
    initWOW();
  }, []);
  return (
    <>
      {/* <!--About Us Section--> */}
      <div className="about-section">
        <div className="bg-grad-right">
          <img src={bgGradient2} alt="" title="" />
        </div>
        <div className="auto-container">
          <div className="row clearfix">
            {/* <!--Text Col--> */}
            <div className="text-col col-lg-6 col-md-12 col-sm-12">
              <div
                className="inner wow fadeInRight"
                data-wow-duration="1500ms"
                data-wow-delay="0ms"
              >
                <div className="d-elem-1">
                  <img src={green1} alt="" />
                </div>
                <div className="title-box">
                  <div className="subtitle">Let's Explore the World</div>
                  <h2>
                    <span>We Make Your Travel More Enjoyable</span>
                  </h2>
                  <p className="travilo-text">
                    Embrace a worry-free travel experience with us as we strive
                    to make your journey more enjoyable. From seamless
                    itineraries to handpicked accommodations, we take care of
                    every detail, leaving you free to savor every moment and
                    create unforgettable memories.
                  </p>
                </div>
                <div className="features">
                  <div className="row clearfix">
                    <div className="f-block col-lg-6 col-md-6 col-sm-12">
                      <div className="inner-box">
                        <div className="icon">
                          <img src={fIcon1} alt="" />
                        </div>
                        <h6>Award winning tour & travel arranger</h6>
                      </div>
                    </div>
                    <div className="f-block col-lg-6 col-md-6 col-sm-12">
                      <div className="inner-box">
                        <div className="icon">
                          <img src={fIcon2} alt="" />
                        </div>
                        <h6>Most popular booking solution provider</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lower-text">
                  <div className="travilo-text">
                    <ul>
                      <li>
                        Personalized Itineraries: Tailored to your preferences
                        and interests.
                      </li>
                      <li>
                        Hand picked premium Accommodations that guarantee
                        comfort and relaxation.
                      </li>
                      <li>
                        Dedicated 24/7 support team ready to assist you at any
                        moment.
                      </li>
                    </ul>
                  </div>
                  <div className="link-box">
                    <a href="#" className="theme-btn btn-style-one">
                      <span>Read More</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--Image Col--> */}
            <div className="image-col col-lg-6 col-md-12 col-sm-12">
              <div
                className="inner wow fadeInLeft"
                data-wow-duration="1500ms"
                data-wow-delay="0ms"
              >
                <div className="bg-grad-left">
                  <img src={bgGradient26} alt="" title="" />
                </div>
                <div className="d-elem-1">
                  <img src={yellow3} alt="" />
                </div>
                <div className="d-elem-2">
                  <img src={pink4} alt="" />
                </div>
                <div className="image-box clearfix">
                  <div className="image">
                    <img src={tickets} alt="Tickets" title="Tickets" />
                  </div>
                  <div className="image">
                    <img src={manHiking2} alt="" title="" />
                  </div>
                </div>
                <div className="exp">
                  <span className="count">10</span> Successful <br />
                  Years
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs3;
