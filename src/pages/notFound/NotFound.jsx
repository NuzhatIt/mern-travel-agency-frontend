import React from "react";
import Intro3 from "../../components/intro/Intro3";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
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
  );
};

export default NotFound;
