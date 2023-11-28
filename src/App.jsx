import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
// import Hotel from "./components/hotel/Hotel";

// import "./assets/css/sections/global-settings.css"

import "./app.css";
import "./assets/css/custom-animate.css";
import "./assets/css/responsive.css";
import "./assets/css/style.css";

import ScrollToTop from "./components/scroll-to-top/ScrollToTop";

import Footer3 from "./components/footer/Footer3";
import Navbar3 from "./components/navbar/Navbar3";
import WhatsAppChat from "./components/whatsapp/WhatsappChat";
import About from "./pages/about/About";
import Blog from "./pages/blog/Blog";
import BlogDetails from "./pages/blogDetails/BlogDetails";
import Contact from "./pages/contact/Contact";
import Flight from "./pages/flight/Flight";
import GroupTicket from "./pages/groupticket/GroupTicket";
import Hajj from "./pages/hajj/Hajj";
import Hotels from "./pages/hotels/Hotels";
import Insurance from "./pages/insurance/Insurance";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import TourDetails from "./pages/tourDetails/TourDetails";
import TourList from "./pages/tourList/TourList";
import TourPackages from "./pages/tourPackages/TourPackages";
import Visa from "./pages/visa/Visa";
import NotFound from "./pages/notFound/NotFound";

function App() {
  return (
    <div className="page-wrapper">
      <Navbar3 />
      <WhatsAppChat />
      <ScrollToTop />
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
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>

      <Footer3 />
    </div>
  );
}

export default App;
