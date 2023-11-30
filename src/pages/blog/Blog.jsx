import React from "react";
import Navbar3 from "./../../components/navbar/Navbar3";
import WhatsAppChat from './../../components/whatsapp/WhatsappChat';
import ScrollToTop from './../../components/scroll-to-top/ScrollToTop';
import Footer3 from './../../components/footer/Footer3';

const Blog = () => {
  return (
    <div className="page-wrapper">
      <Navbar3 />
      <WhatsAppChat />
      <ScrollToTop />
      <Footer3 />
    </div>
  );
};

export default Blog;
