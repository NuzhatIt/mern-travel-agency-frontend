import React from "react";
import logo from "../../assets/images/logo.png";
import menuIcon from "../../assets/images/icons/menu-icon.svg";
// import "../../assets/css/style.css";

const Navbar1 = () => {
  return (
    <>
      <header className="main-header">
        {/* <!-- Header Upper --> */}
        <div className="header-upper">
          <div className="auto-container">
            {/* <!-- Main Box --> */}
            <div className="main-box clearfix">
              {/* <!--Logo--> */}
              <div className="logo-box">
                <div className="logo">
                  <a href="#" title="Travilo">
                    <img src={logo} alt="Travilo Logo" title="Travilo Logo" />
                  </a>
                </div>
              </div>

              <div className="nav-box clearfix">
                {/* <!--Nav Outer--> */}
                <div className="nav-outer clearfix">
                  <nav className="main-menu">
                    <ul className="navigation clearfix">
                      <li className="current dropdown">
                        <a href="#">Home</a>
                        <ul>
                          <li>
                            <a href="#">Home 01</a>
                          </li>
                          <li>
                            <a href="#">Home 02</a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a href="#">Tours</a>
                        <ul>
                          <li>
                            <a href="#">Tours List</a>
                          </li>
                          <li>
                            <a href="#">Tour Packages</a>
                          </li>
                          <li>
                            <a href="#">Tour Details</a>
                          </li>
                          <li>
                            <a href="#">Activities</a>
                          </li>
                          <li>
                            <a href="#">Activity Details</a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a href="#">Destination</a>
                        <ul>
                          <li>
                            <a href="#">All Destinations</a>
                          </li>
                          <li>
                            <a href="#">Destination Single</a>
                          </li>
                          <li>
                            <a href="#">Hotels</a>
                          </li>
                          <li>
                            <a href="#">Hotel Details</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">About</a>
                      </li>
                      <li className="dropdown">
                        <a href="#">News</a>
                        <ul>
                          <li>
                            <a href="#">Our Blog</a>
                          </li>
                          <li>
                            <a href="#">Blog Details</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Contact</a>
                      </li>
                    </ul>
                  </nav>
                  {/* <!-- .main-menu --> */}
                </div>
                {/* <!--Nav Outer End--> */}
              </div>

              {/* <!-- Hidden Nav Toggler --> */}
              <div className="nav-toggler">
                <button className="hidden-bar-opener">
                  <span className="icon">
                    <img src={menuIcon} alt="" />
                  </span>
                </button>
              </div>

              <div className="links-box clearfix">
                <div className="link login">
                  <a href="#">Login / Signup</a>
                </div>
                <div className="link lang-box">
                  <div className="lang-btn clearfix">
                    <span className="txt">En</span>
                    <span className="icon far fa-angle-down"></span>
                  </div>
                  <ul className="lang-list">
                    <li>
                      <a href="#">Tur</a>
                    </li>
                    <li>
                      <a href="#">Esp</a>
                    </li>
                    <li>
                      <a href="#">Rus</a>
                    </li>
                    <li>
                      <a href="#">Hin</a>
                    </li>
                  </ul>
                </div>
                <div className="link social">
                  <ul className="social-links clearfix">
                    <li>
                      <a href="#" className="facebook">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="twitter">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="linkedin">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="youtube">
                        <i className="fab fa-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="link call-to">
                  <a href="tel:+96899999000">
                    <i className="icon fa-solid fa-phone"></i> Call Us
                    <span className="nmbr">+968 99999000</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Header Upper --> */}
      </header>

      {/* <!--End Main Header --> */}

      {/* <!--Menu Backdrop--> */}
      <div className="menu-backdrop"></div>

      {/* <!-- Hidden Navigation Bar --> */}
      <div className="hidden-bar">
        {/* <!-- Hidden Bar Wrapper --> */}
        <div className="hidden-bar-wrapper">
          <div className="hidden-bar-closer">
            <span className="icon">
              <svg
                className="icon-close"
                role="presentation"
                viewBox="0 0 16 14"
              >
                <path
                  d="M15 0L1 14m14 0L1 0"
                  stroke="currentColor"
                  fill="none"
                  fillRule="evenodd"
                ></path>
              </svg>
            </span>
          </div>
          <div className="nav-logo-box">
            {/* <!-- logo will be copied here ! --> */}
          </div>

          {/* <!-- .Side-menu --> */}
          <nav className="side-menu">
            {/* <!-- main-menu will be copied here! --> */}
          </nav>
          {/* <!-- .side-menu --> */}

          <div className="links-box clearfix">
            <div className="clearfix">
              <div className="link">
                <a href="#" className="theme-btn btn-style-one">
                  <span>Login / Signup</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- / Hidden Bar Wrapper --> */}
      </div>
      {/* <!-- / Hidden Bar --> */}
    </>
  );
};

export default Navbar1;
