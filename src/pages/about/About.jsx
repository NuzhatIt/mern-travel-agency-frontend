import React, { useEffect } from "react";
import AboutUs3 from "../../components/aboutus/AboutUs3";
import Facts3 from "../../components/facts/Facts3";
import Testimonial3 from "../../components/testimonial/Testimonial3";
import Partners3 from "../../components/partners/Partners3";
import News3 from "../../components/news/News3";
import Subscribe3 from "../../components/subscribe/Subscribe3";
import banner6 from "../../assets/images/resources/featured/banner-6.jpg";
import intro4 from "../../assets/images/icons/intro-4.png";
import intro5 from "../../assets/images/icons/intro-5.png";
import intro6 from "../../assets/images/icons/intro-6.png";
import bgGradient23 from "../../assets/images/background/bg-gradient-23.png"
import green4 from "../../assets/images/elements/green-4.png"
import fIcon10 from "../../assets/images/icons/f-icon-10.png"
import fIcon11 from "../../assets/images/icons/f-icon-11.png"
import fIcon12 from "../../assets/images/icons/f-icon-12.png"
import fIcon13 from "../../assets/images/icons/f-icon-13.png"

import Banner from "../../components/banner/Banner";
import useWOW from "../../custom-hooks/useWOW";
import TeamMembers from "../../components/teamMembers/TeamMembers";
import Navbar3 from './../../components/navbar/Navbar3';
import Footer3 from './../../components/footer/Footer3';
import WhatsAppChat from './../../components/whatsapp/WhatsappChat';
import ScrollToTop from './../../components/scroll-to-top/ScrollToTop';

const About = () => {
  const { initWOW } = useWOW();
  useEffect(() => {
    initWOW();
  }, []);
  return (
    <div className="page-wrapper">
      <Navbar3 />
      <WhatsAppChat />
      <ScrollToTop />
      {/* banner section */}
      <Banner bannerImage={banner6} heading="About Us"/>

      <AboutUs3 />

      {/*Intro Section*/}
      <div className="intro-two">
        <div className="auto-container">
          <div className="row clearfix">
            {/*Block*/}
            <div
              className="intro-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <div className="inner-box">
                <div className="icon">
                  <span>
                    <img src={intro4} alt="" />
                  </span>
                </div>
                <h4>Our Mission</h4>
                <div className="travilo-text">
                  to inspire and empower travelers to explore the world with
                  wonder, creating unforgettable experiences.
                </div>
              </div>
            </div>
            {/*Block*/}
            <div
              className="intro-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
              data-wow-delay="300ms"
              data-wow-duration="1500ms"
            >
              <div className="inner-box">
                <div className="icon">
                  <span>
                    <img src={intro5} alt="" />
                  </span>
                </div>
                <h4>Destination Insights</h4>
                <div className="travilo-text">
                  Gain valuable insights into captivating destinations through
                  our comprehensive guides and expert recommendations.
                </div>
              </div>
            </div>
            {/*Block*/}
            <div
              className="intro-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
              data-wow-delay="600ms"
              data-wow-duration="1500ms"
            >
              <div className="inner-box">
                <div className="icon">
                  <span>
                    <img src={intro6} alt="" />
                  </span>
                </div>
                <h4>Tailored Travel Planning</h4>
                <div className="travilo-text">
                  Our website offers personalized travel planning services
                  tailored to your preferences and interests.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Our Speciality Section*/}
      <div className="our-speciality">
        <div className="auto-container">
          <div className="outer-box">
            <div className="bg-grad-left">
              <img
                src={bgGradient23}
                alt=""
                title=""
              />
            </div>
            <div className="row clearfix">
              {/*Text Col*/}
              <div className="title-col col-lg-5 col-md-12 col-sm-12">
                <div
                  className="inner wow fadeInLeft"
                  data-wow-duration="1500ms"
                  data-wow-delay="0ms"
                >
                  <div className="d-elem-1">
                    <img src={green4} alt="" />
                  </div>
                  <div className="title-box">
                    <div className="subtitle">Our Speciality</div>
                    <h2>
                      <span>Your Trusted Travel Partner</span>
                    </h2>
                    <p className="travilo-text">
                      At our travel website, our speciality lies in curating
                      unforgettable experiences that cater to the unique
                      preferences of each traveler. From family vacations to
                      solo adventures, romantic getaways to group escapades, we
                      take pride in offering a diverse range of handpicked
                      destinations and carefully crafted itineraries.
                    </p>
                    <p className="travilo-text">
                      Our team of travel experts is dedicated to staying ahead
                      of the curve, ensuring that we bring you the latest travel
                      trends and hidden gems to explore. Whether it's seeking
                      out off-the-beaten-path activities or securing exclusive
                      deals with our trusted partners, our commitment to
                      excellence ensures that every trip planned through our
                      platform is a journey of a lifetime.
                    </p>
                    <p className="travilo-text">
                      Our 24/7 customer service team is always at your disposal,
                      ready to address any queries or assist with last-minute
                      changes.
                    </p>
                  </div>
                </div>
              </div>
              {/*Content Col*/}
              <div className="content-col col-lg-7 col-md-12 col-sm-12">
                <div
                  className="inner wow fadeInRight"
                  data-wow-duration="1500ms"
                  data-wow-delay="0ms"
                >
                  <div className="features">
                    <div className="row clearfix">
                      <div className="feature col-lg-6 col-md-6 col-sm-12">
                        <div className="inner-box">
                          <div className="icon">
                            <img
                              src={fIcon10}
                              alt=""
                            />
                          </div>
                          <h4>Innovative Tour Plans</h4>
                          <div className="travilo-text">
                            Experience our innovative tour plans designed to
                            take you off the beaten path and uncover hidden
                            gems.
                          </div>
                        </div>
                      </div>
                      <div className="feature col-lg-6 col-md-6 col-sm-12">
                        <div className="inner-box">
                          <div className="icon">
                            <img
                              src={fIcon11}
                              alt=""
                            />
                          </div>
                          <h4>Expert Travel Guide</h4>
                          <div className="travilo-text">
                            Embark on your journey with confidence, guided by
                            our expert travel guides who share their local
                            expertise and insider knowledge.
                          </div>
                        </div>
                      </div>
                      <div className="feature col-lg-6 col-md-6 col-sm-12">
                        <div className="inner-box">
                          <div className="icon">
                            <img
                              src={fIcon12}
                              alt=""
                            />
                          </div>
                          <h4>Flexible Payment Policy</h4>
                          <div className="travilo-text">
                            Travel stress-free with our flexible payment policy
                            that accommodates your needs and preferences.
                          </div>
                        </div>
                      </div>
                      <div className="feature col-lg-6 col-md-6 col-sm-12">
                        <div className="inner-box">
                          <div className="icon">
                            <img
                              src={fIcon13}
                              alt=""
                            />
                          </div>
                          <h4>High Quality Management</h4>
                          <div className="travilo-text">
                            Rest assured that your travel experience is in
                            capable hands with our high-quality management and
                            attention to every detail.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Facts3 />
      {/*Team Section*/}
      <TeamMembers/>
      <Testimonial3 />
      <Partners3 />
      <Subscribe3 />
      <Footer3 />
    </div>
  );
};

export default About;
