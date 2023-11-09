import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./components/list/List";
// import Hotel from "./components/hotel/Hotel";

// import "./assets/css/sections/global-settings.css"

import "./app.css";
import "./assets/css/style.css";
import "./assets/css/custom-animate.css";
import "./assets/css/responsive.css";

import ScrollToTop from "./components/scroll-to-top/ScrollToTop";

import TourList from "./pages/tourList/TourList";
import TourPackages from "./pages/tourPackages/TourPackages";
import TourDetails from "./pages/tourDetails/TourDetails";
import Destinations from "./pages/destinations/Destinations";
import Hotels from "./pages/hotels/Hotels";
import HotelDetails from "./pages/hotelDetails/HotelDetails";
import About from "./pages/about/About";
import BlogDetails from "./pages/blogDetails/BlogDetails";
import DestinationDetails from "./pages/destinationDetails/DestinationDetails";
import Blog from "./pages/blog/Blog";
import Contact from "./pages/contact/Contact";
import WhatsAppChat from "./components/whatsapp/WhatsappChat";
import Flight from "./pages/flight/Flight";
import Navbar3 from "./components/navbar/Navbar3";
import Footer3 from "./components/footer/Footer3";
import Visa from "./pages/visa/Visa";
import Hajj from "./pages/hajj/Hajj";
import Insurance from "./pages/insurance/Insurance";
import GroupTicket from "./pages/groupticket/GroupTicket";

function App() {
  return (
    <>
      <Navbar3 />
      <WhatsAppChat />

      {/* <a
        href="https://wa.me/"
        className="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-whatsapp whatsapp-icon"></i>
      </a> */}
      <ScrollToTop />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/hotels" element={<List />} /> */}
          {/* <Route path="/hotels/:id" element={<Hotel />} /> */}

          <Route path="/tourlist" element={<TourList />} />
          <Route path="/tourpackages" element={<TourPackages />} />
          <Route path="/tourdetails" element={<TourDetails />} />

          {/* <Route path="/destinations" element={<Destinations />} /> */}
          {/* <Route path="/destinationdetails" element={<DestinationDetails />} /> */}
          <Route path="/services/visa" element={<Visa />} />
          {/* <Route path="/services/visa/:id" element={<HotelDetails />} /> */}
          <Route path="/services/flight" element={<Flight />} />
          {/* <Route path="/services/flight/:id" element={<HotelDetails />} /> */}
          <Route path="/services/hotels" element={<Hotels />} />
          {/* <Route path="/services/hotels/:id" element={<HotelDetails />} /> */}
          <Route path="/services/hajj" element={<Hajj />} />
          <Route path="/services/hajj/:id" element={<Hajj />} />
          <Route path="/services/insurance" element={<Insurance />} />
          {/* <Route path="/services/insurance/:id" element={<HotelDetails />} /> */}
          <Route path="/services/groupticket" element={<GroupTicket />} />
          {/* <Route path="/services/groupticket/:id" element={<HotelDetails />} /> */}

          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogdetails" element={<BlogDetails />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Footer3 />
    </>
  );
}

export default App;
