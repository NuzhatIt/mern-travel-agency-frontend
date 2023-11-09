import React, { useState } from "react";
import Navbar3 from "../../components/navbar/Navbar3";
import TourDetailsHero from "../../components/hero/TourDetailsHero";
import Footer3 from "../../components/footer/Footer3";

const TourDetails = () => {
  const [opener, SetOpener] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const handleClick = (index) => {
    const updateOpener = [...opener];
    updateOpener[index] = !updateOpener[index];
    SetOpener(updateOpener);
  };

  return (
    <div className="page-wrapper">
      <TourDetailsHero />

      {/*Default Single Container*/}
      <div className="dsp-container tour-single">
        <div className="auto-container">
          <div className="row clearfix">
            {/*Content Side*/}
            <div className="content-side col-xl-8 col-lg-12 col-md-12 col-sm-12">
              <div className="content-inner">
                <div className="sp-header">
                  <div className="loc-rat clearfix">
                    <div className="location">Phuket</div>
                    <div className="rating">
                      <a href="#" className="theme-btn">
                        <i className="fa-solid fa-star" /> <strong>4.8</strong>{" "}
                        <span className="count">4233 Reviews</span>
                      </a>
                    </div>
                    <div className="add-fav">
                      <a href="#">
                        <i className="far fa-heart" /> Add to Wishlist
                      </a>
                    </div>
                  </div>
                  <h1>The Allure of Thailand's Stunning Phuket</h1>
                  <div className="info clearfix">
                    <div className="duration">
                      <i className="fa-solid fa-clock" /> 4 Days 5 Nights
                    </div>
                    <div className="persons">
                      <i className="fa-solid fa-user" /> 12
                    </div>
                  </div>
                </div>
                <div className="upper-content">
                  <div className="text-content">
                    <h3>Tour Details</h3>
                    <p>
                      Escape to the tropical haven of Phuket, Thailand's largest
                      island, where breathtaking landscapes, pristine beaches,
                      and vibrant culture await. This enchanting tour offers a
                      perfect blend of relaxation and adventure, making it an
                      ideal getaway for travelers seeking an unforgettable
                      island escape.
                    </p>
                    <p>
                      Upon arrival, you'll be greeted with warm hospitality and
                      transferred to your luxurious beachfront resort.
                    </p>
                    <p>
                      The tour will take you on a journey of exploration, from
                      the stunning beaches of Patong, Kata, and Karon to the
                      lush greenery of Sirinat National Park. Dive into the
                      crystal-clear waters of Phi Phi Islands, renowned for
                      their vibrant coral reefs and marine life, or take a
                      leisurely boat trip to Phang Nga Bay to marvel at the
                      famous James Bond Island and unique limestone formations.
                    </p>
                    <p>
                      In addition to island-hopping, immerse yourself in Thai
                      culture as you visit colorful temples, bustling local
                      markets, and experience traditional Thai cuisine.
                    </p>
                    <p>
                      Whether you seek relaxation on pristine shores or
                      thrill-seeking adventures in the sea, Phuket's captivating
                      beauty will leave you with cherished memories for a
                      lifetime.
                    </p>
                    <br />
                    <h5>Highlights</h5>
                    <ul className="styled-list-one">
                      <li>
                        Explore the best beaches of Phuket, from lively Patong
                        to serene Kata and Karon. Discover the exotic underwater
                        world through snorkeling or scuba diving at Phi Phi
                        Islands.
                      </li>
                      <li>
                        Cruise through Phang Nga Bay to see the famous James
                        Bond Island and stunning limestone formations.
                      </li>
                      <li>
                        Visit iconic temples, such as the Big Buddha and Wat
                        Chalong, to experience Thai spiritual traditions.
                      </li>
                      <li>
                        Delight your taste buds with authentic Thai cuisine at
                        local restaurants and street food vendors.
                      </li>
                      <li>
                        Enjoy free time for leisure, relaxation, and optional
                        activities to tailor the tour to your preferences.
                      </li>
                      <li>
                        Experience the vibrant nightlife in Patong with a mix of
                        bars, restaurants, and entertainment venues.
                      </li>
                    </ul>
                  </div>
                  <div className="basic-info">
                    <div className="i-block clearfix">
                      <h5>Basic Information</h5>
                    </div>
                    <div className="i-block clearfix">
                      <div className="i-title">Destination</div>
                      <div className="i-content">Phuket</div>
                    </div>
                    <div className="i-block clearfix">
                      <div className="i-title">Departure</div>
                      <div className="i-content">
                        Muscat International Airport, Muscat
                      </div>
                    </div>
                    <div className="i-block clearfix">
                      <div className="i-title">Departure Time</div>
                      <div className="i-content">03.00 Pm GMT</div>
                    </div>
                    <div className="i-block clearfix">
                      <div className="i-title">Return Time</div>
                      <div className="i-content">8.00 AM GMT</div>
                    </div>
                    <div className="i-block clearfix">
                      <div className="i-title">Language</div>
                      <div className="i-content">English, Thai</div>
                    </div>
                    <div className="i-block clearfix">
                      <div className="i-title">Included</div>
                      <div className="i-content">
                        <ul className="styled-list-two">
                          <li>
                            Accommodation: Luxurious beachfront resort
                            accommodation during the entire tour, providing
                            comfort and relaxation.
                          </li>
                          <li>
                            Transportation: Airport transfers and all
                            transportation within Phuket, ensuring a hassle-free
                            journey.
                          </li>
                          <li>
                            Island-Hopping Excursions: Guided tours to explore
                            the beautiful beaches of Patong, Kata, Karon, and
                            the enchanting Phi Phi Islands.
                          </li>
                          <li>
                            Phang Nga Bay Cruise: A scenic boat trip to marvel
                            at the iconic James Bond Island and unique limestone
                            formations.
                          </li>
                          <li>
                            Cultural Experiences: Visits to significant temples
                            like the Big Buddha and Wat Chalong, offering
                            insights into Thai spiritual traditions.
                          </li>
                          <li>
                            Authentic Thai Cuisine: Enjoy mouthwatering Thai
                            dishes at local restaurants and street food vendors,
                            providing a delightful culinary experience.
                          </li>
                          <li>
                            English-Speaking Guide: Knowledgeable guides to
                            accompany you throughout the tour, providing
                            valuable insights and assistance.
                          </li>
                          <li>
                            All Entrance Fees: Admission fees to various
                            attractions and landmarks, making the journey
                            hassle-free.
                          </li>
                          <li>
                            Free Time: Ample leisure time to relax, explore
                            independently, or participate in optional activities
                            as per personal preferences.
                          </li>
                          <li>
                            Support: 24/7 customer support, ensuring you have a
                            smooth and enjoyable travel experience.
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="i-block clearfix">
                      <div className="i-title">Not Included</div>
                      <div className="i-content">
                        <ul className="styled-list-three">
                          <li>
                            International Flights: Airfare to and from Phuket is
                            not included, giving you the flexibility to book
                            flights according to your convenience.
                          </li>
                          <li>
                            Travel Insurance: Participants are encouraged to
                            arrange their travel insurance to cover unforeseen
                            events and emergencies.
                          </li>
                          <li>
                            Meals and Beverages: Meals and beverages not
                            specified in the itinerary are not included in the
                            tour package.
                          </li>
                          <li>
                            Personal Expenses: Expenses such as souvenirs,
                            laundry, telephone calls, and additional activities
                            beyond the itinerary are not covered.
                          </li>
                          <li>
                            Gratuities: Tipping for guides, drivers, and hotel
                            staff is not included and is at the discretion of
                            the traveler.
                          </li>
                          <li>
                            Optional Activities: Costs associated with optional
                            activities and excursions not mentioned in the
                            itinerary are the responsibility of the traveler.
                          </li>
                          <li>
                            Visa Fees: Any fees related to visa processing or
                            entry permits are not included in the tour package.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="t-plans">
                  <h3>Tour Plans</h3>
                  <ul className="accordion-box tp-accordion clearfix">
                    {/*Block*/}
                    <li
                      className={
                        opener[0]
                          ? "accordion block active-block"
                          : "accordion block"
                      }
                      onClick={() => handleClick(0)}
                    >
                      <div className={opener[0] ? "acc-btn active" : "acc-btn"}>
                        <span className="d-count">Day 1</span> Arrival in Phuket
                        and Patong Beach Exploration
                        <span className="arrow fa fa-angle-down" />
                      </div>
                      <div className="acc-content current">
                        <div className="content">
                          <div className="travilo-text">
                            <p>
                              Upon your arrival at Phuket International Airport,
                              our friendly guide will greet you and transfer you
                              to your luxurious beachfront resort in Patong.
                              After check-in and some relaxation, embark on an
                              exciting exploration of Patong Beach, one of the
                              liveliest beaches in Phuket. Stroll along the
                              vibrant promenade, indulge in beach activities,
                              and admire the beautiful sunset. In the evening,
                              experience Patong's vibrant nightlife with a mix
                              of bars, restaurants, and entertainment venues.
                            </p>
                            <ul>
                              <li>
                                Arrival at Phuket International Airport and
                                transfer to the beachfront resort in Patong.
                              </li>
                              <li>
                                Explore Patong Beach, enjoy beach activities,
                                and witness a stunning sunset.
                              </li>
                              <li>
                                Experience the lively nightlife of Patong with a
                                variety of entertainment options.
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    {/*Block*/}
                    <li
                      className={
                        opener[1]
                          ? "accordion block active-block"
                          : "accordion block"
                      }
                      onClick={() => handleClick(1)}
                    >
                      <div className={opener[1] ? "acc-btn active" : "acc-btn"}>
                        <span className="d-count">Day 2</span> Phi Phi Islands
                        Snorkeling Adventure
                        <span className="arrow fa fa-angle-down" />
                      </div>
                      <div className="acc-content">
                        <div className="content">
                          <div className="travilo-text">
                            <p>
                              Today, set sail for a thrilling adventure to the
                              famous Phi Phi Islands. Dive into the
                              crystal-clear waters to snorkel or scuba dive,
                              exploring the exotic marine life and vibrant coral
                              reefs. Enjoy a delicious beachside lunch on Phi
                              Phi Don, the main island, and relax on the
                              pristine beaches. Marvel at the breathtaking
                              landscapes and limestone cliffs that make Phi Phi
                              Islands a tropical paradise. After a day of
                              exploration, return to the resort in Patong and
                              unwind.
                            </p>
                            <ul>
                              <li>
                                Full-day excursion to the Phi Phi Islands for
                                snorkeling and beach exploration.
                              </li>
                              <li>
                                Witness diverse marine life and stunning coral
                                reefs during snorkeling or scuba diving.
                              </li>
                              <li>
                                Enjoy a delectable beachside lunch on Phi Phi
                                Don Island.
                              </li>
                              <li>
                                Relax and soak in the natural beauty of the Phi
                                Phi Islands before returning to Patong.
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    {/*Block*/}
                    <li
                      className={
                        opener[2]
                          ? "accordion block active-block"
                          : "accordion block"
                      }
                      onClick={() => handleClick(2)}
                    >
                      <div className={opener[2] ? "acc-btn active" : "acc-btn"}>
                        <span className="d-count">Day 3</span> Phang Nga Bay
                        Cruise and Cultural Immersion
                        <span className="arrow fa fa-angle-down" />
                      </div>
                      <div className="acc-content">
                        <div className="content">
                          <div className="travilo-text">
                            <p>
                              Embark on a memorable cruise to Phang Nga Bay,
                              renowned for its picturesque landscapes and unique
                              limestone formations. Explore James Bond Island,
                              featured in the movie "The Man with the Golden
                              Gun," and be captivated by its stunning beauty.
                              Visit Koh Panyee, a floating fishing village, and
                              immerse yourself in the local culture. After the
                              cruise, visit the iconic Big Buddha and Wat
                              Chalong to experience the spiritual side of
                              Phuket. Delight your taste buds with authentic
                              Thai cuisine at a local restaurant before
                              returning to the resort.
                            </p>
                            <ul>
                              <li>
                                Cruise to Phang Nga Bay to admire its stunning
                                limestone formations and James Bond Island.
                              </li>
                              <li>
                                Visit Koh Panyee, a floating fishing village,
                                and experience the local culture.
                              </li>
                              <li>
                                Explore the spiritual side of Phuket with visits
                                to the Big Buddha and Wat Chalong.
                              </li>
                              <li>
                                Relish in authentic Thai cuisine at a local
                                restaurant for a delightful culinary experience.
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    {/*Block*/}
                    <li
                      className={
                        opener[3]
                          ? "accordion block active-block"
                          : "accordion block"
                      }
                      onClick={() => handleClick(3)}
                    >
                      <div className={opener[3] ? "acc-btn active" : "acc-btn"}>
                        <span className="d-count">Day 4</span> Leisure Day and
                        Departure
                        <span className="arrow fa fa-angle-down" />
                      </div>
                      <div className="acc-content">
                        <div className="content">
                          <div className="travilo-text">
                            <p>
                              Enjoy a leisurely morning with breakfast at the
                              resort. The day is at your leisure, giving you the
                              freedom to relax on the beach, explore nearby
                              attractions, or indulge in optional activities of
                              your choice. In the afternoon, check out from the
                              resort and transfer to Phuket International
                              Airport for your departure, bringing an end to
                              this unforgettable island paradise experience.
                            </p>
                            <ul>
                              <li>
                                Leisure morning with breakfast at the resort,
                                allowing for relaxation or optional activities.
                              </li>
                              <li>
                                Check-out from the resort and transfer to Phuket
                                International Airport for departure.
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="location">
                  <h3>Map</h3>
                  <div className="map-box">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63230.7149410174!2d98.29248065!3d7.903459599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30503a96a80e1833%3A0x40223bc2c382480!2sPa%20Tong%2C%20Kathu%20District%2C%20Phuket%2C%20Thailand!5e0!3m2!1sen!2som!4v1690982895480!5m2!1sen!2som"
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                    <div className="map-icon">
                      <img src="assets/images/icons/map-marker-2.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="t-faqs">
                  <h3>Frequently Asked Questions</h3>
                  <ul className="accordion-box faqs-accordion clearfix">
                    {/*Block*/}
                    <li
                      className={
                        opener[4]
                          ? "accordion block active-block"
                          : "accordion block"
                      }
                      onClick={() => handleClick(4)}
                    >
                      <div className={opener[4] ? "acc-btn active" : "acc-btn"}>
                        What is the best time to visit Phuket for this tour?
                        <span className="arrow fa fa-plus" />
                      </div>
                      <div className="acc-content current">
                        <div className="content">
                          <div className="travilo-text">
                            <p>
                              The best time to visit Phuket for this tour is
                              during the dry season, which typically lasts from
                              November to April. During these months, the
                              weather is generally sunny with lower chances of
                              rain, providing ideal conditions for
                              island-hopping and outdoor activities.
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                    {/*Block*/}
                    <li
                      className={
                        opener[5]
                          ? "accordion block active-block"
                          : "accordion block"
                      }
                      onClick={() => handleClick(5)}
                    >
                      <div className={opener[5] ? "acc-btn active" : "acc-btn"}>
                        Are the snorkeling and scuba diving activities suitable
                        for beginners?
                        <span className="arrow fa fa-plus" />
                      </div>
                      <div className="acc-content">
                        <div className="content">
                          <div className="travilo-text">
                            <p>
                              Yes, both snorkeling and scuba diving activities
                              are suitable for beginners. Our experienced guides
                              will provide comprehensive instructions and ensure
                              your safety throughout the excursion. Life jackets
                              and necessary equipment will be provided, making
                              the experience enjoyable for participants of all
                              skill levels.
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                    {/*Block*/}
                    <li
                      className={
                        opener[6]
                          ? "accordion block active-block"
                          : "accordion block"
                      }
                      onClick={() => handleClick(6)}
                    >
                      <div className={opener[6] ? "acc-btn active" : "acc-btn"}>
                        What should I wear when visiting temples in Phuket?
                        <span className="arrow fa fa-plus" />
                      </div>
                      <div className="acc-content">
                        <div className="content">
                          <div className="travilo-text">
                            <p>
                              When visiting temples, it is essential to dress
                              modestly and respectfully. Both men and women
                              should cover their shoulders and knees.
                              Loose-fitting, comfortable clothing is
                              recommended, and it's a good idea to carry a
                              sarong or scarf to cover up when needed. Please
                              remove your shoes before entering temple buildings
                              as a sign of respect.
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                    {/*Block*/}
                    <li
                      className={
                        opener[7]
                          ? "accordion block active-block"
                          : "accordion block"
                      }
                      onClick={() => handleClick(7)}
                    >
                      <div className={opener[7] ? "acc-btn active" : "acc-btn"}>
                        Can I extend my stay in Phuket after the tour ends?
                        <span className="arrow fa fa-plus" />
                      </div>
                      <div className="acc-content">
                        <div className="content">
                          <div className="travilo-text">
                            <p>
                              Absolutely! If you wish to extend your stay in
                              Phuket after the tour concludes, we can assist you
                              with making the necessary arrangements. Whether
                              you want to continue relaxing on the beautiful
                              beaches or explore more of Phuket's attractions,
                              our team will be happy to customize your itinerary
                              according to your preferences.
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                    {/*Block*/}
                    <li
                      className={
                        opener[8]
                          ? "accordion block active-block"
                          : "accordion block"
                      }
                      onClick={() => handleClick(8)}
                    >
                      <div className={opener[8] ? "acc-btn active" : "acc-btn"}>
                        Are meals included in the tour package?
                        <span className="arrow fa fa-plus" />
                      </div>
                      <div className="acc-content">
                        <div className="content">
                          <div className="travilo-text">
                            <p>
                              Yes, some meals are included in the tour package.
                              Daily breakfast at the resort and a beachside
                              lunch during the Phi Phi Islands excursion are
                              provided. However, lunches and dinners on other
                              days, as well as any additional snacks or
                              beverages, are not included. This allows you to
                              have the flexibility to explore local restaurants
                              and taste various Thai delicacies during your free
                              time.
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="t-gallery">
                  <h3>Media Gallery</h3>
                  <div className="images">
                    <ul className="clearfix">
                      <li>
                        <div className="image">
                          <a
                            href="assets/images/resources/destinations/hotels/hotel-room-1.jpg"
                            className="lightbox-image"
                            data-fancybox="SbGallery"
                          >
                            <img
                              src="assets/images/resources/thumbnails/hotel-room-1-thumb.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="image">
                          <a
                            href="assets/images/resources/destinations/hotels/hotel-room-2.jpg"
                            className="lightbox-image"
                            data-fancybox="SbGallery"
                          >
                            <img
                              src="assets/images/resources/thumbnails/hotel-room-2-thumb.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="image">
                          <a
                            href="assets/images/resources/destinations/hotels/hotel-room-3.jpg"
                            className="lightbox-image"
                            data-fancybox="SbGallery"
                          >
                            <img
                              src="assets/images/resources/thumbnails/hotel-room-3-thumb.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="image">
                          <a
                            href="assets/images/resources/destinations/hotels/hotel-room-4.jpg"
                            className="lightbox-image"
                            data-fancybox="SbGallery"
                          >
                            <img
                              src="assets/images/resources/thumbnails/hotel-room-4-thumb.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="image">
                          <a
                            href="assets/images/resources/destinations/hotels/hotel-room-5.jpg"
                            className="lightbox-image"
                            data-fancybox="SbGallery"
                          >
                            <img
                              src="assets/images/resources/thumbnails/hotel-room-5-thumb.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="image">
                          <a
                            href="assets/images/resources/destinations/hotels/hotel-room-6.jpg"
                            className="lightbox-image"
                            data-fancybox="SbGallery"
                          >
                            <img
                              src="assets/images/resources/thumbnails/hotel-room-6-thumb.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="image">
                          <a
                            href="assets/images/resources/destinations/hotels/hotel-room-7.jpg"
                            className="lightbox-image"
                            data-fancybox="SbGallery"
                          >
                            <img
                              src="assets/images/resources/thumbnails/hotel-room-7-thumb.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="image">
                          <a
                            href="assets/images/resources/destinations/hotels/hotel-room-8.jpg"
                            className="lightbox-image"
                            data-fancybox="SbGallery"
                          >
                            <img
                              src="assets/images/resources/thumbnails/hotel-room-8-thumb.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="t-reviews">
                  <h3>Reviews</h3>
                  <div className="rev-info">
                    <div className="inner clearfix">
                      <div className="row clearfix">
                        <div className="rev-left col-lg-4 col-md-4 col-sm-12">
                          <div className="count">4.9</div>
                          <div className="level">
                            <i className="far fa-face-smile" /> Excellent
                          </div>
                          <div className="b-on">Based on 2100 Reviews</div>
                        </div>
                        <div className="rev-right col-lg-8 col-md-8 col-sm-12">
                          <div className="cat">
                            <div className="c-title">Service</div>
                            <div className="p-bar">
                              <div
                                className="p-fill p-fill-bar"
                                data-percent="82%"
                              />
                            </div>
                            <div className="c-per">
                              <span className="count-box">
                                <span
                                  className="count-text"
                                  data-stop={90}
                                  data-speed={2000}
                                >
                                  0
                                </span>
                                %
                              </span>
                            </div>
                          </div>
                          <div className="cat">
                            <div className="c-title">Accomodation</div>
                            <div className="p-bar">
                              <div
                                className="p-fill p-fill-bar"
                                data-percent="80%"
                              />
                            </div>
                            <div className="c-per">
                              <span className="count-box">
                                <span
                                  className="count-text"
                                  data-stop={80}
                                  data-speed={2000}
                                >
                                  0
                                </span>
                                %
                              </span>
                            </div>
                          </div>
                          <div className="cat">
                            <div className="c-title">Location</div>
                            <div className="p-bar">
                              <div
                                className="p-fill p-fill-bar"
                                data-percent="98%"
                              />
                            </div>
                            <div className="c-per">
                              <span className="count-box">
                                <span
                                  className="count-text"
                                  data-stop={98}
                                  data-speed={2000}
                                >
                                  0
                                </span>
                                %
                              </span>
                            </div>
                          </div>
                          <div className="cat">
                            <div className="c-title">Price</div>
                            <div className="p-bar">
                              <div
                                className="p-fill p-fill-bar"
                                data-percent="70%"
                              />
                            </div>
                            <div className="c-per">
                              <span className="count-box">
                                <span
                                  className="count-text"
                                  data-stop={70}
                                  data-speed={2000}
                                >
                                  0
                                </span>
                                %
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="reviews">
                    <div className="rev-box">
                      <div className="inner">
                        <div className="rev-header clearfix">
                          <h4>Enchanting Island Escape</h4>
                          <div className="rating">
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                          </div>
                        </div>
                        <p className="travilo-text">
                          I cannot begin to express how incredible my experience
                          was on the Island Paradise tour in Phuket! From the
                          moment I arrived, I was greeted with warm smiles and
                          impeccable hospitality. The tour was perfectly
                          balanced, offering a mix of adventure and relaxation.
                          Snorkeling at Phi Phi Islands was a dream come true -
                          the vibrant underwater world left me in awe.
                        </p>
                        <div className="lower clearfix">
                          <div className="author-info">
                            <div className="image">
                              <img
                                src="assets/images/resources/thumbnails/reviewer-1.jpg"
                                alt="Review 1"
                              />
                            </div>
                            <div className="author-name">David Hustler</div>
                            <div className="designation">Photographer</div>
                          </div>
                          <div className="ld-link">
                            <span className="txt">
                              Was this review helpful?
                            </span>
                            <a href="#" className="l-btn active">
                              <i className="fa-solid fa-thumbs-up" />
                              <span className="l-count">12</span>
                            </a>
                            <a href="#" className="d-btn">
                              <i className="fa-solid fa-thumbs-up" />
                              <span className="d-count">8</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="rev-box">
                      <div className="inner">
                        <div className="rev-header clearfix">
                          <h4>Unforgettable Tropical Getaway</h4>
                          <div className="rating">
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                          </div>
                        </div>
                        <p className="travilo-text">
                          My trip to Phuket for the Island Paradise tour was an
                          absolute delight! The tour provided everything I could
                          have hoped for and more. The beaches were pristine,
                          and the crystal-clear waters were perfect for swimming
                          and snorkeling. Exploring the limestone formations at
                          Phang Nga Bay was truly breathtaking, and the visit to
                          the Big Buddha and Wat Chalong gave me a profound
                          sense of spirituality.
                        </p>
                        <div className="lower clearfix">
                          <div className="author-info">
                            <div className="image">
                              <img
                                src="assets/images/resources/thumbnails/reviewer-2.jpg"
                                alt="Review 2"
                              />
                            </div>
                            <div className="author-name">Peter Hazard</div>
                            <div className="designation">Self Employed</div>
                          </div>
                          <div className="ld-link">
                            <span className="txt">
                              Was this review helpful?
                            </span>
                            <a href="#" className="l-btn">
                              <i className="fa-solid fa-thumbs-up" />
                              <span className="l-count">12</span>
                            </a>
                            <a href="#" className="d-btn active">
                              <i className="fa-solid fa-thumbs-up" />
                              <span className="d-count">6</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="rev-box">
                      <div className="inner">
                        <div className="rev-header clearfix">
                          <h4>Tropical Adventure of a Lifetime</h4>
                          <div className="rating">
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                          </div>
                        </div>
                        <p className="travilo-text">
                          What an amazing journey I had on the Island Paradise
                          tour in Phuket! I've traveled to many places, but this
                          tour stands out as one of my favorites. The tour
                          itinerary was thoughtfully crafted, offering a perfect
                          blend of relaxation and exploration. Snorkeling at the
                          Phi Phi Islands felt like swimming in an underwater
                          paradise, and the cruise through Phang Nga Bay was
                          like being in a real-life movie set.
                        </p>
                        <div className="lower clearfix">
                          <div className="author-info">
                            <div className="image">
                              <img
                                src="assets/images/resources/thumbnails/reviewer-3.jpg"
                                alt="Review 3"
                              />
                            </div>
                            <div className="author-name">Pablo Benjamin</div>
                            <div className="designation">Sr. Engineer</div>
                          </div>
                          <div className="ld-link">
                            <span className="txt">
                              Was this review helpful?
                            </span>
                            <a href="#" className="l-btn active">
                              <i className="fa-solid fa-thumbs-up" />
                              <span className="l-count">12</span>
                            </a>
                            <a href="#" className="d-btn">
                              <i className="fa-solid fa-thumbs-up" />
                              <span className="d-count">6</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="see-all">
                      <a href="#" className="theme-btn">
                        View All <i className="fa-solid fa-external-link" />
                      </a>
                    </div>
                  </div>
                  <h3>Add A Review</h3>
                  <div className="add-review">
                    <div className="form-box site-form">
                      <form method="post" action="index.html">
                        <div className="row clearfix">
                          <div className="form-group col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div className="s-rev-option">
                              <span className="ser-ttl">Service</span>
                              <a href="#" className="rat">
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                              </a>
                            </div>
                          </div>
                          <div className="form-group col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div className="s-rev-option">
                              <span className="ser-ttl">Location</span>
                              <a href="#" className="rat">
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                              </a>
                            </div>
                          </div>
                          <div className="form-group col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div className="s-rev-option">
                              <span className="ser-ttl">Accomodation</span>
                              <a href="#" className="rat">
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                              </a>
                            </div>
                          </div>
                          <div className="form-group col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div className="s-rev-option">
                              <span className="ser-ttl">Price</span>
                              <a href="#" className="rat">
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                              </a>
                            </div>
                          </div>
                          <div className="form-group col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div className="field-inner">
                              <input
                                type="text"
                                name="field-name"
                                defaultValue=""
                                placeholder="Your name"
                                required=""
                              />
                            </div>
                          </div>
                          <div className="form-group col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div className="field-inner">
                              <input
                                type="email"
                                name="field-name"
                                defaultValue=""
                                placeholder="Your email"
                                required=""
                              />
                            </div>
                          </div>
                          <div className="form-group col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <div className="field-inner">
                              <input
                                type="text"
                                name="field-name"
                                defaultValue=""
                                placeholder="Review title"
                                required=""
                              />
                            </div>
                          </div>
                          <div className="form-group col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <div className="field-inner">
                              <textarea
                                name="field-name"
                                placeholder="Start writing your review here"
                                required=""
                                defaultValue={""}
                              />
                            </div>
                          </div>
                          <div className="form-group col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <button
                              type="submit"
                              className="theme-btn btn-style-one"
                            >
                              <span>Submit Review</span>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*Sidebar Side*/}
            <div className="sidebar-side col-xl-4 col-lg-8 col-md-12 col-sm-12">
              <div className="sidebar-inner">
                {/*Widget*/}
                <div className="dsp-widget t-book-widget alt-margin">
                  <div className="inner-box">
                    <div className="t-book-header">
                      <span className="st-txt">
                        Start <br />
                        From
                      </span>
                      <span className="amount">$120</span>
                      <span className="qty">/ Per Person</span>
                    </div>
                    <div className="lower-box">
                      <div className="form-box site-form">
                        <form method="post" action="tour-single.html">
                          <div className="fields">
                            <div className="form-group">
                              <div className="field-label">Date</div>
                              <div className="field-inner">
                                <input
                                  className="datepicker"
                                  type="text"
                                  name="field-name"
                                  defaultValue=""
                                  placeholder="Select a date"
                                  required=""
                                />
                                <i className="alt-icon fa fa-calendar-alt" />
                              </div>
                            </div>
                            <div className="form-group">
                              <div className="field-label">Time</div>
                              <div className="field-inner">
                                <select
                                  name="field-name"
                                  className="custom-select"
                                >
                                  <option>Select a time</option>
                                  <option>0000 Hrs</option>
                                  <option>0200 Hrs</option>
                                  <option>0400 Hrs</option>
                                  <option>0600 Hrs</option>
                                  <option>0800 Hrs</option>
                                  <option>1000 Hrs</option>
                                  <option>1200 Hrs</option>
                                  <option>1400 Hrs</option>
                                  <option>1600 Hrs</option>
                                  <option>1800 Hrs</option>
                                  <option>2000 Hrs</option>
                                  <option>2200 Hrs</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <h6>Tickets</h6>
                          <div className="tickets">
                            <div className="ticket-block clearfix">
                              <div className="tick-ttl">Adults (18+ years)</div>
                              <div className="tick-sel">
                                <div className="quantity-box">
                                  <div className="item-quantity">
                                    <input
                                      className="qty-spinner"
                                      type="text"
                                      defaultValue={1}
                                      name="quantity"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="ticket-block clearfix">
                              <div className="tick-ttl">Kids (12+ years)</div>
                              <div className="tick-sel">
                                <div className="quantity-box">
                                  <div className="item-quantity">
                                    <input
                                      className="qty-spinner"
                                      type="text"
                                      defaultValue={1}
                                      name="quantity"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="ticket-block clearfix">
                              <div className="tick-ttl">
                                Children (3+ years)
                              </div>
                              <div className="tick-sel">
                                <div className="quantity-box">
                                  <div className="item-quantity">
                                    <input
                                      className="qty-spinner"
                                      type="text"
                                      defaultValue={1}
                                      name="quantity"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <h6>Additional Service</h6>
                          <div className="add-ser">
                            <ul>
                              <li>
                                <div className="cb-block">
                                  <input type="checkbox" id="cb-1" />
                                  <label className="clearfix" htmlFor="cb-1">
                                    <span className="txt">
                                      Additional Guide
                                    </span>
                                    <span className="amount">$50</span>
                                  </label>
                                </div>
                              </li>
                              <li>
                                <div className="cb-block">
                                  <input type="checkbox" id="cb-2" />
                                  <label className="clearfix" htmlFor="cb-2">
                                    <span className="txt">Internet</span>
                                    <span className="amount">$30</span>
                                  </label>
                                </div>
                              </li>
                              <li>
                                <div className="cb-block">
                                  <input type="checkbox" id="cb-3" />
                                  <label className="clearfix" htmlFor="cb-3">
                                    <span className="txt">Photography</span>
                                    <span className="amount">$90</span>
                                  </label>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="total clearfix">
                            <div className="t-ttl">Total</div>
                            <div className="ttl-amt">$450</div>
                          </div>
                          <div className="proceed-link">
                            <button
                              type="button"
                              className="theme-btn btn-style-two"
                            >
                              <span>Proceed to Book</span>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                {/*Widget*/}
                <div className="dsp-widget get-help-widget">
                  <div className="inner">
                    <h6>Get Help</h6>
                    <h3>Need Help to Book?</h3>
                    <p className="travilo-text">
                      Our dedicated team of travel experts is here to assist you
                      every step of the way, ensuring a seamless and
                      unforgettable journey.
                    </p>
                    <div className="call-to">
                      <a href="tel:+9689999000">
                        <i className="icon fa-solid fa-phone" /> Call Us
                        <span className="nmbr">+968 9999 9000</span>
                      </a>
                    </div>
                  </div>
                </div>
                {/*Widget*/}
                <div className="dsp-widget similar-widget">
                  <div className="inner">
                    <h3>You might also like</h3>
                    {/*Logo*/}
                    <div className="posts">
                      <div className="post">
                        <div className="image">
                          <a href="#">
                            <img
                              src="assets/images/resources/thumbnails/uk-thumb.jpg"
                              alt="London Bridge"
                            />
                          </a>
                        </div>
                        <h6>
                          <a href="#">
                            Iconic Landmark Connecting History and Modernity
                          </a>
                        </h6>
                        <div className="price">
                          Starts from <span className="amount">$399</span>
                        </div>
                      </div>
                      <div className="post">
                        <div className="image">
                          <a href="#">
                            <img
                              src="assets/images/resources/thumbnails/maldives-thumb.jpg"
                              alt="Maldives"
                            />
                          </a>
                        </div>
                        <h6>
                          <a href="#">
                            Unveiling the Serenity of Maldivian Islands
                          </a>
                        </h6>
                        <div className="price">
                          Starts from <span className="amount">$595</span>
                        </div>
                      </div>
                      <div className="post">
                        <div className="image">
                          <a href="#">
                            <img
                              src="assets/images/resources/thumbnails/finland-thumb.jpg"
                              alt="Helsinki"
                            />
                          </a>
                        </div>
                        <h6>
                          <a href="#">
                            Vibrant Helsinki, A Fusion of Culture and Cuisine
                          </a>
                        </h6>
                        <div className="price">
                          Starts from <span className="amount">$565</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourDetails;
