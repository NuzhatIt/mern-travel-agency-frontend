import { useEffect } from "react";

import bgGradient7 from "../../assets/images/background/bg-gradient-7.png";
import bgGradient8 from "../../assets/images/background/bg-gradient-8.png";

import pink2 from "../../assets/images/elements/pink-2.png";
import testimonial1 from "../../assets/images/resources/thumbnails/testi-1.jpg";
import testimonial2 from "../../assets/images/resources/thumbnails/testi-2.jpg";
import testimonial3 from "../../assets/images/resources/thumbnails/testi-3.jpg";
import testimonial4 from "../../assets/images/resources/thumbnails/testi-4.jpg";
import testimonial5 from "../../assets/images/resources/thumbnails/testi-5.jpg";
import testimonial6 from "../../assets/images/resources/thumbnails/testi-6.jpg";
import testimonial7 from "../../assets/images/resources/thumbnails/testi-7.jpg";
import testimonial8 from "../../assets/images/resources/thumbnails/testi-8.jpg";
import testimonial9 from "../../assets/images/resources/thumbnails/testi-9.jpg";

import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import WOW from "wow.js";
import "wowjs/css/libs/animate.css";
import "../../assets/css/style.css";

import "../../assets/css/style.css";

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

const Testimonial3 = () => {
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
    <>
      {/* <!--Testimonials Section--> */}
      <div className="testimonials-section">
        <div className="auto-container">
          <div className="title-box centered">
            <div className="subtitle">Testimonials</div>
            <h2>
              <span>What Travelers Say</span>
            </h2>
          </div>

          <div
            className="carousel-box wow fadeInUp"
            data-wow-delay="0ms"
            data-wow-duration="1500ms"
          >
            <div className="bg-grad-left">
              <img src={bgGradient8} alt="" title="" />
            </div>
            <div className="bg-grad-right">
              <img src={bgGradient7} alt="" title="" />
            </div>
            <div className="d-elem-1">
              <img src={pink2} alt="" />
            </div>
            <div className="testimonial-carousel">
              {/* <!--Block--> */}
              <Slider {...settings}>
                <div className="testi-block-one">
                  <div className="inner-box">
                    <div className="icon">
                      <span className="flaticon-left-quote"></span>
                    </div>
                    <p className="travilo-text">
                      Wow! This travel website made our vacation planning a
                      breeze! From finding the best hotels to booking local
                      tours, everything was seamless and hassle-free. We had an
                      unforgettable trip and can't wait to use this service
                      again!
                    </p>
                    <div className="info">
                      <div className="image">
                        <img src={testimonial1} alt="Testimonial 1" />
                      </div>
                      <div className="rating">
                        <div className="stars">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                      </div>
                      <div className="name">David Hustler</div>
                      <div className="designation">Solo Traveler</div>
                    </div>
                  </div>
                </div>
                {/* <!-- .testi-block-one --> */}

                {/* <!--Block--> */}
                <div className="testi-block-one">
                  <div className="inner-box">
                    <div className="icon">
                      <span className="flaticon-left-quote"></span>
                    </div>
                    <p className="travilo-text">
                      Thank you for the fantastic experience! The personalized
                      itinerary and insider tips helped us discover hidden gems
                      in Japan. Our trip wouldn't have been the same without
                      your expert guidance. Highly recommend!
                    </p>
                    <div className="info">
                      <div className="image">
                        <img src={testimonial2} alt="Testimonial 2" />
                      </div>
                      <div className="rating">
                        <div className="stars">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                      </div>
                      <div className="name">Mike Anderson</div>
                      <div className="designation">Journalist</div>
                    </div>
                  </div>
                </div>
                {/* <!-- .testi-block-one --> */}

                {/* <!--Block--> */}
                <div className="testi-block-one">
                  <div className="inner-box">
                    <div className="icon">
                      <span className="flaticon-left-quote"></span>
                    </div>
                    <p className="travilo-text">
                      World-class service indeed! The team went above and beyond
                      to accommodate our requests and ensure every aspect of our
                      journey was perfect. We felt like VIPs throughout our
                      vacation. Truly outstanding!
                    </p>
                    <div className="info">
                      <div className="image">
                        <img src={testimonial3} alt="Testimonial 3" />
                      </div>
                      <div className="rating">
                        <div className="stars">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                      </div>
                      <div className="name">Peter Rushfold</div>
                      <div className="designation">Photographer</div>
                    </div>
                  </div>
                </div>
                {/* <!-- .testi-block-one --> */}

                {/* <!--Block--> */}
                <div className="testi-block-one">
                  <div className="inner-box">
                    <div className="icon">
                      <span className="flaticon-left-quote"></span>
                    </div>
                    <p className="travilo-text">
                      As a solo traveler, safety was paramount for me. I'm
                      grateful for the total secured travel measures implemented
                      by this website. It gave me the confidence to explore new
                      destinations worry-free. Can't wait for my next adventure!
                    </p>
                    <div className="info">
                      <div className="image">
                        <img src={testimonial4} alt="Testimonial 4" />
                      </div>
                      <div className="rating">
                        <div className="stars">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                      </div>
                      <div className="name">Ritchard Covey</div>
                      <div className="designation">Solo Adventurist</div>
                    </div>
                  </div>
                </div>
                {/* <!-- .testi-block-one --> */}

                {/* <!--Block--> */}
                <div className="testi-block-one">
                  <div className="inner-box">
                    <div className="icon">
                      <span className="flaticon-left-quote"></span>
                    </div>
                    <p className="travilo-text">
                      Easy booking options made planning our family vacation a
                      joy. The website's user-friendly interface and extensive
                      choices catered to everyone's preferences, creating a
                      memorable trip for all ages. Highly recommended for
                      families!
                    </p>
                    <div className="info">
                      <div className="image">
                        <img src={testimonial5} alt="Testimonial 5" />
                      </div>
                      <div className="rating">
                        <div className="stars">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                      </div>
                      <div className="name">Tim Smith</div>
                      <div className="designation">Business Man</div>
                    </div>
                  </div>
                </div>
                {/* <!-- .testi-block-one --> */}

                {/* <!--Block--> */}
                <div className="testi-block-one">
                  <div className="inner-box">
                    <div className="icon">
                      <span className="flaticon-left-quote"></span>
                    </div>
                    <p className="travilo-text">
                      We were blown away by the service provided by this travel
                      website. Our trip to Morocco was like a dream come true,
                      with unique experiences and excellent accommodations.
                      Thank you for making our vacation extraordinary!
                    </p>
                    <div className="info">
                      <div className="image">
                        <img src={testimonial6} alt="Testimonial 6" />
                      </div>
                      <div className="rating">
                        <div className="stars">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                      </div>
                      <div className="name">Michael Ford</div>
                      <div className="designation">Teacher</div>
                    </div>
                  </div>
                </div>
                {/* <!-- .testi-block-one --> */}

                {/* <!--Block--> */}
                <div className="testi-block-one">
                  <div className="inner-box">
                    <div className="icon">
                      <span className="flaticon-left-quote"></span>
                    </div>
                    <p className="travilo-text">
                      We couldn't have asked for a better travel agent. Their
                      expertise in creating bespoke itineraries for Brazil's
                      jungle adventure exceeded our expectations. It was an
                      immersive journey into nature we'll cherish forever.
                    </p>
                    <div className="info">
                      <div className="image">
                        <img src={testimonial7} alt="Testimonial 7" />
                      </div>
                      <div className="rating">
                        <div className="stars">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                      </div>
                      <div className="name">Sam Nolan</div>
                      <div className="designation">Engineer</div>
                    </div>
                  </div>
                </div>
                {/* <!-- .testi-block-one --> */}

                {/* <!--Block--> */}
                <div className="testi-block-one">
                  <div className="inner-box">
                    <div className="icon">
                      <span className="flaticon-left-quote"></span>
                    </div>
                    <p className="travilo-text">
                      From the white sandy beaches to the crystal-clear waters,
                      the Maldives trip was pure paradise! This website helped
                      us find the perfect island escape, making it a flawless
                      tropical getaway. I'm recommedning it to all my friends!
                    </p>
                    <div className="info">
                      <div className="image">
                        <img src={testimonial8} alt="Testimonial 8" />
                      </div>
                      <div className="rating">
                        <div className="stars">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                      </div>
                      <div className="name">Carlos Jr.</div>
                      <div className="designation">HR Manager</div>
                    </div>
                  </div>
                </div>
                {/* <!-- .testi-block-one --> */}

                {/* <!--Block--> */}
                <div className="testi-block-one">
                  <div className="inner-box">
                    <div className="icon">
                      <span className="flaticon-left-quote"></span>
                    </div>
                    <p className="travilo-text">
                      Oman was a revelation! Thanks to this travel website, we
                      discovered the true essence of Arabian hospitality and
                      explored ancient wonders. It was an enriching cultural
                      experience we'll forever treasure. Absolutely amazing!
                    </p>
                    <div className="info">
                      <div className="image">
                        <img src={testimonial9} alt="Testimonial 9" />
                      </div>
                      <div className="rating">
                        <div className="stars">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                      </div>
                      <div className="name">Martin Fernandez</div>
                      <div className="designation">Radiologist</div>
                    </div>
                  </div>
                </div>
                {/* <!-- .testi-block-one --> */}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial3;
