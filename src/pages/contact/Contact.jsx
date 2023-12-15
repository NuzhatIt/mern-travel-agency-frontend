import React, { useEffect } from "react";
import banner4 from "../../assets/images/resources/featured/banner-4.jpg";
import useWOW from "../../custom-hooks/useWOW";
import Banner from "../../components/banner/Banner";
import Navbar3 from '../../components/navbar/Navbar3';
import WhatsAppChat from './../../components/whatsapp/WhatsappChat';
import ScrollToTop from './../../components/scroll-to-top/ScrollToTop';
import Footer3 from './../../components/footer/Footer3';

const Contact = () => {
  const { initWOW } = useWOW();
  useEffect(() => {
    initWOW();
  }, []);
  return (
    <div className="page-wrapper">
      <Navbar3 />
      <WhatsAppChat />
      <ScrollToTop />
      {/* Banner Section */}
      <Banner bannerImage={banner4} heading="Contact"/>
      {/*End Banner Section */}

      {/*Contact Section*/}
      <section className="contact-section">
        <div className="auto-container">
          <div className="row clearfix">
            {/*Info Col*/}
            <div className="info-col col-lg-4 col-md-12 col-sm-12">
              <div
                className="inner wow fadeInLeft"
                data-wow-duration="1500ms"
                data-wow-delay="0ms"
              >
                <div className="info">
                  <ul>
                    <li className="location">
                      <i className="icon fa fa-map-marker-alt" />
                      <h5>Location</h5>
                      <div className="travilo-text">
                        20, Love Street, Muscat, Oman
                      </div>
                    </li>
                    <li className="phone">
                      <i className="icon fa-solid fa-phone" />
                      <h5>Phone</h5>
                      <div className="travilo-text">
                        <a href="tel:+96899999000">+968 99999000</a>
                      </div>
                    </li>
                    <li className="email">
                      <i className="icon fa fa-envelope" />
                      <h5>Email</h5>
                      <div className="travilo-text">
                        <a href="mailto:hello@travilo.com">hello@travilo.com</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/*Form Col*/}
            <div className="form-col col-lg-8 col-md-12 col-sm-12">
              <div
                className="inner wow fadeInRight"
                data-wow-duration="1500ms"
                data-wow-delay="0ms"
              >
                <h3>Send Us A Message</h3>
                <div className="form-box site-form">
                  <form method="post" action="sendemail.php" id="contact-form">
                    <div className="row clearfix">
                      <div className="form-group col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div className="field-inner">
                          <input
                            type="text"
                            name="username"
                            defaultValue=""
                            placeholder="Your name"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="form-group col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div className="field-inner">
                          <input
                            type="email"
                            name="email"
                            defaultValue=""
                            placeholder="Your email"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="form-group col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div className="field-inner">
                          <input
                            type="text"
                            name="phone"
                            defaultValue=""
                            placeholder="Your Phone"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="form-group col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div className="field-inner">
                          <input
                            type="text"
                            name="subject"
                            defaultValue=""
                            placeholder="Subject"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="form-group col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <div className="field-inner">
                          <textarea
                            name="message"
                            placeholder="Start writing your message here"
                            required=""
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="form-group col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <button
                          type="submit"
                          className="theme-btn btn-style-one"
                        >
                          <span>Submit Query</span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="map-box">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29242.499927623165!2d58.47333640472832!3d23.628977463737897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2som!4v1691096678627!5m2!1sen!2som"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="map-icon">
              <img src="assets/images/icons/map-marker.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      <Footer3 />
    </div>
  );
};

export default Contact;
