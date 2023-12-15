import partner1 from "../../assets/images/partners/partner-1-white.png";
import partner2 from "../../assets/images/partners/partner-2-white.png";
import partner3 from "../../assets/images/partners/partner-3-white.png";
import partner4 from "../../assets/images/partners/partner-4-white.png";
import partner5 from "../../assets/images/partners/partner-5-white.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Partners3 = () => {
  const settings = {
    // dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    pauseOnFocus: true,
    // nextArrow: <Arrow />,
    // prevArrow: <Arrow />,
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
      {/* <!-- Partners Section --> */}
      <div className="partners-section">
        <div className="auto-container">
          <div className="carousel-box">
            <div className="partners-carousel">
              <Slider {...settings}>
                {/* <!--Block--> */}
                <div className="partner-block">
                  <div className="image">
                    <a href="#">
                      <img src={partner1} alt="" />
                    </a>
                  </div>
                </div>
                {/* <!-- .partner-block --> */}

                {/* <!--Block--> */}
                <div className="partner-block">
                  <div className="image">
                    <a href="#">
                      <img src={partner2} alt="" />
                    </a>
                  </div>
                </div>
                {/* <!-- .partner-block --> */}

                {/* <!--Block--> */}
                <div className="partner-block">
                  <div className="image">
                    <a href="#">
                      <img src={partner3} alt="" />
                    </a>
                  </div>
                </div>
                {/* <!-- .partner-block --> */}

                {/* <!--Block--> */}
                <div className="partner-block">
                  <div className="image">
                    <a href="#">
                      <img src={partner4} alt="" />
                    </a>
                  </div>
                </div>
                {/* <!-- .partner-block --> */}

                {/* <!--Block--> */}
                <div className="partner-block">
                  <div className="image">
                    <a href="#">
                      <img src={partner5} alt="" />
                    </a>
                  </div>
                </div>
                {/* <!-- .partner-block --> */}

                {/* <!--Block--> */}
                <div className="partner-block">
                  <div className="image">
                    <a href="#">
                      <img src={partner1} alt="" />
                    </a>
                  </div>
                </div>
                {/* <!-- .partner-block --> */}

                {/* <!--Block--> */}
                <div className="partner-block">
                  <div className="image">
                    <a href="#">
                      <img src={partner2} alt="" />
                    </a>
                  </div>
                </div>
                {/* <!-- .partner-block --> */}

                {/* <!--Block--> */}
                <div className="partner-block">
                  <div className="image">
                    <a href="#">
                      <img src={partner3} alt="" />
                    </a>
                  </div>
                </div>
                {/* <!-- .partner-block --> */}

                {/* <!--Block--> */}
                <div className="partner-block">
                  <div className="image">
                    <a href="#">
                      <img src={partner4} alt="" />
                    </a>
                  </div>
                </div>
                {/* <!-- .partner-block --> */}

                {/* <!--Block--> */}
                <div className="partner-block">
                  <div className="image">
                    <a href="#">
                      <img src={partner5} alt="" />
                    </a>
                  </div>
                </div>
                {/* <!-- .partner-block --> */}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Partners3;
