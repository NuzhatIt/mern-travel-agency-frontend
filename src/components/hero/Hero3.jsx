import { useState } from "react";

import bannerArrow from "../../assets/images/background/banner-arrow.png";
import bgGradient1 from "../../assets/images/background/bg-gradient-1.png";
import yellow1 from "../../assets/images/elements/yellow-1.png";
import manWithBag from "../../assets/images/resources/misc/man-with-bag.jpg";
import "./hero3.css";

import {
  CloseCircleOutlined,
  CloseOutlined,
  PlusOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Button, DatePicker, Input, Radio, Select } from "antd";
import { CiLocationOn } from "react-icons/ci";
import SearchBox from "./SearchBox";
// const { RangePicker } = DatePicker;

const Hero3 = () => {
  // const { initWOW } = useWOW();
  // useEffect(() => {
  //   initWOW();
  // }, []);

  const [service, setService] = useState("flight");
  const [tripType, setTripType] = useState(1);
  const changeService = (e) => {
    setService(e.target.value);
    setTripType(1);
  };
  const changeTripType = (e) => {
    setTripType(e.target.value);
  };
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onChange = () => {};
  return (
    <>
      {/* <!-- Banner Section --> */}
      <div className="banner-section">
        <div className="banner-container">
          <div
            className="banner-arrow wow slideInLeft"
            data-wow-delay="0ms"
            data-wow-duration="1500ms"
          >
            <img src={bannerArrow} alt="" />
          </div>
          <div className="auto-container">
            <div className="row clearfix">
              <div className="left-col col-lg-6 col-md-12">
                <div className="inner">
                  <div className="clearfix">
                    <div className="content">
                      <div className="bg-image">
                        <img src={bgGradient1} alt="" />
                      </div>
                      <h3>Start Travelling Now</h3>
                      {/* <Test /> */}
                      <h1>
                        <i className="d-icon">
                          <img src={yellow1} alt="" title="" />
                        </i>
                        Explore the Top Destination of Planet Earth
                      </h1>
                      <p className="travilo-text">
                        Embrace the journey & Travel with passion and purpose.
                      </p>

                      <div className="form-box site-form">
                        <div className="serviceHeader">
                          <Radio.Group
                            name="serviceGroup"
                            defaultValue="flight"
                            buttonStyle="solid"
                            onChange={changeService}
                          >
                            <Radio.Button value="flight">Flight</Radio.Button>
                            <Radio.Button value="hotel">Hotel</Radio.Button>
                            <Radio.Button value="visa">Visa</Radio.Button>
                            <Radio.Button value="hajj">Umrah/Hajj</Radio.Button>
                            <Radio.Button value="insurance">
                              Insuarnce
                            </Radio.Button>
                            <Radio.Button value="gt">Group Ticket</Radio.Button>
                          </Radio.Group>
                        </div>

                        {/* <form method="" action=""> */}
                        <div className="searchBox">
                          <div className="row clearfix">
                            {service === "flight" && (
                              <div className="flightTypeRadio">
                                <Radio.Group
                                  name="flightTypeGroup"
                                  defaultValue={1}
                                  onChange={changeTripType}
                                >
                                  <Radio value={1}>One Way</Radio>
                                  <Radio value={2}>Round Trip</Radio>
                                  <Radio value={3}>Multi City</Radio>
                                </Radio.Group>

                                <Select
                                  defaultValue="economy"
                                  style={{
                                    width: 120,
                                  }}
                                  onChange={handleChange}
                                  options={[
                                    {
                                      value: "economy",
                                      label: "Economy",
                                    },

                                    {
                                      value: "business",
                                      label: "Business",
                                    },
                                    {
                                      value: "firstclass",
                                      label: "First Class",
                                    },
                                  ]}
                                />
                              </div>
                            )}
                            <div className="row clearfix">
                              <div className="search-box-main">
                                {service === "flight" && (
                                  <div className="form-group col-lg col-md-12 col-sm-12">
                                    <div className="field-label">From</div>
                                    <div className="field-inner">
                                      <Input
                                        size="large"
                                        placeholder="From"
                                        prefix={<CiLocationOn />}
                                        onChange={onChange}
                                      />
                                    </div>
                                  </div>
                                )}
                                <div className="form-group col-lg col-md-12 col-sm-12">
                                  <div className="field-label">To</div>
                                  <div className="field-inner">
                                    <Input
                                      size="large"
                                      placeholder="To"
                                      prefix={<CiLocationOn />}
                                      onChange={onChange}
                                    />
                                  </div>
                                </div>
                                <div className="form-group col-lg col-md-12 col-sm-12">
                                  <div className="field-label">In</div>
                                  <div className="field-inner">
                                    <DatePicker
                                      size="large"
                                      // style={{ height: "50px" }}
                                      onChange={onChange}
                                    />
                                  </div>
                                </div>

                                {/* dont show checkout when flight is oneway*/}
                                {!(service === "flight" && tripType === 1) && (
                                  <div className="form-group col-lg col-md-12 col-sm-12">
                                    <div className="field-label">Out</div>
                                    <div className="field-inner">
                                      <DatePicker
                                        size="large"
                                        // style={{ height: "50px" }}
                                        onChange={onChange}
                                      />
                                    </div>
                                  </div>
                                )}

                                {/* number of guests/ customers  */}
                                <div className="form-group col-lg col-md-12 col-sm-12">
                                  <div className="field-label">Guests</div>
                                  <div className="field-inner">
                                    <SearchBox />
                                  </div>
                                </div>

                                {/* search button */}
                                <div className="form-group col-lg col-md-12 col-sm-12">
                                  <div className="field-label"></div>
                                  <div className="field-inner">
                                    <Button
                                      type="primary"
                                      style={{
                                        marginTop: "20px",
                                        // height: "50px",
                                        width: "100%",
                                      }}
                                      icon={<SearchOutlined />}
                                    >
                                      Search
                                    </Button>
                                  </div>
                                </div>
                              </div>

                              {/* when flight is multicity show another search box */}
                              {service === "flight" && tripType === 3 && (
                                <div className="search-box-main">
                                  {service === "flight" && (
                                    <div className="form-group col-lg col-md-12 col-sm-12">
                                      <div className="field-label">From</div>
                                      <div className="field-inner">
                                        <Input
                                          size="large"
                                          placeholder="From"
                                          prefix={<CiLocationOn />}
                                          onChange={onChange}
                                        />
                                      </div>
                                    </div>
                                  )}
                                  <div className="form-group col-lg col-md-12 col-sm-12">
                                    <div className="field-label">To</div>
                                    <div className="field-inner">
                                      <Input
                                        size="large"
                                        placeholder="To"
                                        prefix={<CiLocationOn />}
                                        onChange={onChange}
                                      />
                                    </div>
                                  </div>
                                  <div className="form-group col-lg col-md-12 col-sm-12">
                                    <div className="field-label">In</div>
                                    <div className="field-inner">
                                      <DatePicker
                                        size="large"
                                        // style={{ height: "50px" }}
                                        onChange={onChange}
                                      />
                                    </div>
                                  </div>
                                  <div className="form-group col-lg col-md-12 col-sm-12">
                                    <div className="field-label">Out</div>
                                    <div className="field-inner">
                                      <DatePicker
                                        size="large"
                                        // style={{ height: "50px" }}
                                        onChange={onChange}
                                      />
                                    </div>
                                  </div>

                                  <div className="form-group col-lg col-md-12 col-sm-12">
                                    <div className="field-label"></div>
                                    <div className="field-inner">
                                      <Button
                                        style={{
                                          marginTop: "20px",
                                          // height: "50px",
                                          width: "40%",
                                        }}
                                        icon={<CloseOutlined />}
                                      />
                                    </div>
                                  </div>
                                </div>
                              )}

                              {/* add city button for multicity */}
                              {/* <Button
                                style={{
                                  marginTop: "20px",
                                  // height: "50px",
                                  width: "20%",
                                }}
                                icon={<PlusOutlined />}
                              >
                                Add More Flight
                              </Button> */}
                            </div>
                          </div>
                        </div>
                        {/* </form> */}
                      </div>
                      {/* <p className="lower-text">
                        <span>3200</span> tour packages waiting for you
                      </p> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="right-col col-lg-6 col-md-12">
                <div
                  className="inner wow fadeInRight"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                >
                  <div
                    className="image-layer"
                    style={{ backgroundImage: `url(${manWithBag})` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--End Banner Section --> */}
    </>
  );
};

export default Hero3;
