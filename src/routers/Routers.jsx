import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import TourList from "../pages/tourList/TourList";
import TourPackages from "../pages/tourPackages/TourPackages";
import TourDetails from "../pages/tourDetails/TourDetails";
import Visa from "../pages/visa/Visa";
import Flight from "../pages/flight/Flight";
import Hotels from "../pages/hotels/Hotels";
import Hajj from "../pages/hajj/Hajj";
import Insurance from "../pages/insurance/Insurance";
import GroupTicket from "../pages/groupticket/GroupTicket";
import About from "../pages/about/About";
import Blog from "../pages/blog/Blog";
import BlogDetails from "../pages/blogDetails/BlogDetails";
import Contact from "../pages/contact/Contact";
// import Dashboard from "../pages/user/Dashboard";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import NotFound from "../pages/notFound/NotFound";
import Sample from "../pages/sample/Sample";
import Dashboard from "../pages/dashboard/Dashboard";
// import Tables from "../pages/dashboard/Tables";
import "../assets/styles/main.css";
import "../assets/styles/responsive.css";
import Navbar3 from "./../components/navbar/Navbar3";
import ProtectedRoute from "./ProtectedRoute";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tourlist" element={<TourList />} />
      <Route path="/tourpackages" element={<TourPackages />} />
      <Route path="/tourdetails" element={<TourDetails />} />
      <Route path="/services/visa" element={<Visa />} />
      <Route path="/services/flight" element={<Flight />} />
      <Route path="/services/hotels" element={<Hotels />} />
      <Route path="/services/hajj" element={<Hajj />} />
      <Route path="/services/hajj/:id" element={<Hajj />} />
      <Route path="/services/insurance" element={<Insurance />} />
      <Route path="/services/groupticket" element={<GroupTicket />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blogdetails" element={<BlogDetails />} />
      <Route path="/contact" element={<Contact />} />

      {/* protected route starts */}
      <Route path="" element={<ProtectedRoute/>}>
        <Route path="/dashboard" element={<Dashboard active={"home"} />} />

        <Route
          path="/dashboard/tables"
          element={<Dashboard active={"tables"} />}
        />
        <Route
          path="/dashboard/billing"
          element={<Dashboard active={"billing"} />}
        />
        {/* <Route path="/dashboard/rtl" element={<Dashboard active={"rtl"} />} /> */}
        <Route
          path="/dashboard/profile"
          element={<Dashboard active={"profile"} />}
        />
      </Route>
      {/* protected route ends */}

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/sample" element={<Sample />} />
    </Routes>
  );
};

export default Routers;
