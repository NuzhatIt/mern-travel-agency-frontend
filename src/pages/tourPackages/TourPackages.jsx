import React from "react";

import tIcon1 from "../../assets/images/icons/t-icon-1.png";
import tIcon2 from "../../assets/images/icons/t-icon-2.png";
import tIcon3 from "../../assets/images/icons/t-icon-3.png";
import tIcon13 from "../../assets/images/icons/t-icon-13.png";
import tIcon12 from "../../assets/images/icons/t-icon-12.png";
import tIcon11 from "../../assets/images/icons/t-icon-11.png";
import tIcon10 from "../../assets/images/icons/t-icon-10.png";
import tIcon8 from "../../assets/images/icons/t-icon-8.png";
import tIcon9 from "../../assets/images/icons/t-icon-9.png";

import kualalamPore from "../../assets/images/resources/destinations/kuala-lumpore.jpg";
import helsinki from "../../assets/images/resources/destinations/helsinki.jpg";
import coron from "../../assets/images/resources/destinations/coron.jpg";
import varenna from "../../assets/images/resources/destinations/varenna.jpg";
import romaPizza from "../../assets/images/resources/destinations/roma-pizza-rome.jpg";
import phuket from "../../assets/images/resources/destinations/surin-beach-phuket.jpg";
import morocco from "../../assets/images/resources/destinations/morocco.jpg";
import egypt from "../../assets/images/resources/destinations/egypt.jpg";
import maldives from "../../assets/images/resources/destinations/maldives.jpg";

import Navbar3 from "../../components/navbar/Navbar3";
import TourPackagesHero from "../../components/hero/TourPackagesHero";
import Footer3 from "../../components/footer/Footer3";

const TourPackages = () => {
  return (
    <div className="page-wrapper">
      <TourPackagesHero />

      {/*Packages Section*/}
      <section className="packages-three">
        {/*Serach One*/}
        <div className="search-one">
          <div className="auto-container">
            <div className="outer">
              <div className="search-title">
                <span>Search for your desired tour package</span>
              </div>
              <div className="form-box site-form">
                <form method="post" action="index.html">
                  <div className="row clearfix">
                    <div className="form-group col-xl-3 col-lg-6 col-md-6 col-sm-12">
                      <div className="field-label">Destination</div>
                      <div className="field-inner">
                        <input
                          type="text"
                          name="field-name"
                          defaultValue=""
                          placeholder="Where to go?"
                          required=""
                        />
                        <i className="alt-icon fa fa-map-marker-alt" />
                      </div>
                    </div>
                    <div className="form-group col-xl-3 col-lg-6 col-md-6 col-sm-12">
                      <div className="field-label">Start</div>
                      <div className="field-inner">
                        <input
                          className="datepicker"
                          type="text"
                          name="field-name"
                          defaultValue=""
                          placeholder="Check in"
                          required=""
                        />
                        <i className="alt-icon fa fa-calendar-alt" />
                      </div>
                    </div>
                    <div className="form-group col-xl-3 col-lg-6 col-md-6 col-sm-12">
                      <div className="field-label">End</div>
                      <div className="field-inner">
                        <input
                          className="datepicker"
                          type="text"
                          name="field-name"
                          defaultValue=""
                          placeholder="Check out"
                          required=""
                        />
                        <i className="alt-icon fa fa-calendar-alt" />
                      </div>
                    </div>
                    <div className="form-group col-xl-3 col-lg-6 col-md-6 col-sm-12">
                      <div className="field-label">Guest</div>
                      <div className="field-inner">
                        <input
                          type="text"
                          name="field-name"
                          defaultValue=""
                          placeholder="Guests"
                          required=""
                        />
                        <i className="alt-icon fa fa-user" />
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="theme-btn f-btn">
                    <span>
                      Search <i className="fa-solid fa-search" />
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="auto-container">
          <div className="packages">
            <div className="filter-row">
              <div className="clearfix">
                <div className="s-info">
                  Showing results of <strong>1 - 9</strong> of
                  <strong>200</strong> items
                </div>
                <div className="filters clearfix+">
                  <div className="sort-by">
                    <div className="drop-list-one">
                      <div className="inner clearfix">
                        <div className="dropdown-outer open">
                          <a
                            className="btn-box dropdown-toggle"
                            id="dropdownMenu1"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="true"
                            href="#"
                          >
                            Sort <i className="fas fa-angle-down" />
                          </a>
                          <ul
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenu1"
                          >
                            <li>
                              <a href="#">Latest First</a>
                            </li>
                            <li>
                              <a href="#">Price</a>
                            </li>
                            <li>
                              <a href="#">Date: Ascending</a>
                            </li>
                            <li>
                              <a href="#">Date: Descending</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="layout-links clearfix">
                    <a className="active" href="tour-packages.html">
                      <span className="fas fa-th-large" />
                    </a>
                    <a href="tour-list.html">
                      <span className="fas fa-th-list" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row clearfix">
              {/*Block*/}
              <div className="package-block col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image-box">
                    <div className="image">
                      <a href="tour-single.html">
                        <img src={helsinki} alt="Helsinki" />
                      </a>
                    </div>
                  </div>
                  <div className="lower-box">
                    <div className="p-icon">
                      <img src={tIcon1} alt="" />
                      <span className="icon flaticon-adventure" />
                    </div>
                    <div className="location">Helsinki</div>
                    <h5>
                      <a href="tour-single.html">
                        Nordic Elegance and Urban Charms
                      </a>
                    </h5>
                    <div className="info clearfix">
                      <div className="duration">
                        <i className="fa-solid fa-clock" /> 5 Days 6 Nights
                      </div>
                      <div className="persons">
                        <i className="fa-solid fa-user" /> 12
                      </div>
                    </div>
                    <div className="bottom-box clearfix">
                      <div className="rating">
                        <a href="#" className="theme-btn">
                          <i className="fa-solid fa-star" />
                          <strong>4.8</strong> &ensp;
                          <span className="count">4570 Reviews</span>
                        </a>
                      </div>
                      <div className="price">
                        Start from &ensp;<span className="amount">$399</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*Block*/}
              <div className="package-block col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image-box">
                    <div className="image">
                      <a href="tour-single.html">
                        <img src={kualalamPore} alt="Kuala Lumpore" />
                      </a>
                    </div>
                  </div>
                  <div className="lower-box">
                    <div className="p-icon">
                      <img src={tIcon2} alt="" />
                      <span className="icon flaticon-hiking" />
                    </div>
                    <div className="location">Kuala Lumpore</div>
                    <h5>
                      <a href="tour-single.html">
                        Embrace Skylines and Heritage in Kuala Lumpur
                      </a>
                    </h5>
                    <div className="info clearfix">
                      <div className="duration">
                        <i className="fa-solid fa-clock" /> 5 Days 6 Nights
                      </div>
                      <div className="persons">
                        <i className="fa-solid fa-user" /> 6
                      </div>
                    </div>
                    <div className="bottom-box clearfix">
                      <div className="rating">
                        <a href="#" className="theme-btn">
                          <i className="fa-solid fa-star" />
                          <strong>4.6</strong>&ensp;
                          <span className="count">7865 Reviews</span>
                        </a>
                      </div>
                      <div className="price">
                        Start from &ensp;<span className="amount">$755</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*Block*/}
              <div className="package-block col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image-box">
                    <div className="image">
                      <a href="tour-single.html">
                        <img src={maldives} alt="Maldives" />
                      </a>
                    </div>
                  </div>
                  <div className="lower-box">
                    <div className="p-icon">
                      <img src={tIcon3} alt="" />
                      <span className="icon flaticon-family" />
                    </div>
                    <div className="location">Maldives</div>
                    <h5>
                      <a href="tour-single.html">
                        Unveiling the Serenity of Maldivian Islands
                      </a>
                    </h5>
                    <div className="info clearfix">
                      <div className="duration">
                        <i className="fa-solid fa-clock" /> 6 Days 7 Nights
                      </div>
                      <div className="persons">
                        <i className="fa-solid fa-user" /> 4
                      </div>
                    </div>
                    <div className="bottom-box clearfix">
                      <div className="rating">
                        <a href="#" className="theme-btn">
                          <i className="fa-solid fa-star" />
                          <strong>4.8</strong>&ensp;
                          <span className="count">9678 Reviews</span>
                        </a>
                      </div>
                      <div className="price">
                        Start from &ensp;<span className="amount">$469</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*Block*/}
              <div className="package-block col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image-box">
                    <div className="image">
                      <a href="tour-single.html">
                        <img src={egypt} alt="Egypt" />
                      </a>
                    </div>
                  </div>
                  <div className="lower-box">
                    <div className="p-icon">
                      <img src={tIcon8} alt="" />
                      <span className="icon flaticon-tent-1" />
                    </div>
                    <div className="location">Giza</div>
                    <h5>
                      <a href="tour-single.html">
                        Exploring the Ancient Wonders of Giza
                      </a>
                    </h5>
                    <div className="info clearfix">
                      <div className="duration">
                        <i className="fa-solid fa-clock" /> 10 Days 11 Nights
                      </div>
                      <div className="persons">
                        <i className="fa-solid fa-user" /> 7
                      </div>
                    </div>
                    <div className="bottom-box clearfix">
                      <div className="rating">
                        <a href="#" className="theme-btn">
                          <i className="fa-solid fa-star" />
                          <strong>4.6</strong> &ensp;
                          <span className="count">3210 Reviews</span>
                        </a>
                      </div>
                      <div className="price">
                        Start from &ensp;<span className="amount">$679</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*Block*/}
              <div className="package-block col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image-box">
                    <div className="image">
                      <a href="tour-single.html">
                        <img src={morocco} alt="Morocco" />
                      </a>
                    </div>
                  </div>
                  <div className="lower-box">
                    <div className="p-icon">
                      <img src={tIcon9} alt="" />
                      <span className="icon flaticon-temple" />
                    </div>
                    <div className="location">Marrakech</div>
                    <h5>
                      <a href="tour-single.html">
                        Unraveling the Charms of Morocco's Vibrant City
                      </a>
                    </h5>
                    <div className="info clearfix">
                      <div className="duration">
                        <i className="fa-solid fa-clock" /> 5 Days 6 Nights
                      </div>
                      <div className="persons">
                        <i className="fa-solid fa-user" /> 10
                      </div>
                    </div>
                    <div className="bottom-box clearfix">
                      <div className="rating">
                        <a href="#" className="theme-btn">
                          <i className="fa-solid fa-star" />
                          <strong>4.8</strong> &ensp;
                          <span className="count">3210 Reviews</span>
                        </a>
                      </div>
                      <div className="price">
                        Start from &ensp;<span className="amount">$545</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*Block*/}
              <div className="package-block col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image-box">
                    <div className="image">
                      <a href="tour-single.html">
                        <img src={phuket} alt="Phuket" />
                      </a>
                    </div>
                  </div>
                  <div className="lower-box">
                    <div className="p-icon">
                      <img src={tIcon10} alt="" />
                      <span className="icon flaticon-cycling" />
                    </div>
                    <div className="location">Phuket</div>
                    <h5>
                      <a href="tour-single.html">
                        The Allure of Thailand's Stunning Phuket
                      </a>
                    </h5>
                    <div className="info clearfix">
                      <div className="duration">
                        <i className="fa-solid fa-clock" /> 6 Days 7 Nights
                      </div>
                      <div className="persons">
                        <i className="fa-solid fa-user" /> 4
                      </div>
                    </div>
                    <div className="bottom-box clearfix">
                      <div className="rating">
                        <a href="#" className="theme-btn">
                          <i className="fa-solid fa-star" />
                          <strong>4.5</strong>&ensp;
                          <span className="count">3210 Reviews</span>
                        </a>
                      </div>
                      <div className="price">
                        Start from &ensp;<span className="amount">$515</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*Block*/}
              <div className="package-block col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image-box">
                    <div className="image">
                      <a href="tour-single.html">
                        <img src={romaPizza} alt="Rome Pizza" />
                      </a>
                    </div>
                  </div>
                  <div className="lower-box">
                    <div className="p-icon">
                      <img src={tIcon11} alt="" />
                      <span className="icon flaticon-adventure" />
                    </div>
                    <div className="location">Rome</div>
                    <h5>
                      <a href="tour-single.html">
                        Savoring Authentic Pizza on Charming Streets
                      </a>
                    </h5>
                    <div className="info clearfix">
                      <div className="duration">
                        <i className="fa-solid fa-clock" /> 3 Days 4 Nights
                      </div>
                      <div className="persons">
                        <i className="fa-solid fa-user" /> 5
                      </div>
                    </div>
                    <div className="bottom-box clearfix">
                      <div className="rating">
                        <a href="#" className="theme-btn">
                          <i className="fa-solid fa-star" />
                          <strong>4.8</strong> &ensp;
                          <span className="count">4566 Reviews</span>
                        </a>
                      </div>
                      <div className="price">
                        Start from &ensp;<span className="amount">$225</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*Block*/}
              <div className="package-block col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image-box">
                    <div className="image">
                      <a href="tour-single.html">
                        <img src={varenna} alt="Varenna" />
                      </a>
                    </div>
                  </div>
                  <div className="lower-box">
                    <div className="p-icon">
                      <img src={tIcon12} alt="" />
                      <span className="icon flaticon-hiking" />
                    </div>
                    <div className="location">Varenna</div>
                    <h5>
                      <a href="tour-single.html">
                        A Tranquil Escape on Lake Como in Varenna
                      </a>
                    </h5>
                    <div className="info clearfix">
                      <div className="duration">
                        <i className="fa-solid fa-clock" /> 7 Days 8 Nights
                      </div>
                      <div className="persons">
                        <i className="fa-solid fa-user" /> 6
                      </div>
                    </div>
                    <div className="bottom-box clearfix">
                      <div className="rating">
                        <a href="#" className="theme-btn">
                          <i className="fa-solid fa-star" />
                          <strong>4.9</strong> &ensp;
                          <span className="count">8677 Reviews</span>
                        </a>
                      </div>
                      <div className="price">
                        Start from &ensp;<span className="amount">$699</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*Block*/}
              <div className="package-block col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image-box">
                    <div className="image">
                      <a href="tour-single.html">
                        <img src={coron} alt="Coron" />
                      </a>
                    </div>
                  </div>
                  <div className="lower-box">
                    <div className="p-icon">
                      <img src={tIcon13} alt="" />
                      <span className="icon flaticon-family" />
                    </div>
                    <div className="location">Coron</div>
                    <h5>
                      <a href="tour-single.html">
                        Tropical Paradise of Pristine Beauty
                      </a>
                    </h5>
                    <div className="info clearfix">
                      <div className="duration">
                        <i className="fa-solid fa-clock" /> 8 Days 9 Nights
                      </div>
                      <div className="persons">
                        <i className="fa-solid fa-user" /> 12
                      </div>
                    </div>
                    <div className="bottom-box clearfix">
                      <div className="rating">
                        <a href="#" className="theme-btn">
                          <i className="fa-solid fa-star" />
                          <strong>4.6</strong> &ensp;
                          <span className="count">4544 Reviews</span>
                        </a>
                      </div>
                      <div className="price">
                        Start from &ensp;<span className="amount">$645</span>
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
    </div>
  );
};

export default TourPackages;
