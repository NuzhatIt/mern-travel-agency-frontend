import React from "react";
import Navbar3 from "../../components/navbar/Navbar3";
import TourListHero from "../../components/hero/TourListHero";
import Footer3 from "../../components/footer/Footer3";

import tIcon10 from "../../assets/images/icons/t-icon-10.png";
import bangkok from "../../assets/images/resources/destinations/tours/bangkok.jpg";
import tIcon9 from "../../assets/images/icons/t-icon-9.png";
import varenna from "../../assets/images/resources/destinations/tours/varenna.jpg";
import tIcon8 from "../../assets/images/icons/t-icon-8.png";
import egypt from "../../assets/images/resources/destinations/tours/egypt.jpg";
import tIcon3 from "../../assets/images/icons/t-icon-3.png";
import morocco from "../../assets/images/resources/destinations/tours/morocco.jpg";
import tIcon2 from "../../assets/images/icons/t-icon-2.png";
import rome from "../../assets/images/resources/destinations/tours/rome.jpg";
import tIcon1 from "../../assets/images/icons/t-icon-1.png";
import maldives from "../../assets/images/resources/destinations/tours/maldives.jpg";

const TourList = () => {
  return (
    <div className="page-wrapper">
      <TourListHero />
      <div className="sidebar-container">
        <div className="auto-container">
          <div className="row clearfix">
            {/*Sidebar Side*/}
            <div className="sidebar-side col-xl-4 col-lg-5 col-md-12 col-sm-12">
              <div className="sidebar-inner">
                {/*Widget*/}
                <div className="sb-widget s-widget">
                  <div className="w-inner">
                    <div className="s-title">
                      <i className="fa-solid fa-caret-right" />
                      <h4>Search Packages</h4>
                    </div>
                    <div className="form-box site-form">
                      <form method="post" action="index.html">
                        <div className="form-group">
                          <div className="field-inner">
                            <select name="field-name" className="custom-select">
                              <option>Tour</option>
                              <option>
                                Enchanting Europe, A Journey through Time and
                                Culture
                              </option>
                              <option>
                                Unveiling the Idyllic Paradise of Southeast Asia
                              </option>
                              <option>
                                Exploring Nature's Best in the American National
                                Parks
                              </option>
                              <option>
                                An African Expedition into the Heart of the
                                Savannah
                              </option>
                              <option>
                                A Fascinating Expedition to Egypt and Jordan
                              </option>
                            </select>
                          </div>
                        </div>
                        <div className="form-group">
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
                        <div className="form-group">
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
                        <div className="form-group">
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
                        <div className="form-group">
                          <div className="field-inner">
                            <button type="submit" className="theme-btn f-btn">
                              <span>
                                Search <i className="fa-solid fa-search" />
                              </span>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                {/*Widget  price range*/}
                <div className="sb-widget p-widget">
                  <div className="w-inner">
                    <div className="s-title">
                      <i className="fa-solid fa-caret-right" />
                      <h4>Pricing</h4>
                    </div>
                    <div className="range-slider">
                      <div className="price-range-slider ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content" />
                      <div className="clearfix">
                        <div className="pull-left">
                          <div className="input">
                            $
                            <input
                              type="text"
                              className="property-amount property-amount-1"
                              name="field-name"
                              readOnly=""
                            />
                          </div>
                        </div>
                        <div className="pull-right">
                          <div className="input">
                            $
                            <input
                              type="text"
                              className="property-amount property-amount-2"
                              name="field-name"
                              readOnly=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*Widget*/}
                <div className="sb-widget cbf-widget rating-widget">
                  <div className="w-inner">
                    <div className="s-title">
                      <i className="fa-solid fa-caret-right" />
                      <h4>Rating</h4>
                    </div>
                    <ul>
                      <li>
                        <div className="cb-block">
                          <input type="checkbox" id="cb-1" />
                          <label htmlFor="cb-1">
                            <span className="rating">
                              <i className="fa-solid fa-star" />
                              <i className="fa-solid fa-star" />
                              <i className="fa-solid fa-star" />
                              <i className="fa-solid fa-star" />
                              <i className="fa-solid fa-star" />
                            </span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="cb-block">
                          <input type="checkbox" id="cb-2" />{" "}
                          <label htmlFor="cb-2">
                            <span className="rating">
                              <i className="fa-solid fa-star" />
                              <i className="fa-solid fa-star" />
                              <i className="fa-solid fa-star" />
                              <i className="fa-solid fa-star" />
                              <i className="empty fa fa-star" />
                            </span>
                            <span className="txt">and Above</span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="cb-block">
                          <input type="checkbox" id="cb-3" />{" "}
                          <label htmlFor="cb-3">
                            <span className="rating">
                              <i className="fa-solid fa-star" />
                              <i className="fa-solid fa-star" />
                              <i className="fa-solid fa-star" />
                              <i className="empty fa fa-star" />
                              <i className="empty fa fa-star" />
                            </span>
                            <span className="txt">and Above</span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="cb-block">
                          <input type="checkbox" id="cb-4" />{" "}
                          <label htmlFor="cb-4">
                            <span className="rating">
                              <i className="fa-solid fa-star" />
                              <i className="fa-solid fa-star" />
                              <i className="empty fa fa-star" />
                              <i className="empty fa fa-star" />
                              <i className="empty fa fa-star" />
                            </span>
                            <span className="txt">and Above</span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="cb-block">
                          <input type="checkbox" id="cb-5" />{" "}
                          <label htmlFor="cb-5">
                            <span className="rating">
                              <i className="fa-solid fa-star" />
                              <i className="empty fa fa-star" />
                              <i className="empty fa fa-star" />
                              <i className="empty fa fa-star" />
                              <i className="empty fa fa-star" />
                            </span>
                            <span className="txt">and Above</span>
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                {/*Widget*/}
                <div className="sb-widget cbf-widget">
                  <div className="w-inner">
                    <div className="s-title">
                      <i className="fa-solid fa-caret-right" />
                      <h4>Tour Type</h4>
                    </div>
                    <ul>
                      <li>
                        <div className="cb-block">
                          <input type="checkbox" id="cb-6" />
                          <label htmlFor="cb-6">
                            <span className="txt">Adventure</span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="cb-block">
                          <input type="checkbox" id="cb-7" />
                          <label htmlFor="cb-7">
                            <span className="txt">Hiking</span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="cb-block">
                          <input type="checkbox" id="cb-8" />
                          <label htmlFor="cb-8">
                            <span className="txt">Romance</span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="cb-block">
                          <input type="checkbox" id="cb-9" />
                          <label htmlFor="cb-9">
                            <span className="txt">Culture</span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="cb-block">
                          <input type="checkbox" id="cb-10" />
                          <label htmlFor="cb-10">
                            <span className="txt">City Tour</span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="cb-block">
                          <input type="checkbox" id="cb-11" />
                          <label htmlFor="cb-11">
                            <span className="txt">History</span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="cb-block">
                          <input type="checkbox" id="cb-12" />
                          <label htmlFor="cb-12">
                            <span className="txt">Beach Tour</span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="cb-block">
                          <input type="checkbox" id="cb-13" />
                          <label htmlFor="cb-13">
                            <span className="txt">Sports Tour</span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="cb-block">
                          <input type="checkbox" id="cb-14" />
                          <label htmlFor="cb-14">
                            <span className="txt">Hiking</span>
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                {/*Widget*/}
                <div className="sb-widget cbf-widget">
                  <div className="w-inner">
                    <div className="s-title">
                      <i className="fa-solid fa-caret-right" />
                      <h4>Location</h4>
                    </div>
                    <ul>
                      <li>
                        <div className="cb-block">
                          <input type="checkbox" id="cb-15" />
                          <label htmlFor="cb-15">
                            <span className="txt">New York</span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="cb-block">
                          <input type="checkbox" id="cb-16" />
                          <label htmlFor="cb-16">
                            <span className="txt">London</span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="cb-block">
                          <input type="checkbox" id="cb-17" />
                          <label htmlFor="cb-17">
                            <span className="txt">Paris</span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="cb-block">
                          <input type="checkbox" id="cb-18" />
                          <label htmlFor="cb-18">
                            <span className="txt">Muscat</span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="cb-block">
                          <input type="checkbox" id="cb-19" />
                          <label htmlFor="cb-19">
                            <span className="txt">Dhaka</span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="cb-block">
                          <input type="checkbox" id="cb-20" />
                          <label htmlFor="cb-20">
                            <span className="txt">Kolkata</span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="cb-block">
                          <input type="checkbox" id="cb-21" />
                          <label htmlFor="cb-21">
                            <span className="txt">Chottogram</span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="cb-block">
                          <input type="checkbox" id="cb-22" />
                          <label htmlFor="cb-22">
                            <span className="txt">Dubai</span>
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/*sidbar side finish*/}

            {/*Content Side*/}
            <div className="content-side col-xl-8 col-lg-7 col-md-12 col-sm-12">
              <div className="content-inner">
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
                        <a href="tour-packages.html">
                          <span className="fas fa-th-large" />
                        </a>
                        <a className="active" href="tour-list.html">
                          <span className="fas fa-th-list" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="packages">
                  {/*Block*/}
                  <div className="package-block-two">
                    <div className="inner-box">
                      <div className="image-box">
                        <div className="image">
                          <a href="tour-single.html">
                            <img src={maldives} alt="Maldives" />
                          </a>
                        </div>
                        <div
                          className="image-layer"
                          style={{
                            backgroundImage:
                              "url(assets/images/resources/destinations/tours/maldives.jpg)",
                          }}
                        ></div>
                        <div className="b-title featured">
                          <span>Featured</span>
                        </div>
                        <div className="fav-btn">
                          <a href="#">
                            <span className="far fa-heart" />
                          </a>
                        </div>
                        <div className="p-icon">
                          <img src={tIcon1} alt="" />
                          <span className="icon flaticon-adventure" />
                        </div>
                      </div>
                      <div className="content-box">
                        <div className="loc-rat clearfix">
                          <div className="location">Maldives</div>
                          <div className="rating">
                            <a href="#" className="theme-btn">
                              <i className="fa-solid fa-star" />
                              <strong>4.8</strong> &ensp;
                              <span className="count">8788 Reviews</span>
                            </a>
                          </div>
                        </div>
                        <h5>
                          <a href="tour-single.html">
                            Serenity in the Maldives
                          </a>
                        </h5>
                        <p className="travilo-text">
                          A Tropical Paradise Retreat" Description: Surrender to
                          the tranquility of the Seychelles, where white sandy
                          beaches, turquoise waters, and lush landscapes await.
                          Luxuriate in exclusive resorts, indulge in spa
                          retreats ...
                        </p>
                        <div className="bottom-box clearfix">
                          <div className="duration">
                            <i className="fa-solid fa-clock" /> 5 Days 6 Nights
                          </div>
                          <div className="price">
                            Start from  <span className="amount">$465</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*Block*/}
                  <div className="package-block-two">
                    <div className="inner-box">
                      <div className="image-box">
                        <div className="image">
                          <a href="tour-single.html">
                            <img src={rome} alt="Rome" />
                          </a>
                        </div>
                        <div
                          className="image-layer"
                          style={{
                            backgroundImage:
                              "url(assets/images/resources/destinations/tours/rome.jpg)",
                          }}
                        ></div>
                        <div className="b-title top-rated">
                          <span>Top Rated</span>
                        </div>
                        <div className="fav-btn">
                          <a href="#">
                            <span className="far fa-heart" />
                          </a>
                        </div>
                        <div className="p-icon">
                          <img src={tIcon2} alt="" />
                          <span className="icon flaticon-hiking" />
                        </div>
                      </div>
                      <div className="content-box">
                        <div className="loc-rat clearfix">
                          <div className="location">Rome</div>
                          <div className="rating">
                            <a href="#" className="theme-btn">
                              <i className="fa-solid fa-star" />
                              <strong>4.6</strong> &ensp;
                              <span className="count">7767 Reviews</span>
                            </a>
                          </div>
                        </div>
                        <h5>
                          <a href="tour-single.html">
                            A Journey through History and Culture
                          </a>
                        </h5>
                        <p className="travilo-text">
                          Embark on a captivating journey through Rome's ancient
                          ruins and iconic landmarks. Discover the Colosseum,
                          Vatican City, and the Trevi Fountain while savoring
                          delectable Italian cuisine ...
                        </p>
                        <div className="bottom-box clearfix">
                          <div className="duration">
                            <i className="fa-solid fa-clock" /> 3 Days 4 Nights
                          </div>
                          <div className="price">
                            Start from  <span className="amount">$499</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*Block*/}
                  <div className="package-block-two">
                    <div className="inner-box">
                      <div className="image-box">
                        <div className="image">
                          <a href="tour-single.html">
                            <img src={morocco} alt="Morocco" />
                          </a>
                        </div>
                        <div
                          className="image-layer"
                          style={{
                            backgroundImage:
                              "url(assets/images/resources/destinations/tours/morocco.jpg)",
                          }}
                        ></div>
                        <div className="fav-btn">
                          <a href="#">
                            <span className="far fa-heart" />
                          </a>
                        </div>
                        <div className="p-icon">
                          <img src={tIcon3} />
                          <span className="icon flaticon-family" />
                        </div>
                      </div>
                      <div className="content-box">
                        <div className="loc-rat clearfix">
                          <div className="location">Cazablanca</div>
                          <div className="rating">
                            <a href="#" className="theme-btn">
                              <i className="fa-solid fa-star" />
                              <strong>4.7</strong> &ensp;
                              <span className="count">8455 Reviews</span>
                            </a>
                          </div>
                        </div>
                        <h5>
                          <a href="tour-single.html">
                            From Ancient Medina to Modern Cosmopolitan
                          </a>
                        </h5>
                        <p className="travilo-text">
                          Discover the allure of Casablanca, where the Old
                          Medina and modern architecture blend harmoniously.
                          Embrace the city's unique blend of North African charm
                          and cosmopolitan flair ...
                        </p>
                        <div className="bottom-box clearfix">
                          <div className="duration">
                            <i className="fa-solid fa-clock" /> 5 Days 6 Nights
                          </div>
                          <div className="price">
                            Start from  <span className="amount">$399</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*Block*/}
                  <div className="package-block-two">
                    <div className="inner-box">
                      <div className="image-box">
                        <div className="image">
                          <a href="tour-single.html">
                            <img src={egypt} alt="Egypt" />
                          </a>
                        </div>
                        <div
                          className="image-layer"
                          style={{
                            backgroundImage:
                              "url(assets/images/resources/destinations/tours/egypt.jpg)",
                          }}
                        ></div>
                        <div className="b-title top-rated">
                          <span>Top Rated</span>
                        </div>
                        <div className="fav-btn">
                          <a href="#">
                            <span className="far fa-heart" />
                          </a>
                        </div>
                        <div className="p-icon">
                          <img src={tIcon8} alt="" />
                          <span className="icon flaticon-tent-1" />
                        </div>
                      </div>
                      <div className="content-box">
                        <div className="loc-rat clearfix">
                          <div className="location">Egypt</div>
                          <div className="rating">
                            <a href="#" className="theme-btn">
                              <i className="fa-solid fa-star" />
                              <strong>4.5</strong> &ensp;
                              <span className="count">6988 Reviews</span>
                            </a>
                          </div>
                        </div>
                        <h5>
                          <a href="tour-single.html">
                            Embark on a Journey to Marvel the Pyramids
                          </a>
                        </h5>
                        <p className="travilo-text">
                          Embark on a journey through time and marvel at the
                          enigmatic wonders of the Giza Pyramids, an
                          extraordinary tour attraction that beckons adventurers
                          and history enthusiasts from around the globe. Located
                          just ...
                        </p>
                        <div className="bottom-box clearfix">
                          <div className="duration">
                            <i className="fa-solid fa-clock" /> 4 Days 5 Nights
                          </div>
                          <div className="price">
                            Start from  <span className="amount">$275</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*Block*/}
                  <div className="package-block-two">
                    <div className="inner-box">
                      <div className="image-box">
                        <div className="image">
                          <a href="tour-single.html">
                            <img src={varenna} alt="Varenna" />
                          </a>
                        </div>
                        <div
                          className="image-layer"
                          style={{
                            backgroundImage:
                              "url(assets/images/resources/destinations/tours/varenna.jpg)",
                          }}
                        ></div>
                        <div className="fav-btn">
                          <a href="#">
                            <span className="far fa-heart" />
                          </a>
                        </div>
                        <div className="p-icon">
                          <img src={tIcon9} alt="" />
                          <span className="icon flaticon-temple" />
                        </div>
                      </div>
                      <div className="content-box">
                        <div className="loc-rat clearfix">
                          <div className="location">Varenna</div>
                          <div className="rating">
                            <a href="#" className="theme-btn">
                              <i className="fa-solid fa-star" />
                              <strong>4.9</strong> &ensp;
                              <span className="count">4566 Reviews</span>
                            </a>
                          </div>
                        </div>
                        <h5>
                          <a href="tour-single.html">
                            Lakeside Serenity; A Tranquil Escape on Lake Como
                          </a>
                        </h5>
                        <p className="travilo-text">
                          Nestled along the picturesque Lake Como, Varenna
                          offers breathtaking views and a peaceful ambiance.
                          Explore the quaint streets, indulge in lakeside
                          dining, and bask in the serene beauty of this idyllic
                          Italian ...
                        </p>
                        <div className="bottom-box clearfix">
                          <div className="duration">
                            <i className="fa-solid fa-clock" /> 7 Days 8 Nights
                          </div>
                          <div className="price">
                            Start from  <span className="amount">$525</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*Block*/}
                  <div className="package-block-two">
                    <div className="inner-box">
                      <div className="image-box">
                        <div className="image">
                          <a href="tour-single.html">
                            <img src={bangkok} alt="Bangkok" />
                          </a>
                        </div>
                        <div
                          className="image-layer"
                          style={{
                            backgroundImage:
                              "url(assets/images/resources/destinations/tours/bangkok.jpg)",
                          }}
                        ></div>
                        <div className="b-title featured">
                          <span>Featured</span>
                        </div>
                        <div className="fav-btn">
                          <a href="#">
                            <span className="far fa-heart" />
                          </a>
                        </div>
                        <div className="p-icon">
                          <img src={tIcon10} alt="" />
                          <span className="icon flaticon-cycling" />
                        </div>
                      </div>
                      <div className="content-box">
                        <div className="loc-rat clearfix">
                          <div className="location">Bangkok</div>
                          <div className="rating">
                            <a href="#" className="theme-btn">
                              <i className="fa-solid fa-star" />
                              <strong>4.6</strong>&ensp;
                              <span className="count">9236 Reviews</span>
                            </a>
                          </div>
                        </div>
                        <h5>
                          <a href="tour-single.html">
                            Vibrant Bangkok, A Fusion of Culture and Cuisine
                          </a>
                        </h5>
                        <p className="travilo-text">
                          Experience the lively spirit of Bangkok as you venture
                          through bustling markets, ornate temples, and vibrant
                          street food scenes. Discover the city's rich cultural
                          heritage and immerse ...
                        </p>
                        <div className="bottom-box clearfix">
                          <div className="duration">
                            <i className="fa-solid fa-clock" /> 5 Days 6 Nights
                          </div>
                          <div className="price">
                            Start from &ensp;
                            <span className="amount">$399</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="styled-pagination">
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

            {/* content side finish*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourList;
