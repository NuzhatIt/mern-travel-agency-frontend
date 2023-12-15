import React, { useEffect } from "react";
import WOW from "wow.js";
import "wowjs/css/libs/animate.css";
import bannerArrow from "../../assets/images/background/banner-arrow.png";
import bgGradient1 from "../../assets/images/background/bg-gradient-1.png";
import yellow1 from "../../assets/images/elements/yellow-1.png";
import Test from "../test/test";

const Hero = () => {
  useEffect(() => {
    const wow = new WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: true,
      live: true,
      scrollContainer: null,
      resetAnimation: true,
    });
    wow.init();
  }, []);

  return (
    <div>
      <div className="relative p-0 bg-white">
        <div className="relative">
          <div
            className="wow slideInLeft absolute left-5 bottom-[-160px] z-[5] "
            data-wow-delay="0ms"
            data-wow-duration="1500ms"
          >
            <img src={bannerArrow} alt="" />
          </div>
          <div className="max-w-none p-0">
            <div className="row clearfix">
              <div className="relative p-0 col-lg-6 col-md-12">
                <div className="relative block min-h-[100%] ">
                  <div className="clearfix">
                    <div className="relative block float-right w-full max-w-[680px] pt-[680px] pr-[120px] pb-[200px] pl-[20px]">
                      <div className="absolute left-[-100px] bottom-[-60px]">
                        <img src={bgGradient1} alt="" />
                      </div>
                      <h3>Start Travelling Now</h3>
                      <h1>
                        <i className="absolute right-[-20px] top-[-75px]">
                          <img src={yellow1} alt="" />
                        </i>
                        Explore the Top Destination of Planet Earth
                      </h1>
                      <p className="relative block text-xl mb-[30px] ">
                        Embrace the journey; Travel with passion and purpose.
                      </p>
                      <Test />
                      <div className="relative block bg-white"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
