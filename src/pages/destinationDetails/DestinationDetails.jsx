import React from "react";
import Navbar3 from "../../components/navbar/Navbar3";
import Footer3 from "../../components/footer/Footer3";
import banner2 from "../../assets/images/resources/featured/banner-2.jpg";
import istanbulLightHouseThumb from "../../assets/images/resources/destinations/istanbul-lighthouse-thumb.jpg";
import istanbulLightHouse from "../../assets/images/resources/destinations/istanbul-lighthouse.jpg";
import istanbulCityThumb from "../../assets/images/resources/destinations/istanbul-city-thumb.jpg";
import istanbulCity from "../../assets/images/resources/destinations/istanbul-city.jpg";
import istanbulMasjidThumb from "../../assets/images/resources/destinations/istanbul-masjid-thumb.jpg";
import istanbulMasjid from "../../assets/images/resources/destinations/istanbul-masjid.jpg";
import istanbulWalkTour from "../../assets/images/resources/destinations/istanbul-walk-tour.jpg";

import istanbulFoodMarketActivity from "../../assets/images/resources/destinations/istanbul-food-market-activity.jpg";
import istanbulAirBallonsActivity from "../../assets/images/resources/destinations/istanbul-air-ballons-activity.jpg";
import istanbulDerwishActivity from "../../assets/images/resources/destinations/istanbul-derwish-activity.jpg";
import tIcon3 from "../../assets/images/icons/t-icon-3.png";
import istanbulSpicesTour from "../../assets/images/resources/destinations/istanbul-spices-tour.jpg";
import tIcon2 from "../../assets/images/icons/t-icon-2.png";
import istanbulCruiseTour from "../../assets/images/resources/destinations/istanbul-cruise-tour.jpg";
import tIcon1 from "../../assets/images/icons/t-icon-1.png";
import istanbulMomHotel from "../../assets/images/resources/destinations/istanbul-mom-hotel.jpg";
import littleSofiaHotel from "../../assets/images/resources/destinations/istanbul-little-sofia-hotel.jpg";
import istanbulBeachHotel from "../../assets/images/resources/destinations/istanbul-beach-hotel.jpg";
import Navbar3 from './../../components/navbar/Navbar3';
import WhatsAppChat from './../../components/whatsapp/WhatsappChat';
import ScrollToTop from './../../components/scroll-to-top/ScrollToTop';
import Footer3 from './../../components/footer/Footer3';

const DestinationDetails = () => {
  return (
    <div className="page-wrapper">
      <Navbar3 />
      <WhatsAppChat />
      <ScrollToTop />
      {/* Banner Section */}
      <section className="inner-banner">
        <div
          className="image-layer"
          style={{
            backgroundImage: `url(${banner2})`,
          }}
        ></div>
        <div className="auto-container">
          <div className="content-box">
            <h1>Istanbul</h1>
            <div className="bread-crumb">
              {/* <ul className="clearfix">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="destinations.html">Destinations</a>
                </li>
                <li className="current">Istanbul</li>
              </ul> */}
            </div>
          </div>
        </div>
      </section>
      {/*End Banner Section */}

      {/*Destination Single*/}
      <div className="destination-single">
        <div className="auto-container">
          <div className="upper-images">
            <div className="row clearfix">
              {/*Image Block*/}
              <div className="image-col col-lg-8 col-md-12 col-sm-12">
                {/*Image Block*/}
                <div className="image-block">
                  <div className="image">
                    <a
                      href={istanbulMasjid}
                      className="lightbox-image"
                      data-fancybox="D-Gallery"
                    >
                      <img src={istanbulMasjidThumb} alt="Istanbul Masjid" />
                    </a>
                  </div>
                </div>
              </div>
              {/*Image Block*/}
              <div className="image-col col-lg-4 col-md-12 col-sm-12">
                {/*Image Block*/}
                <div className="image-block">
                  <div className="image">
                    <a
                      href={istanbulCity}
                      className="lightbox-image"
                      data-fancybox="D-Gallery"
                    >
                      <img src={istanbulCityThumb} alt="Istanbul City" />
                    </a>
                  </div>
                </div>
                {/*Image Block*/}
                <div className="image-block">
                  <div className="image">
                    <a
                      href={istanbulLightHouse}
                      className="lightbox-image"
                      data-fancybox="D-Gallery"
                    >
                      <img src={istanbulLightHouseThumb} alt="Light House" />
                    </a>
                  </div>
                  <div className="img-link">
                    <a href="#" className="theme-btn">
                      <span>+ 160 Photos</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lower-content">
            <div className="row clearfix">
              <div className="content-col col-lg-8 col-md-12 col-sm-12">
                <div className="inner">
                  <h3>About Istanbul</h3>
                  <div className="travilo-text">
                    <p>
                      Istanbul, the vibrant and historic city straddling the
                      continents of Europe and Asia, offers an enchanting blend
                      of cultures, sights, and experiences that captivate every
                      traveler's heart. As Turkey's cultural and economic hub,
                      Istanbul seamlessly fuses its rich heritage with
                      modernity, creating an unforgettable journey for visitors.
                    </p>
                    <p>
                      The city is home to some of the world's most iconic
                      landmarks, including the awe-inspiring Hagia Sophia, the
                      majestic Blue Mosque, and the grand Topkapi Palace, each
                      bearing witness to Istanbul's illustrious past. Wandering
                      through the bustling streets, you'll find an array of
                      delightful bazaars, where you can haggle for unique
                      souvenirs, immerse yourself in the aromatic spices, and
                      savor traditional Turkish delights. As the sun sets, head
                      to the banks of the Bosphorus strait for a magical view of
                      Istanbul's skyline, a true testament to its allure as the
                      crossroads between Europe and Asia.
                    </p>
                    <p>
                      Prepare your taste buds for an unforgettable gastronomic
                      adventure in Istanbul, where a delightful fusion of
                      flavors awaits you at every turn. Turkish cuisine,
                      renowned for its rich and diverse flavors, is showcased in
                      full glory throughout the city's bustling streets and
                      quaint eateries. Don't miss the chance to savor an
                      authentic Turkish breakfast, complete with fresh bread,
                      olives, cheeses, and menemen (scrambled eggs with tomatoes
                      and peppers). For lunch, indulge in mouthwatering kebabs,
                      whether it's the succulent doner or the savory shish
                      kebab.
                    </p>
                    <p>
                      As the evening sets in, find yourself in the heart of
                      Istanbul's vibrant nightlife, with bustling rooftop bars
                      and traditional meyhanes (taverns) offering an array of
                      mezes (appetizers) and raki, Turkey's famous
                      anise-flavored spirit. Foodies will find themselves in
                      paradise as they explore Istanbul's diverse culinary
                      scene, with each dish reflecting the city's rich cultural
                      tapestry.
                    </p>
                    <p>
                      Step back in time as you delve into Istanbul's fascinating
                      history, with a heritage spanning over 2,600 years. From
                      the time of the Byzantine Empire to the splendor of the
                      Ottoman era, Istanbul's landmarks narrate a mesmerizing
                      tale of triumphs, conquests, and cultural exchanges. The
                      Hagia Sophia, originally a church and later transformed
                      into a mosque and now a museum, stands as a symbol of
                      architectural brilliance and religious significance.
                      Wander through the labyrinthine streets of the Grand
                      Bazaar, one of the world's oldest and largest covered
                      markets, where centuries-old craftsmanship and traditional
                      trades coexist with modern shopping experiences. And no
                      visit to Istanbul would be complete without crossing the
                      iconic Galata Bridge, offering a stunning panorama of the
                      Golden Horn and a glimpse into the city's timeless allure.
                    </p>
                    <p>
                      Whether you're a history enthusiast or simply looking to
                      be enchanted by the mystique of a bygone era, Istanbul
                      promises an immersive journey through time like no other.
                    </p>
                  </div>
                  <div className="basic-info">
                    <div className="i-block clearfix">
                      <h5>Basic Information</h5>
                    </div>
                    <div className="i-block clearfix">
                      <div className="i-title">Country</div>
                      <div className="i-content">Turkey</div>
                    </div>
                    <div className="i-block clearfix">
                      <div className="i-title">Language</div>
                      <div className="i-content">
                        Turkish, Kurdish, Arabic, Zaza, Circassian
                      </div>
                    </div>
                    <div className="i-block clearfix">
                      <div className="i-title">Currency</div>
                      <div className="i-content">Turkish Lira</div>
                    </div>
                    <div className="i-block clearfix">
                      <div className="i-title">Area</div>
                      <div className="i-content">2,063 Square Miles</div>
                    </div>
                    <div className="i-block clearfix">
                      <div className="i-title">Population</div>
                      <div className="i-content">15M</div>
                    </div>
                    <div className="i-block clearfix">
                      <div className="i-title">Time Zone</div>
                      <div className="i-content">UTC+2</div>
                    </div>
                    <div className="i-block clearfix">
                      <div className="i-title">Time to Travel</div>
                      <div className="i-content">May, June, July, August</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="info-col col-lg-4 col-md-12 col-sm-12">
                <div className="inner">
                  {/*Block*/}
                  <div className="info-block loc-map">
                    <div className="inner-box">
                      <h3>City Map</h3>
                      <div className="map-box">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d385396.3211045611!2d28.68252620266689!3d41.005370208664374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2zxLBzdGFuYnVsLCBUw7xya2l5ZQ!5e0!3m2!1sen!2som!4v1691060523160!5m2!1sen!2som"
                          allowFullScreen=""
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                        />
                      </div>
                    </div>
                  </div>
                  {/*Block*/}
                  <div className="info-block weather-info">
                    <div className="inner-box">
                      <h3>Weather</h3>
                      <div className="weather">
                        <ul>
                          <li className="clearfix">
                            <span className="ttl">Jan - Feb</span>
                            <span className="dtl">12o C - 18o C</span>
                          </li>
                          <li className="clearfix">
                            <span className="ttl">Mar - Apr</span>
                            <span className="dtl">8o C - 12o C</span>
                          </li>
                          <li className="clearfix">
                            <span className="ttl">May - Jun</span>
                            <span className="dtl">4o C - 8o C</span>
                          </li>
                          <li className="clearfix">
                            <span className="ttl">Jul - Aug</span>
                            <span className="dtl">12o C - 16o C</span>
                          </li>
                          <li className="clearfix">
                            <span className="ttl">Sep - Oct</span>
                            <span className="dtl">15o C - 18o C</span>
                          </li>
                          <li className="clearfix">
                            <span className="ttl">Nov - Dec</span>
                            <span className="dtl">22o C - 30o C</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Posts Section*/}
      <div className="default-post-section">
        <div className="auto-container">
          <div className="u-title clearfix">
            <h2>Tours in Istanbul</h2>
            <div className="link-box">
              <a href="#" className="theme-btn">
                View All
              </a>
            </div>
          </div>
          <div className="row clearfix justify-content-center">
            {/*Block*/}
            <div className="package-block col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box">
                <div className="image-box">
                  <div className="image">
                    <a href="tour-single.html">
                      <img src={istanbulWalkTour} alt="Walk Tour" />
                    </a>
                  </div>
                  <div className="b-title top-rated">
                    <span>Top Rated</span>
                  </div>
                </div>
                <div className="lower-box">
                  <div className="p-icon">
                    <img src={tIcon1} alt="" />
                    <span className="icon flaticon-adventure" />
                  </div>
                  <div className="location">Istanbul Walk Tour</div>
                  <h5>
                    <a href="tour-single.html">
                      Amazing Historical Istanbul Walking Tour
                    </a>
                  </h5>
                  <div className="info clearfix">
                    <div className="duration">
                      <i className="fa-solid fa-clock" /> 5 Days 6 Nights
                    </div>
                    <div className="persons">
                      <i className="fa-solid fa-user" /> 12
                    </div>
                  </div>
                  <div className="bottom-box clearfix">
                    <div className="rating">
                      <a href="#" className="theme-btn">
                        <i className="fa-solid fa-star" />
                        <strong>4.8</strong> &ensp;{" "}
                        <span className="count">3210 Reviews</span>
                      </a>
                    </div>
                    <div className="price">
                      Start from &ensp;<span className="amount">$399</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*Block*/}
            <div className="package-block col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box">
                <div className="image-box">
                  <div className="image">
                    <a href="tour-single.html">
                      <img src={istanbulCruiseTour} alt="Spice Tour" />
                    </a>
                  </div>
                </div>
                <div className="lower-box">
                  <div className="p-icon">
                    <img src={tIcon2} alt="" />
                    <span className="icon flaticon-hiking" />
                  </div>
                  <div className="location">Bosphorus</div>
                  <h5>
                    <a href="tour-single.html">
                      Day Light Bosphorus Cruise and Fun Tour
                    </a>
                  </h5>
                  <div className="info clearfix">
                    <div className="duration">
                      <i className="fa-solid fa-clock" /> 2 Days 1 Nights
                    </div>
                    <div className="persons">
                      <i className="fa-solid fa-user" /> 4
                    </div>
                  </div>
                  <div className="bottom-box clearfix">
                    <div className="rating">
                      <a href="#" className="theme-btn">
                        <i className="fa-solid fa-star" />
                        <strong>4.5</strong> &ensp;{" "}
                        <span className="count">7560 Reviews</span>
                      </a>
                    </div>
                    <div className="price">
                      Start from &ensp;<span className="amount">$450</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*Block*/}
            <div className="package-block col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box">
                <div className="image-box">
                  <div className="image">
                    <a href="tour-single.html">
                      <img src={istanbulSpicesTour} alt="Spice Tour" />
                    </a>
                  </div>
                  <div className="b-title featured">
                    <span>Featured</span>
                  </div>
                </div>
                <div className="lower-box">
                  <div className="p-icon">
                    <img src={tIcon3} alt="" />
                    <span className="icon flaticon-family" />
                  </div>
                  <div className="location">Istanbul</div>
                  <h5>
                    <a href="tour-single.html">
                      Istanbul Culinary, Flavors of the East and West
                    </a>
                  </h5>
                  <div className="info clearfix">
                    <div className="duration">
                      <i className="fa-solid fa-clock" /> 2 Days 3 Nights
                    </div>
                    <div className="persons">
                      <i className="fa-solid fa-user" /> 12
                    </div>
                  </div>
                  <div className="bottom-box clearfix">
                    <div className="rating">
                      <a href="#" className="theme-btn">
                        <i className="fa-solid fa-star" />
                        <strong>4.7</strong> &ensp;{" "}
                        <span className="count">6877 Reviews</span>
                      </a>
                    </div>
                    <div className="price">
                      Start from &ensp;<span className="amount">$335</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Posts Section*/}
      <div className="default-post-section">
        <div className="auto-container">
          <div className="u-title clearfix">
            <h2>Activities in Istanbul</h2>
            <div className="link-box">
              <a href="#" className="theme-btn">
                View All
              </a>
            </div>
          </div>
          <div className="row clearfix justify-content-center">
            {/*Block*/}
            <div className="package-block alt col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box">
                <div className="image-box">
                  <div className="image">
                    <a href="activity-single.html">
                      <img src={istanbulDerwishActivity} alt="Derwish" />
                    </a>
                  </div>
                </div>
                <div className="lower-box">
                  <div className="location">Istanbul</div>
                  <h5>
                    <a href="activity-single.html">Whirling Dervishes Show</a>
                  </h5>
                  <div className="bottom-box clearfix">
                    <div className="rating">
                      <a href="#" className="theme-btn">
                        <i className="fa-solid fa-star" />
                        <strong>4.3</strong> &ensp;{" "}
                        <span className="count">4544 Reviews</span>
                      </a>
                    </div>
                    <div className="price">
                      Start from &ensp;<span className="amount">$225</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*Block*/}
            <div className="package-block alt col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box">
                <div className="image-box">
                  <div className="image">
                    <a href="activity-single.html">
                      <img
                        src={istanbulAirBallonsActivity}
                        alt="Hot Air Balloons"
                      />
                    </a>
                  </div>
                  <div className="b-title top-rated">
                    <span>Top Rated</span>
                  </div>
                </div>
                <div className="lower-box">
                  <div className="location">Cappadocia</div>
                  <h5>
                    <a href="activity-single.html">Hot Air Balloon Ride</a>
                  </h5>
                  <div className="bottom-box clearfix">
                    <div className="rating">
                      <a href="#" className="theme-btn">
                        <i className="fa-solid fa-star" />
                        <strong>4.6</strong> &ensp;{" "}
                        <span className="count">8120 Reviews</span>
                      </a>
                    </div>
                    <div className="price">
                      Start from &ensp;<span className="amount">$300</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*Block*/}
            <div className="package-block alt col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box">
                <div className="image-box">
                  <div className="image">
                    <a href="activity-single.html">
                      <img src={istanbulFoodMarketActivity} alt="Street Food" />
                    </a>
                  </div>
                  <div className="b-title featured">
                    <span>Featured</span>
                  </div>
                </div>
                <div className="lower-box">
                  <div className="location">Istanbul</div>
                  <h5>
                    <a href="activity-single.html">Local Street Food Tour</a>
                  </h5>
                  <div className="bottom-box clearfix">
                    <div className="rating">
                      <a href="#" className="theme-btn">
                        <i className="fa-solid fa-star" />
                        <strong>4.8</strong> &ensp;{" "}
                        <span className="count">5233 Reviews</span>
                      </a>
                    </div>
                    <div className="price">
                      Start from &ensp;<span className="amount">$245</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Posts Section*/}
      <div className="default-post-section">
        <div className="auto-container">
          <div className="u-title clearfix">
            <h2>Hotels in Istanbul</h2>
            <div className="link-box">
              <a href="#" className="theme-btn">
                View All
              </a>
            </div>
          </div>
          <div className="row clearfix justify-content-center">
            {/*Block*/}
            <div className="package-block alt col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box">
                <div className="image-box">
                  <div className="image">
                    <a href="hotel-single.html">
                      <img src={istanbulMomHotel} alt="Mom Hotel" />
                    </a>
                  </div>
                  <div className="b-title featured">
                    <span>Featured</span>
                  </div>
                  <div className="fav-btn">
                    <a href="#">
                      <span className="far fa-heart" />
                    </a>
                  </div>
                </div>
                <div className="lower-box">
                  <div className="location">Istanbul</div>
                  <h5>
                    <a href="hotel-single.html">Mom Hotel</a>
                  </h5>
                  <div className="bottom-box clearfix">
                    <div className="rating">
                      <a href="#" className="theme-btn">
                        <i className="fa-solid fa-star" />
                        <strong>4.8</strong> &ensp;{" "}
                        <span className="count">4544 Reviews</span>
                      </a>
                    </div>
                    <div className="price">
                      Start from &ensp;<span className="amount">$240</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*Block*/}
            <div className="package-block alt col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box">
                <div className="image-box">
                  <div className="image">
                    <a href="hotel-single.html">
                      <img src={istanbulBeachHotel} alt="Beach Hotel" />
                    </a>
                  </div>
                  <div className="b-title top-rated">
                    <span>Top Rated</span>
                  </div>
                  <div className="fav-btn">
                    <a href="#">
                      <span className="far fa-heart" />
                    </a>
                  </div>
                </div>
                <div className="lower-box">
                  <div className="location">Istanbul</div>
                  <h5>
                    <a href="hotel-single.html">Istanbul Beach Hotel</a>
                  </h5>
                  <div className="bottom-box clearfix">
                    <div className="rating">
                      <a href="#" className="theme-btn">
                        <i className="fa-solid fa-star" />
                        <strong>4.4</strong> &ensp;{" "}
                        <span className="count">456 Reviews</span>
                      </a>
                    </div>
                    <div className="price">
                      Start from &ensp;<span className="amount">$450</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*Block*/}
            <div className="package-block alt col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box">
                <div className="image-box">
                  <div className="image">
                    <a href="hotel-single.html">
                      <img src={littleSofiaHotel} alt="Little Sofia" />
                    </a>
                  </div>
                  <div className="fav-btn">
                    <a href="#">
                      <span className="far fa-heart" />
                    </a>
                  </div>
                </div>
                <div className="lower-box">
                  <div className="location">Istanbul</div>
                  <h5>
                    <a href="hotel-single.html">Little Sofia Hotel</a>
                  </h5>
                  <div className="bottom-box clearfix">
                    <div className="rating">
                      <a href="#" className="theme-btn">
                        <i className="fa-solid fa-star" />
                        <strong>4.9</strong> &ensp;{" "}
                        <span className="count">7667 Reviews</span>
                      </a>
                    </div>
                    <div className="price">
                      Start from &ensp;<span className="amount">$569</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer3 />
    </div>
  );
};

export default DestinationDetails;
