import AboutUs3 from "../../components/aboutus/AboutUs3";
import Facts3 from "../../components/facts/Facts3";
import Hero3 from "../../components/hero/Hero3";
import Intro3 from "../../components/intro/Intro3";
import News3 from "../../components/news/News3";
import Packages3 from "../../components/packages/Packages3";
import Partners3 from "../../components/partners/Partners3";
import Subscribe3 from "../../components/subscribe/Subscribe3";
import Testimonial3 from "../../components/testimonial/Testimonial3";
import TourTypes3 from "../../components/tourTypes/TourTypes3";
import TrendingDestinations3 from "../../components/trendingDestinations/TrendingDestinations3";
import WhyUs3 from "../../components/whyUs/WhyUs3";
import WhatsAppChat from "../../components/whatsapp/WhatsappChat";
import ScrollToTop from "../../components/scroll-to-top/ScrollToTop";
import Navbar3 from "../../components/navbar/Navbar3";
import Footer3 from "../../components/footer/Footer3";

const Home = () => {
  return (
    <div className="page-wrapper">
      <WhatsAppChat />
      <ScrollToTop />
      <Navbar3 />
      <Hero3 />
      <Intro3 />
      <AboutUs3 />
      <Packages3 />
      <TrendingDestinations3 />
      <TourTypes3 />
      <WhyUs3 />
      <Facts3 />
      <Testimonial3 />
      <Partners3 />
      <News3 />
      <Subscribe3 />
      <Footer3 />
    </div>
  );
};

export default Home;
