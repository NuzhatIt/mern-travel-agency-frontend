import { format } from "date-fns";
import React, { useState } from "react";
import { Calendar, DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { BsFillPersonFill } from "react-icons/bs";
import { FaCalendarDay } from "react-icons/fa";
import { MdFlightLand, MdFlightTakeoff } from "react-icons/md";
import bannerFlight from "../../assets/images/resources/featured/bannerFlight.jpg";
import Footer3 from "./../../components/footer/Footer3";
import Navbar3 from "./../../components/navbar/Navbar3";
import WhatsAppChat from './../../components/whatsapp/WhatsappChat';
import ScrollToTop from './../../components/scroll-to-top/ScrollToTop';

const Flight = () => {
  const [openDate, setOpenDate] = useState(false);
  const [rdate, setrDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [date, setDate] = useState(new Date());

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    infant: 0,
  });

  const [flightClass, setFlightClass] = useState("");
  const [tripType, setTripType] = useState("One Way");

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

  // console.log(date);
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
            backgroundImage: `url(${bannerFlight})`,
          }}
        ></div>
        <div className="auto-container">
          <div className="content-box">
            <h1>Flights</h1>
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
                <span>Search for your desired Flight</span>
              </div>

              <div className="form-box site-form">
                <div className="d-flex justify-content-between">
                  {/* radio */}
                  <div className="d-flex">
                    <div>
                      <input
                        type="radio"
                        name="tripType"
                        id="oneWay"
                        value="One Way"
                        checked={tripType === "One Way"}
                        onChange={(e) => setTripType(e.target.value)}
                      />
                      <label htmlFor="oneWay">One Way</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        name="tripType"
                        id="roundTrip"
                        value="Round Trip"
                        onChange={(e) => setTripType(e.target.value)}
                      />
                      <label htmlFor="roundTrip">Round Trip</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        name="tripType"
                        id="multiCity"
                        value="Multi City"
                        onChange={(e) => setTripType(e.target.value)}
                      />
                      <label htmlFor="multiCity">Multi City</label>
                    </div>
                  </div>
                  {/* radio button ends */}

                  {/* dropdown */}
                  <div className="dropdown">
                    <select
                      name=""
                      id=""
                      value={flightClass}
                      onChange={(e) => setFlightClass(e.target.value)}
                    >
                      <option value="Economy">Economy</option>
                      <option value="Premium Economy">Premium Economy</option>
                      <option value="Business">Business</option>
                      <option value="First Class">First Class</option>
                    </select>
                  </div>
                </div>

                {/* new search box */}

                <div className="hotelSearch">
                  <div className="hotelSearchItem">
                    <MdFlightTakeoff className="hotelSearchIcon" />
                    <input
                      type="text"
                      placeholder="Departure"
                      className="hotelSearchInput"
                    />
                  </div>
                  <div className="hotelSearchItem">
                    <MdFlightLand className="hotelSearchIcon" />
                    <input
                      type="text"
                      placeholder="Destination"
                      className="hotelSearchInput"
                    />
                  </div>
                  {tripType === "One Way" && (
                    <div className="hotelSearchItem">
                      <FaCalendarDay className="hotelSearchIcon" />
                      <span
                        onClick={() => setOpenDate(!openDate)}
                        className="hotelSearchText"
                      >{`${format(date, "dd/MM/yyyy")}`}</span>
                      {openDate && (
                        <Calendar
                          editableDateInputs={true}
                          onChange={(item) => setDate(item)}
                          className="hotelDate"
                        />
                      )}
                    </div>
                  )}
                  <div className="hotelSearchItem"></div>
                  {tripType === "Round Trip" && (
                    <div className="hotelSearchItem">
                      <FaCalendarDay className="hotelSearchIcon" />
                      <span
                        onClick={() => setOpenDate(!openDate)}
                        className="hotelSearchText"
                      >{`${format(
                        rdate[0].startDate,
                        "dd/MM/yyyy"
                      )} to ${format(rdate[0].endDate, "dd/MM/yyyy")} `}</span>
                      {openDate && (
                        <DateRange
                          editableDateInputs={true}
                          onChange={(item) => setrDate([item.selection])}
                          moveRangeOnFirstSelection={false}
                          ranges={rdate}
                          className="hotelDate"
                        />
                      )}
                    </div>
                  )}
                  <div className="hotelSearchItem">
                    <BsFillPersonFill className="hotelSearchIcon" />
                    <span
                      onClick={() => setOpenOptions(!openOptions)}
                      className="hotelSearchText"
                    >
                      {`${options.adult} adult . ${options.children} . children . ${options.infant}  infant`}
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
                          <span className="hotleOptionText">infant</span>
                          <div className="optionCounter">
                            <button
                              disabled={options.infant <= 0}
                              className="optionCounterButton"
                              onClick={() => handleOption("infant", "d")}
                            >
                              -
                            </button>
                            <span className="optionCounterNumber">
                              {options.infant}
                            </span>
                            <button
                              className="optionCounterButton"
                              onClick={() => handleOption("infant", "i")}
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
        {/*Serach One end*/}
      </section>
      <Footer3 />
    </div>
  );
};

export default Flight;
