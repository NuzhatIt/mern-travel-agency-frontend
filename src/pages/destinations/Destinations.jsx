import React from "react";
import Navbar3 from "../../components/navbar/Navbar3";
import Footer3 from "../../components/footer/Footer3";

import banner6 from "../../assets/images/resources/featured/banner-6.jpg";

import bali from "../../assets/images/resources/destinations/bali.jpg";
import giza from "../../assets/images/resources/destinations/giza.jpg";
import muttrah from "../../assets/images/resources/destinations/muttrah.jpg";
import miami from "../../assets/images/resources/destinations/miami.jpg";
import beijing from "../../assets/images/resources/destinations/beijing.jpg";
import agra from "../../assets/images/resources/destinations/agra.jpg";
import dubai from "../../assets/images/resources/destinations/dubai.jpg";
import singapore from "../../assets/images/resources/destinations/singapore.jpg";
import taghazout from "../../assets/images/resources/destinations/taghazout.jpg";
import london from "../../assets/images/resources/destinations/london.jpg";
import berlin from "../../assets/images/resources/destinations/berlin.jpg";
import ghorem from "../../assets/images/resources/destinations/ghorem.jpg";
import Navbar3 from './../../components/navbar/Navbar3';
import WhatsAppChat from './../../components/whatsapp/WhatsappChat';
import ScrollToTop from './../../components/scroll-to-top/ScrollToTop';
import Footer3 from './../../components/footer/Footer3';

const Destinations = () => {
  return (
    <div className="page-wrapper">
      <Navbar3 />
      <WhatsAppChat />
      <ScrollToTop />
      {/* Banner Section */}
      <section className="inner-banner">
        <div
          className="image-layer"
          style={{
            backgroundImage: `url(${banner6})`,
          }}
        ></div>
        <div className="auto-container">
          <div className="content-box">
            <h1>Destinations</h1>
            <div className="bread-crumb">
              <ul className="clearfix">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li className="current">Destinations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/*End Banner Section */}

      {/*Destinations Section*/}
      <section className="destinations-two">
        <div className="auto-container">
          <div className="packages">
            <div className="row clearfix">
              {/*Block*/}
              <div className="popular-block col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <div className="inner-box">
                  <div className="image-box">
                    <div className="image">
                      <a href="destination-single.html">
                        <img src={giza} alt="Giza" />
                      </a>
                    </div>
                  </div>
                  <div className="hvr-box">
                    <div className="hvr-inner">
                      <h3>
                        <a href="destination-single.html">Giza</a>
                      </h3>
                      <div className="info">
                        <span>20 Hotel</span> <span>30 Tours</span>{" "}
                        <span>10 Cars</span> <span>18 Flights</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*Block*/}
              <div className="popular-block col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <div className="inner-box">
                  <div className="image-box">
                    <div className="image">
                      <a href="destination-single.html">
                        <img src={muttrah} alt="Muttrah" />
                      </a>
                    </div>
                  </div>
                  <div className="hvr-box">
                    <div className="hvr-inner">
                      <h3>
                        <a href="destination-single.html">Muttrah</a>
                      </h3>
                      <div className="info">
                        <span>55 Hotel</span> <span>48 Tours</span>{" "}
                        <span>7 Cars</span> <span>70 Flights</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*Block*/}
              <div className="popular-block col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <div className="inner-box">
                  <div className="image-box">
                    <div className="image">
                      <a href="destination-single.html">
                        <img src={miami} alt="Miami" />
                      </a>
                    </div>
                  </div>
                  <div className="hvr-box">
                    <div className="hvr-inner">
                      <h3>
                        <a href="destination-single.html">Maiami</a>
                      </h3>
                      <div className="info">
                        <span>48 Hotel</span> <span>14 Tours</span>{" "}
                        <span>8 Cars</span> <span>30 Flights</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*Block*/}
              <div className="popular-block col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <div className="inner-box">
                  <div className="image-box">
                    <div className="image">
                      <a href="destination-single.html">
                        <img src={beijing} alt="Beijing" />
                      </a>
                    </div>
                  </div>
                  <div className="hvr-box">
                    <div className="hvr-inner">
                      <h3>
                        <a href="destination-single.html">Beijing</a>
                      </h3>
                      <div className="info">
                        <span>70 Hotel</span> <span>90 Tours</span>{" "}
                        <span>25 Cars</span> <span>35 Flights</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*Block*/}
              <div className="popular-block col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <div className="inner-box">
                  <div className="image-box">
                    <div className="image">
                      <a href="destination-single.html">
                        <img src={agra} alt="Agra" />
                      </a>
                    </div>
                  </div>
                  <div className="hvr-box">
                    <div className="hvr-inner">
                      <h3>
                        <a href="destination-single.html">Agra</a>
                      </h3>
                      <div className="info">
                        <span>15 Hotel</span> <span>38 Tours</span>{" "}
                        <span>7 Cars</span> <span>22 Flights</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*Block*/}
              <div className="popular-block col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <div className="inner-box">
                  <div className="image-box">
                    <div className="image">
                      <a href="destination-single.html">
                        <img src={dubai} alt="Dubai" />
                      </a>
                    </div>
                  </div>
                  <div className="hvr-box">
                    <div className="hvr-inner">
                      <h3>
                        <a href="destination-single.html">Dubai</a>
                      </h3>
                      <div className="info">
                        <span>90 Hotel</span> <span>100 Tours</span>{" "}
                        <span>30 Cars</span> <span>35 Flights</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*Block*/}
              <div className="popular-block col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <div className="inner-box">
                  <div className="image-box">
                    <div className="image">
                      <a href="destination-single.html">
                        <img src={taghazout} alt="Taghazout" />
                      </a>
                    </div>
                  </div>
                  <div className="hvr-box">
                    <div className="hvr-inner">
                      <h3>
                        <a href="destination-single.html">Taghazout</a>
                      </h3>
                      <div className="info">
                        <span>12 Hotel</span> <span>25 Tours</span>{" "}
                        <span>8 Cars</span> <span>27 Flights</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*Block*/}
              <div className="popular-block col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <div className="inner-box">
                  <div className="image-box">
                    <div className="image">
                      <a href="destination-single.html">
                        <img src={london} alt="London" />
                      </a>
                    </div>
                  </div>
                  <div className="hvr-box">
                    <div className="hvr-inner">
                      <h3>
                        <a href="destination-single.html">London</a>
                      </h3>
                      <div className="info">
                        <span>78 Hotel</span> <span>45 Tours</span>{" "}
                        <span>32 Cars</span> <span>40 Flights</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*Block*/}
              <div className="popular-block col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <div className="inner-box">
                  <div className="image-box">
                    <div className="image">
                      <a href="destination-single.html">
                        <img src={singapore} alt="Singapore" />
                      </a>
                    </div>
                  </div>
                  <div className="hvr-box">
                    <div className="hvr-inner">
                      <h3>
                        <a href="destination-single.html">Singapore</a>
                      </h3>
                      <div className="info">
                        <span>100 Hotel</span> <span>70 Tours</span>{" "}
                        <span>80 Cars</span> <span>45 Flights</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*Block*/}
              <div className="popular-block col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <div className="inner-box">
                  <div className="image-box">
                    <div className="image">
                      <a href="destination-single.html">
                        <img src={berlin} alt="Berlin" />
                      </a>
                    </div>
                  </div>
                  <div className="hvr-box">
                    <div className="hvr-inner">
                      <h3>
                        <a href="destination-single.html">Berlin</a>
                      </h3>
                      <div className="info">
                        <span>66 Hotel</span> <span>77 Tours</span>{" "}
                        <span>33 Cars</span> <span>44 Flights</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*Block*/}
              <div className="popular-block col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <div className="inner-box">
                  <div className="image-box">
                    <div className="image">
                      <a href="destination-single.html">
                        <img src={ghorem} alt="Ghorem" />
                      </a>
                    </div>
                  </div>
                  <div className="hvr-box">
                    <div className="hvr-inner">
                      <h3>
                        <a href="destination-single.html">Ghorem</a>
                      </h3>
                      <div className="info">
                        <span>76 Hotel</span> <span>120 Tours</span>{" "}
                        <span>50 Cars</span> <span>35 Flights</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*Block*/}
              <div className="popular-block col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <div className="inner-box">
                  <div className="image-box">
                    <div className="image">
                      <a href="destination-single.html">
                        <img src={bali} alt="Bali" />
                      </a>
                    </div>
                  </div>
                  <div className="hvr-box">
                    <div className="hvr-inner">
                      <h3>
                        <a href="destination-single.html">Bali</a>
                      </h3>
                      <div className="info">
                        <span>45 Hotel</span> <span>57 Tours</span>{" "}
                        <span>29 Cars</span> <span>26 Flights</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="styled-pagination centered">
              <ul className="clearfix">
                <li className="active">
                  <a href="#">1</a>
                </li>
                <li>
                  <a href="#">2</a>
                </li>
                <li>
                  <a href="#">3</a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-solid fa-angle-right" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer3 />
    </div>
  );
};

export default Destinations;
