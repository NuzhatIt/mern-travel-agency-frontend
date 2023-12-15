import React from "react";
import Intro3 from "../../components/intro/Intro3";
import { Link } from "react-router-dom";
import WhatsAppChat from "./../../components/whatsapp/WhatsappChat";
import ScrollToTop from "./../../components/scroll-to-top/ScrollToTop";
import Navbar3 from "./../../components/navbar/Navbar3";
import Footer3 from "./../../components/footer/Footer3";

const NotFound = () => {
  return (
    <div className="page-wrapper">
      <WhatsAppChat />
      <ScrollToTop />
      <Navbar3 />
      <div className="intro-section">
        <div className="auto-container">
          <div className="row clearfix justify-content-center">
            <h1>Oops! You seem to be lost.</h1>
            <div class="link-box">
              <Link to="/" class="theme-btn btn-style-one">
                <span>Home</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer3 />
    </div>
  );
};

export default NotFound;
