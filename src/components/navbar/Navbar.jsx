import React, { useState } from "react";
import logoImage from "../../assets/images/logo.png";
import menuIcon from "../../assets/images/icons/menu-icon.svg";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);
  const handleNav = () => {
    setNav((prevNav) => !prevNav);
    setLogo((prevLogo) => !prevLogo);
  };
  //   const handleLogo = () => {

  //   };
  return (
    <div className="flex justify-between items-center h-20 px-4 fixed-header ">
      <div className={logo ? "hidden" : "block"}>
        <a href="#" title="Travilo">
          <img src={logoImage} alt="Travilo Logo" title="Travilo Logo" />
        </a>
      </div>
      <div>
        <ul className="hidden md:flex">
          <li>Flight</li>
          <li>Hotel</li>
          <li>Visa</li>
          <li>Tours</li>
          <li>Destination</li>
          <li>Others</li>
        </ul>
      </div>

      <div>
        <ul className="hidden md:flex">
          <li>Login/Signup</li>
        </ul>
      </div>
      <div>
        <ul className="hidden md:flex">
          <li className="">
            <i className="fab fa-facebook-f"></i>
          </li>
          <li className="">
            <i className="fab fa-twitter"></i>
          </li>
          <li className="">
            <i className="fab fa-linkedin-in"></i>
          </li>
          <li>
            <i className="fab fa-youtube"></i>
          </li>
        </ul>
      </div>
      <div className="hidden md:flex">
        <a href="tel:+96899999000">
          <i className="icon fa-solid fa-phone"></i> Call Us
          <span>+968 99999000</span>
        </a>
      </div>

      {/* hamburger */}
      <div onClick={handleNav} className="md:hidden z-10">
        {/* <img className="h-9" src={menuIcon} alt="" /> */}
        {nav ? (
          <AiOutlineClose className="text-black" size={20} />
        ) : (
          <HiOutlineMenuAlt4 size={20} />
        )}
      </div>

      {/* mobile menu */}
      <div
        onClick={handleNav}
        className={
          nav
            ? "absolute left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col"
            : "absolute left-[-100%]"
        }
      >
        <div>
          <a href="#" title="Travilo">
            <img src={logoImage} alt="Travilo Logo" title="Travilo Logo" />
          </a>
        </div>
        <ul>
          <li className="border-b">Flight</li>
          <li className="border-b">Hotel</li>
          <li className="border-b">Visa</li>
          <li className="border-b">Tours</li>
          <li className="border-b">Destination</li>
          <li className="border-b">Others</li>
        </ul>
        <div className="flex flex-col">
          <button className="my-4">Login/Signup</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
