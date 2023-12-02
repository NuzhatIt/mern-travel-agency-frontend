import React, { useState } from "react";
import { DateRange } from "react-date-range";

import banner3 from "../../assets/images/resources/featured/banner-3.jpg";
import { FaMapMarkerAlt, FaBed, FaCalendarDay } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";
import { BsFillPersonFill } from "react-icons/bs";
import { TbPlaneInflight } from "react-icons/tb";
import "./hotels.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import { MdLocationOn } from "react-icons/md";
import Navbar3 from './../../components/navbar/Navbar3';
import WhatsAppChat from './../../components/whatsapp/WhatsappChat';
import ScrollToTop from './../../components/scroll-to-top/ScrollToTop';
import Footer3 from './../../components/footer/Footer3';

const Hotels = () => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleOption = (name, operation) => {
    // setOptions(prev=>{return {
    //   ...prev, [name]:operation==='i'?options[name]+1:options[name]===0?0:options[name]-1,
    // }})
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

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
            backgroundImage: `url(${banner3})`,
          }}
        ></div>
        <div className="auto-container">
          <div className="content-box">
            <h1>Hotels</h1>
            <div className="bread-crumb">
              {/* <ul className="clearfix">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li className="current">Hotels</li>
              </ul> */}
            </div>
          </div>
        </div>
      </section>
      {/*End Banner Section */}

      <section className="hotels-section">
        {/*Serach One*/}

        <div className="search-one">
          <div className="auto-container">
            <div className="outer">
              <div className="search-title">
                <span>Search for your desired hotel</span>
              </div>
              <div className="form-box site-form">
                {/* new search box */}

                <div className="hotelSearch">
                  <div className="hotelSearchItem">
                    <MdLocationOn className="hotelSearchIcon" />
                    <input
                      type="text"
                      placeholder="Where to go?"
                      className="hotelSearchInput"
                    />
                  </div>
                  <div className="hotelSearchItem">
                    <FaCalendarDay className="hotelSearchIcon" />
                    <span
                      onClick={() => setOpenDate(!openDate)}
                      className="hotelSearchText"
                    >{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                      date[0].endDate,
                      "dd/MM/yyyy"
                    )} `}</span>
                    {openDate && (
                      <DateRange
                        editableDateInputs={true}
                        onChange={(item) => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        className="hotelDate"
                      />
                    )}
                  </div>
                  <div className="hotelSearchItem">
                    <BsFillPersonFill className="hotelSearchIcon" />
                    <span
                      onClick={() => setOpenOptions(!openOptions)}
                      className="hotelSearchText"
                    >
                      {`${options.adult} adult . ${options.children} . children . ${options.room}  rooms`}
                    </span>
                    {openOptions && (
                      <div className="hotelOptions">
                        <div className="hotelOptionItem">
                          <span className="hotleOptionText">Adult</span>
                          <div className="optionCounter">
                            <button
                              disabled={options.adult <= 1}
                              className="optionCounterButton"
                              onClick={() => handleOption("adult", "d")}
                            >
                              -
                            </button>
                            <span className="optionCounterNumber">
                              {options.adult}
                            </span>
                            <button
                              className="optionCounterButton"
                              onClick={() => handleOption("adult", "i")}
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <div className="hotelOptionItem">
                          <span className="hotleOptionText">Children</span>
                          <div className="optionCounter">
                            <button
                              disabled={options.children <= 0}
                              className="optionCounterButton"
                              onClick={() => handleOption("children", "d")}
                            >
                              -
                            </button>
                            <span className="optionCounterNumber">
                              {options.children}
                            </span>
                            <button
                              className="optionCounterButton"
                              onClick={() => handleOption("children", "i")}
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <div className="hotelOptionItem">
                          <span className="hotleOptionText">Room</span>
                          <div className="optionCounter">
                            <button
                              disabled={options.room <= 1}
                              className="optionCounterButton"
                              onClick={() => handleOption("room", "d")}
                            >
                              -
                            </button>
                            <span className="optionCounterNumber">
                              {options.room}
                            </span>
                            <button
                              className="optionCounterButton"
                              onClick={() => handleOption("room", "i")}
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="hotelSearchItem">
                    <button className="theme-btn f-btn">Search</button>
                  </div>
                </div>
                {/* new search box end*/}
              </div>
            </div>
          </div>
        </div>

        {/* hotel info*/}
        <div className="auto-container">
          <div className="packages">
            <div className="filter-row">
              <div className="clearfix">
                <div className="s-info">
                  Showing results of <strong>1 - 9</strong> of{" "}
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
                  {/* <div className="layout-links clearfix">
                    <a className="active" href="tour-packages.html">
                      <span className="fas fa-th-large" />
                    </a>{" "}
                    <a href="tour-list.html">
                      <span className="fas fa-th-list" />
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="row clearfix">
              {/*Block*/}
              <div className="package-block alt col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image-box">
                    <div className="image">
                      <a href="hotel-single.html">
                        <img
                          src="assets/images/resources/destinations/istanbul-beach-hotel.jpg"
                          alt="Beach Hotel"
                        />
                      </a>
                    </div>
                    <div className="b-title featured">
                      <span>Featured</span>
                    </div>
                    <div className="fav-btn">
                      <a href="#">
                        <span className="far fa-heart" />
                      </a>
                    </div>
                  </div>
                  <div className="lower-box">
                    <div className="location">Istanbul</div>
                    <h5>
                      <a href="hotel-single.html">Istanbul Beach Hotel</a>
                    </h5>
                    <div className="bottom-box clearfix">
                      <div className="rating">
                        <a href="#" className="theme-btn">
                          <i className="fa-solid fa-star" />
                          <strong>4.8</strong>  {" "}
                          <span className="count">4500 Reviews</span>
                        </a>
                      </div>
                      <div className="price">
                        Start from  <span className="amount">$550</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*Block*/}
              <div className="package-block alt col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image-box">
                    <div className="image">
                      <a href="hotel-single.html">
                        <img
                          src="assets/images/resources/destinations/maldives-hotel.jpg"
                          alt="Maldives Beach Hotel"
                        />
                      </a>
                    </div>
                    <div className="b-title top-rated">
                      <span>Top Rated</span>
                    </div>
                    <div className="fav-btn">
                      <a href="#">
                        <span className="far fa-heart" />
                      </a>
                    </div>
                  </div>
                  <div className="lower-box">
                    <div className="location">Maldives</div>
                    <h5>
                      <a href="hotel-single.html">Maldives Beach Hotel</a>
                    </h5>
                    <div className="bottom-box clearfix">
                      <div className="rating">
                        <a href="#" className="theme-btn">
                          <i className="fa-solid fa-star" />
                          <strong>4.9</strong>  {" "}
                          <span className="count">7900 Reviews</span>
                        </a>
                      </div>
                      <div className="price">
                        Start from  <span className="amount">$650</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*Block*/}
              <div className="package-block alt col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image-box">
                    <div className="image">
                      <a href="hotel-single.html">
                        <img
                          src="assets/images/resources/destinations/palawan-hotel.jpg"
                          alt="Palwan Hotel"
                        />
                      </a>
                    </div>
                    <div className="fav-btn">
                      <a href="#">
                        <span className="far fa-heart" />
                      </a>
                    </div>
                  </div>
                  <div className="lower-box">
                    <div className="location">Palawan</div>
                    <h5>
                      <a href="hotel-single.html">Palawan Beachfront Hotel</a>
                    </h5>
                    <div className="bottom-box clearfix">
                      <div className="rating">
                        <a href="#" className="theme-btn">
                          <i className="fa-solid fa-star" />
                          <strong>4.5</strong>  {" "}
                          <span className="count">6591 Reviews</span>
                        </a>
                      </div>
                      <div className="price">
                        Start from  <span className="amount">$245</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*Block*/}
              <div className="package-block alt col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image-box">
                    <div className="image">
                      <a href="hotel-single.html">
                        <img
                          src="assets/images/resources/destinations/punta-cana-hotel.jpg"
                          alt="Punta Cana"
                        />
                      </a>
                    </div>
                    <div className="b-title top-rated">
                      <span>Top Rated</span>
                    </div>
                    <div className="fav-btn">
                      <a href="#">
                        <span className="far fa-heart" />
                      </a>
                    </div>
                  </div>
                  <div className="lower-box">
                    <div className="location">Punta Cana</div>
                    <h5>
                      <a href="hotel-single.html">Punta Cana Hotel</a>
                    </h5>
                    <div className="bottom-box clearfix">
                      <div className="rating">
                        <a href="#" className="theme-btn">
                          <i className="fa-solid fa-star" />
                          <strong>4.6</strong>  {" "}
                          <span className="count">8711 Reviews</span>
                        </a>
                      </div>
                      <div className="price">
                        Start from  <span className="amount">$439</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*Block*/}
              <div className="package-block alt col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image-box">
                    <div className="image">
                      <a href="hotel-single.html">
                        <img
                          src="assets/images/resources/destinations/the-bellagio-hotel.jpg"
                          alt="The Bellagio"
                        />
                      </a>
                    </div>
                    <div className="fav-btn">
                      <a href="#">
                        <span className="far fa-heart" />
                      </a>
                    </div>
                  </div>
                  <div className="lower-box">
                    <div className="location">Las Vegas</div>
                    <h5>
                      <a href="hotel-single.html">The Bellagio</a>
                    </h5>
                    <div className="bottom-box clearfix">
                      <div className="rating">
                        <a href="#" className="theme-btn">
                          <i className="fa-solid fa-star" />
                          <strong>4.7</strong>  {" "}
                          <span className="count">4780 Reviews</span>
                        </a>
                      </div>
                      <div className="price">
                        Start from  <span className="amount">$345</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*Block*/}
              <div className="package-block alt col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image-box">
                    <div className="image">
                      <a href="hotel-single.html">
                        <img
                          src="assets/images/resources/destinations/istanbul-mom-hotel.jpg"
                          alt="Mom Hotel"
                        />
                      </a>
                    </div>
                    <div className="b-title featured">
                      <span>Featured</span>
                    </div>
                    <div className="fav-btn">
                      <a href="#">
                        <span className="far fa-heart" />
                      </a>
                    </div>
                  </div>
                  <div className="lower-box">
                    <div className="location">Istanbul</div>
                    <h5>
                      <a href="hotel-single.html">Istanbul Mom Hotel</a>
                    </h5>
                    <div className="bottom-box clearfix">
                      <div className="rating">
                        <a href="#" className="theme-btn">
                          <i className="fa-solid fa-star" />
                          <strong>4.6</strong>  {" "}
                          <span className="count">3210 Reviews</span>
                        </a>
                      </div>
                      <div className="price">
                        Start from  <span className="amount">$480</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*Block*/}
              <div className="package-block alt col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image-box">
                    <div className="image">
                      <a href="hotel-single.html">
                        <img
                          src="assets/images/resources/destinations/avista-hideway-hotel.jpg"
                          alt="Avista Hideway"
                        />
                      </a>
                    </div>
                    <div className="b-title top-rated">
                      <span>Top Rated</span>
                    </div>
                    <div className="fav-btn">
                      <a href="#">
                        <span className="far fa-heart" />
                      </a>
                    </div>
                  </div>
                  <div className="lower-box">
                    <div className="location">Phuket</div>
                    <h5>
                      <a href="hotel-single.html">Avista Hideway Hotel</a>
                    </h5>
                    <div className="bottom-box clearfix">
                      <div className="rating">
                        <a href="#" className="theme-btn">
                          <i className="fa-solid fa-star" />
                          <strong>4.8</strong>  {" "}
                          <span className="count">2389 Reviews</span>
                        </a>
                      </div>
                      <div className="price">
                        Start from  <span className="amount">$530</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*Block*/}
              <div className="package-block alt col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image-box">
                    <div className="image">
                      <a href="hotel-single.html">
                        <img
                          src="assets/images/resources/destinations/the-anam-vietnam-hotel.jpg"
                          alt="The Anam"
                        />
                      </a>
                    </div>
                    <div className="fav-btn">
                      <a href="#">
                        <span className="far fa-heart" />
                      </a>
                    </div>
                  </div>
                  <div className="lower-box">
                    <div className="location">Vietnam</div>
                    <h5>
                      <a href="hotel-single.html">The Anam Hotel</a>
                    </h5>
                    <div className="bottom-box clearfix">
                      <div className="rating">
                        <a href="#" className="theme-btn">
                          <i className="fa-solid fa-star" />
                          <strong>4.8</strong>  {" "}
                          <span className="count">4900 Reviews</span>
                        </a>
                      </div>
                      <div className="price">
                        Start from  <span className="amount">$459</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*Block*/}
              <div className="package-block alt col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image-box">
                    <div className="image">
                      <a href="hotel-single.html">
                        <img
                          src="assets/images/resources/destinations/one-eighty-bali-hotel.jpg"
                          alt="One Eighty"
                        />
                      </a>
                    </div>
                    <div className="b-title featured">
                      <span>Featured</span>
                    </div>
                    <div className="fav-btn">
                      <a href="#">
                        <span className="far fa-heart" />
                      </a>
                    </div>
                  </div>
                  <div className="lower-box">
                    <div className="location">Bali</div>
                    <h5>
                      <a href="hotel-single.html">One Eighty Hotel</a>
                    </h5>
                    <div className="bottom-box clearfix">
                      <div className="rating">
                        <a href="#" className="theme-btn">
                          <i className="fa-solid fa-star" />
                          <strong>4.7</strong>  {" "}
                          <span className="count">6233 Reviews</span>
                        </a>
                      </div>
                      <div className="price">
                        Start from  <span className="amount">$450</span>
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

export default Hotels;
