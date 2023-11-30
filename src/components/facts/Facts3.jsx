import { useEffect, useState } from "react";
import CountUp from "react-countup";
import boats from "../../assets/images/resources/misc/boats.jpg";

import useWOW from "../../custom-hooks/useWOW";

const Facts3 = () => {
  const [counter, setCounter] = useState(0);

  const { initWOW } = useWOW();
  useEffect(() => {
    initWOW();
  }, []);
  useEffect(() => {
    if (counter < 120) {
      const interval = setInterval(() => {
        setCounter((prev) => prev + 1);
      }, 10);
      return () => clearInterval(interval);
    }
  }, [counter]);

  return (
    <>
      {/* <!--Facts Section--> */}
      <div className="facts-section">
        {/* <div className="video-box wow fadeInUp">
          <div className="image-box">
            <img src={boats} alt="" title="" />
            <a
              href="https://www.youtube.com/watch?v=ZETY_l3GVQg&autoplay=1"
              className="lightbox-image vid-btn"
            >
              <span className="icon fa fa-play">
                <i className="ripple"></i>
              </span>
            </a>
          </div>
        </div> */}
        <div className="auto-container">
          <div className="fact-counter">
            <div className="row clearfix">
              <div className="fact-block col-lg-3 col-md-6 col-sm-12">
                <div className="inner clearfix">
                  <div className="fact-count">
                    <div className="count-box">
                      <span className="count-text">
                        {/* <CountUp end={120} /> */}
                        {counter}
                      </span>
                      <i>+</i>
                    </div>
                  </div>
                  <div className="fact-title">
                    Total <br />
                    Destination
                  </div>
                </div>
              </div>
              {/* <!-- .fact-block --> */}

              <div className="fact-block col-lg-3 col-md-6 col-sm-12">
                <div className="inner clearfix">
                  <div className="fact-count">
                    <div className="count-box">
                      <span className="count-text">
                        <CountUp end={500} />
                      </span>
                      <i>+</i>
                    </div>
                  </div>
                  <div className="fact-title">
                    Travel <br />
                    Packages
                  </div>
                </div>
              </div>
              {/* <!-- .fact-block --> */}

              <div className="fact-block col-lg-3 col-md-6 col-sm-12">
                <div className="inner clearfix">
                  <div className="fact-count">
                    <div className="count-box">
                      <span className="count-text">
                        <CountUp end={12} />
                      </span>
                      K<i>+</i>
                    </div>
                  </div>
                  <div className="fact-title">
                    Total <br />
                    Travelers
                  </div>
                </div>
              </div>
              {/* <!-- .fact-block --> */}

              <div className="fact-block col-lg-3 col-md-6 col-sm-12">
                <div className="inner clearfix">
                  <div className="fact-count">
                    <div className="count-box">
                      <span
                        className="count-text"
                        data-stop="7"
                        data-speed="2000"
                      >
                        <CountUp end={7} />
                      </span>
                      K<i>+</i>
                    </div>
                  </div>
                  <div className="fact-title">
                    Positive <br />
                    Reviews
                  </div>
                </div>
              </div>
              {/* <!-- .fact-block --> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Facts3;
