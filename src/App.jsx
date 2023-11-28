import { BrowserRouter, Route, Routes } from "react-router-dom";
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
import Dashboard from "./pages/user/Dashboard";
import Routers from "./routers/Routers";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </>
  );
}

export default App;
