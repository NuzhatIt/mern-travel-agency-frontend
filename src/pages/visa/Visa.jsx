import { format } from "date-fns";
import React, { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { BsFillPersonFill } from "react-icons/bs";
import { FaCalendarDay } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import bannerVisaServices from "../../assets/images/resources/featured/bannerVisaServices.jpg";

const Visa = () => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState(1);

  const handleOption = (operation) => {
    // setOptions(prev=>{return {
    //   ...prev, [name]:operation==='i'?options[name]+1:options[name]===0?0:options[name]-1,
    // }})
    setOptions((prevOptions) => {
      return operation === "i" ? prevOptions + 1 : prevOptions - 1;
    });
  };
  return (
    <>
      {/* Banner Section */}
      <section className="inner-banner">
        <div
          className="image-layer"
          style={{
            backgroundImage: `url(${bannerVisaServices})`,
          }}
        ></div>
        <div className="auto-container">
          <div className="content-box">
            <h1>Visa</h1>
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

      {/* searchbox */}

      <div className="choose-trip bg-white p-4 ">
        <div className="choose-flight-type">
          <ul
            className="border-bottom-0 bg-clr-gray-light d-inline-flex gap-2 rounded p-2 nav nav-tabs"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <button
                type="button"
                id="react-aria3288182133-:r0:-tab-flight"
                role="tab"
                data-rr-ui-event-key="flight"
                aria-controls="react-aria3288182133-:r0:-tabpane-flight"
                aria-selected="true"
                className="nav-link active"
              >
                <span className="mx-1">
                  <span className="tab-options"> Flight</span>
                </span>
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                type="button"
                id="react-aria3288182133-:r0:-tab-hotel"
                role="tab"
                data-rr-ui-event-key="hotel"
                aria-controls="react-aria3288182133-:r0:-tabpane-hotel"
                aria-selected="false"
                className="nav-link"
                tabIndex={-1}
              >
                <span className="mx-1 py-0">
                  <span className="tab-options">Hotel</span>
                </span>
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                type="button"
                id="react-aria3288182133-:r0:-tab-visa"
                role="tab"
                data-rr-ui-event-key="visa"
                aria-controls="react-aria3288182133-:r0:-tabpane-visa"
                aria-selected="false"
                tabIndex={-1}
                className="nav-link"
              >
                <span className="mx-1 py-0">
                  <span className="ms-1 tab-options">Visa</span>
                </span>
              </button>
            </li>
          </ul>
          <div className="tab-content">
            <div
              role="tabpanel"
              id="react-aria3288182133-:r0:-tabpane-flight"
              aria-labelledby="react-aria3288182133-:r0:-tab-flight"
              className="fade tab-pane active show"
            >
              <div className="flight mt-3">
                <div className="choose-option mb-1">
                  <form
                    className="mb-3 bg-transparent p-0 border-0"
                    style={{ color: "rgb(124, 141, 176)" }}
                  >
                    <div className="mb-3 flight-selection">
                      <div className="form-check form-check-inline">
                        <input
                          name="group1"
                          type="radio"
                          id="inline-1"
                          className="form-check-input"
                          defaultChecked=""
                        />
                        <label
                          title=""
                          htmlFor="inline-1"
                          className="form-check-label"
                        >
                          One Way
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          name="group1"
                          type="radio"
                          id="inline-2"
                          className="form-check-input"
                        />
                        <label
                          title=""
                          htmlFor="inline-2"
                          className="form-check-label"
                        >
                          Round Trip
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          name="group1"
                          type="radio"
                          id="inline-3"
                          className="form-check-input"
                        />
                        <label
                          title=""
                          htmlFor="inline-3"
                          className="form-check-label"
                        >
                          Multi City
                        </label>
                      </div>
                    </div>
                  </form>
                  <div className="flight-oneway">
                    <div className="oneway-content rounded">
                      <div className="feiled-wrapper">
                        <div className="mb-3 mb-xl-0">
                          <div className="search-input-button mb-2" style={{lineHeight:1.4}}>
                            <label htmlFor="fromCity">
                              <p className="mb-0 fw-normal fs-14 cursor-pointer">From</p>
                              <input type="text" name="" id="formCity" className="flight-search-field" style={{lineHeight:0}} 
                              value="Dhaka"/>
                              <div className="cursor-pointer">
                                <small className="my0">
                                  <span title=""
                                  className="mt-0 fw-normal text-muted pargraph-overflow fs-12"
                                  style={{maxWidth:120}}>Shahjalal</span>
                                </small>
                              </div>
                            </label>
                          </div>
                        </div>
                        <div className="mb-3 mb-xl-0">
                          <div className="search-input-button to-button mb-2 d-flex align-align-items-center" style={{lineHeight:1.4}}>
                            <div className="d-none d-xl-block">
                              <div className="swap-btn d-flex justify-content-center align-items-center">
                                swapicon
                              </div>
                              <div className="w-100 ps-xl-3">
                                <label htmlFor="toCity">
                                  <p className="mb-0 fw-normal fs-14 cursor-pointer">To</p>
                                  <input type="text" name="" id=""
                                  className="flight_search_field" value="CTG"
                                  style={{lineHeight:0}}/>
                                  <div className="cursor-pointer">
                                    <small className="my-0">
                                      <span title=""
                                      className="mt-0 fw-normal text-muted paragraph-overflow fs-12" style={{maxWidth:'120px'}}>Shah Amanat</span>
                                    </small>
                                  </div>
                                </label>
                              </div>
                              <div className="d-block d-xl-none">
                              <div className="swap-btn2 d-flex  justify-content-center align-items-center">someIcon</div>

                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mb-3 mb-xl-0 px-xl-0">

                        </div>
                        <div className="mb-3 mb-xl-0">

                        </div>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              role="tabpanel"
              id="react-aria3288182133-:r0:-tabpane-flight"
              aria-labelledby="react-aria3288182133-:r0:-tab-flight"
              className="fade tab-pane "
            ></div>
            <div
              role="tabpanel"
              id="react-aria3288182133-:r0:-tabpane-flight"
              aria-labelledby="react-aria3288182133-:r0:-tab-flight"
              className="fade tab-pane "
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Visa;

{
  /* <section className="hotels-section"> */
}
{
  /*Serach One*/
}

// <div className="search-one">
//   <div className="auto-container">
//     <div className="outer">
//       <div className="search-title">
//         <span>Search Visa</span>
//       </div>
//       <div className="form-box site-form">
{
  /* new search box */
}

// <div className="hotelSearch">
//   <div className="hotelSearchItem">
//     <MdLocationOn className="hotelSearchIcon" />
//     <input
//       type="text"
//       placeholder="Where to go?"
//       className="hotelSearchInput"
//     />
//   </div>
//   <div className="hotelSearchItem">
//     <FaCalendarDay className="hotelSearchIcon" />
//     <span
//       onClick={() => setOpenDate(!openDate)}
//       className="hotelSearchText"
//     >{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
//       date[0].endDate,
//       "dd/MM/yyyy"
//     )} `}</span>
//     {openDate && (
//       <DateRange
//         editableDateInputs={true}
//         onChange={(item) => setDate([item.selection])}
//         moveRangeOnFirstSelection={false}
//         ranges={date}
//         className="hotelDate"
//       />
//     )}
//   </div>
//   <div className="hotelSearchItem">
//     <BsFillPersonFill className="hotelSearchIcon" />
//     <span
//       onClick={() => setOpenOptions(!openOptions)}
//       className="hotelSearchText"
//     >
//       {`${options} Person `}
//     </span>
//     {openOptions && (
//       <div className="hotelOptions">
//         <div className="hotelOptionItem">
//           <span className="hotleOptionText">Person</span>
//           <div className="optionCounter">
//             <button
//               disabled={options <= 1}
//               className="optionCounterButton"
//               onClick={() => handleOption("d")}
//             >
//               -
//             </button>
//             <span className="optionCounterNumber">{options}</span>
//             <button
//               className="optionCounterButton"
//               onClick={() => handleOption("i")}
//             >
//               +
//             </button>
//           </div>
//         </div>
//       </div>
//     )}
//   </div>
//   <div className="hotelSearchItem">
//     <button className="theme-btn f-btn">Search</button>
//   </div>
// </div>
{
  /* new search box end*/
}
//       </div>
//     </div>
//   </div>
// </div>
{
  /*Serach One end*/
}
// </section>;
