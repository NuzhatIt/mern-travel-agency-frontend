import useWOW from "../../custom-hooks/useWOW";
import { useEffect, useState } from "react";
import bgGradient13 from "../../assets/images/background/bg-gradient-13.png";
import bgGradient14 from "../../assets/images/background/bg-gradient-14.png";
import banner7 from "../../assets/images/resources/featured/banner-7.jpg";

const Subscribe3 = () => {
  const { initWOW } = useWOW();
  useEffect(() => {
    initWOW();
  }, []);
  const [email,setEmail]= useState("");
  const onChange = ()=>{}
  return (
    <>
      {/* <!--Subscribe Section--> */}
      <div className="subscribe-section">
        <div className="auto-container">
          <div
            className="outer-box wow fadeInUp"
            data-wow-delay="0ms"
            data-wow-duration="1500ms"
          >
            <div className="bg-grad-left">
              <img src={bgGradient13} alt="" title="" />
            </div>
            <div className="bg-grad-right">
              <img src={bgGradient14} alt="" title="" />
            </div>
            <div className="content-box">
              <div
                className="bg-layer"
                style={{
                  backgroundImage: `url(${banner7})`,
                }}
              ></div>
              <div className="row clearfix">
                <div className="text-col col-xl-6 col-lg-12 col-md-12 col-sm-12">
                  <div className="inner">
                    <div className="title-box">
                      <div className="subtitle">Let’s Explore the World</div>
                      <h2>Get Special Offers in Your Inbox</h2>
                    </div>
                  </div>
                </div>
                <div className="form-col col-xl-6 col-lg-12 col-md-12 col-sm-12">
                  <div className="inner">
                    <div className="form-box subscribe-form">
                      <form method="post" action="contact.html">
                        <div className="form-group">
                          <div className="field-inner">
                            <input
                              type="email"
                              name="email"
                              value={email}
                              placeholder="Submit your email"
                              required
                              onChange={onChange}
                            />
                          </div>
                          <button type="submit" className="theme-btn">
                            <i className="icon fa fa-paper-plane"></i>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscribe3;
