import React from "react";
import { useLocation } from "react-router-dom";
import Routers from "../../routers/Routers";
import Footer3 from "../footer/Footer3";
import Navbar3 from "../navbar/Navbar3";
import WhatsAppChat from "../whatsapp/WhatsappChat";
import ScrollToTop from "./../scroll-to-top/ScrollToTop";

const Layout = () => {
  const location = useLocation();
  // console.log(location);
  return (
    <>
      {!location.pathname.startsWith("/dashboard") && <WhatsAppChat />}
      <ScrollToTop />
      <Navbar3 />
      <Routers />
      <Footer3 />
    </>
  );
};

export default Layout;
