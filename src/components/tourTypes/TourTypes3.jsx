import { useEffect } from "react";

import { PiMountainsThin } from "react-icons/pi";
import { GiHiking } from "react-icons/gi";
import { MdFamilyRestroom } from "react-icons/md";
import { GiByzantinTemple } from "react-icons/gi";

import pattern2 from "../../assets/images/background/pattern-2.png";
import green3 from "../../assets/images/elements/green-3.png";
import pink1 from "../../assets/images/elements/pink-1.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import useWOW from "../../custom-hooks/useWOW";

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "var(--light-purple-color)",
      }}
      onClick={onClick}
    />
  );
}

const TourTypes3 = () => {
  const { initWOW } = useWOW();
  useEffect(() => {
    initWOW();
  }, []);

  const settings = {
    // dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    // initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      {/* <!--Tour Types Section--> */}
      <div className="tour-types">
        <div
          className="bg-layer"
          style={{ backgroundImage: `url(${pattern2})` }}
        ></div>
        <div className="d-elem-2">
          <img src={green3} alt="" />
        </div>
        <div className="auto-container">
          <div
            className="title-box centered wow fadeInUp"
            data-wow-delay="0ms"
            data-wow-duration="1500ms"
          >
            <div className="subtitle">Categories</div>
            <h2>
              <span>Pick A Tour Type</span>
            </h2>
          </div>
          <div
            className="carousel-box wow fadeInUp"
            data-wow-delay="0ms"
            data-wow-duration="1500ms"
          >
            <div className="d-elem-1">
              <img src={pink1} alt="" />
            </div>
            <div className="tour-types-carousel">
              <Slider {...settings}>
                {/* <!--Block--> */}
                <div className="tour-type-block bg-blue">
                  <div className="inner-box">
                    <div className="icon-box">
                      <div className="icon">
                        <a href="#">
                          <span className="icon flaticon-adventure">
                            <PiMountainsThin />
                          </span>
                        </a>
                      </div>
                    </div>
                    <h5>
                      <a href="#">Adventure</a>
                    </h5>
                    <a href="tour-packages.html" className="over-link"></a>
                  </div>
                </div>
                {/* <!--.tour-type-block --> */}

                {/* <!--Block--> */}
                <div className="tour-type-block bg-green">
                  <div className="inner-box">
                    <div className="icon-box">
                      <div className="icon">
                        <a href="#">
                          <span className="icon flaticon-hiking">
                            <GiHiking />
                          </span>
                        </a>
                      </div>
                    </div>
                    <h5>
                      <a href="#">Hiking</a>
                    </h5>
                    <a href="tour-packages.html" className="over-link"></a>
                  </div>
                </div>
                {/* <!--.tour-type-block --> */}

                {/* <!--Block--> */}
                <div className="tour-type-block bg-yellow">
                  <div className="inner-box">
                    <div className="icon-box">
                      <div className="icon">
                        <a href="#">
                          <span className="icon flaticon-family">
                            <MdFamilyRestroom />
                          </span>
                        </a>
                      </div>
                    </div>
                    <h5>
                      <a href="#">Romance</a>
                    </h5>
                    <a href="tour-packages.html" className="over-link"></a>
                  </div>
                </div>
                {/* <!--.tour-type-block --> */}

                {/* <!--Block--> */}
                <div className="tour-type-block bg-red">
                  <div className="inner-box">
                    <div className="icon-box">
                      <div className="icon">
                        <a href="#">
                          <span className="icon flaticon-chinese-temple-1">
                            <GiByzantinTemple />
                          </span>
                        </a>
                      </div>
                    </div>
                    <h5>
                      <a href="#">Culture</a>
                    </h5>
                    <a href="tour-packages.html" className="over-link"></a>
                  </div>
                </div>
                {/* <!--.tour-type-block --> */}

                {/* <!--Block--> */}
                <div className="tour-type-block bg-blue">
                  <div className="inner-box">
                    <div className="icon-box">
                      <div className="icon">
                        <a href="#">
                          <span className="icon flaticon-adventure">
                            <PiMountainsThin />
                          </span>
                        </a>
                      </div>
                    </div>
                    <h5>
                      <a href="#">Adventure</a>
                    </h5>
                    <a href="tour-packages.html" className="over-link"></a>
                  </div>
                </div>
                {/* <!--.tour-type-block --> */}

                {/* <!--Block--> */}
                <div className="tour-type-block bg-green">
                  <div className="inner-box">
                    <div className="icon-box">
                      <div className="icon">
                        <a href="#">
                          <span className="icon flaticon-hiking">
                            <GiHiking />
                          </span>
                        </a>
                      </div>
                    </div>
                    <h5>
                      <a href="#">Hiking</a>
                    </h5>
                    <a href="tour-packages.html" className="over-link"></a>
                  </div>
                </div>
                {/* <!--.tour-type-block --> */}

                {/* <!--Block--> */}
                <div className="tour-type-block bg-yellow">
                  <div className="inner-box">
                    <div className="icon-box">
                      <div className="icon">
                        <a href="#">
                          <span className="icon flaticon-family">
                            <MdFamilyRestroom />
                          </span>
                        </a>
                      </div>
                    </div>
                    <h5>
                      <a href="#">Romance</a>
                    </h5>
                    <a href="tour-packages.html" className="over-link"></a>
                  </div>
                </div>
                {/* <!--.tour-type-block --> */}

                {/* <!--Block--> */}
                <div className="tour-type-block bg-red">
                  <div className="inner-box">
                    <div className="icon-box">
                      <div className="icon">
                        <a href="#">
                          <span className="icon flaticon-chinese-temple-1">
                            <GiByzantinTemple />
                          </span>
                        </a>
                      </div>
                    </div>
                    <h5>
                      <a href="#">Culture</a>
                    </h5>
                    <a href="tour-packages.html" className="over-link"></a>
                  </div>
                </div>
                {/* <!--.tour-type-block --> */}

                {/* <!--Block--> */}
                <div className="tour-type-block bg-blue">
                  <div className="inner-box">
                    <div className="icon-box">
                      <div className="icon">
                        <a href="#">
                          <span className="icon flaticon-adventure">
                            <PiMountainsThin />
                          </span>
                        </a>
                      </div>
                    </div>
                    <h5>
                      <a href="#">Adventure</a>
                    </h5>
                    <a href="tour-packages.html" className="over-link"></a>
                  </div>
                </div>
                {/* <!--.tour-type-block --> */}

                {/* <!--Block--> */}
                <div className="tour-type-block bg-green">
                  <div className="inner-box">
                    <div className="icon-box">
                      <div className="icon">
                        <a href="#">
                          <span className="icon flaticon-hiking">
                            <GiHiking />
                          </span>
                        </a>
                      </div>
                    </div>
                    <h5>
                      <a href="#">Hiking</a>
                    </h5>
                    <a href="tour-packages.html" className="over-link"></a>
                  </div>
                </div>
                {/* <!--.tour-type-block --> */}

                {/* <!--Block--> */}
                <div className="tour-type-block bg-yellow">
                  <div className="inner-box">
                    <div className="icon-box">
                      <div className="icon">
                        <a href="#">
                          <span className="icon flaticon-family">
                            <MdFamilyRestroom />
                          </span>
                        </a>
                      </div>
                    </div>
                    <h5>
                      <a href="#">Romance</a>
                    </h5>
                    <a href="tour-packages.html" className="over-link"></a>
                  </div>
                </div>
                {/* <!--.tour-type-block --> */}

                {/* <!--Block--> */}
                <div className="tour-type-block bg-red">
                  <div className="inner-box">
                    <div className="icon-box">
                      <div className="icon">
                        <a href="#">
                          <span className="icon flaticon-chinese-temple-1">
                            <GiByzantinTemple />
                          </span>
                        </a>
                      </div>
                    </div>
                    <h5>
                      <a href="#">Culture</a>
                    </h5>
                    <a href="tour-packages.html" className="over-link"></a>
                  </div>
                </div>
                {/* <!--.tour-type-block --> */}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TourTypes3;
