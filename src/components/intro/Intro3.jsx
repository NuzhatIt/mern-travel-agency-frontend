import { useEffect } from "react";
import intro1 from "../../assets/images/icons/intro-1.png";
import intro2 from "../../assets/images/icons/intro-2.png";
import intro3 from "../../assets/images/icons/intro-3.png";
import useWOW from "../../custom-hooks/useWOW";

const Intro3 = () => {
  const { initWOW } = useWOW();
  useEffect(() => {
    initWOW();
  }, []);

  return (
    <>
      {/* <!--Intro Section--> */}
      <div className="intro-section">
        <div className="auto-container">
          <div className="row clearfix justify-content-center">
            {/* <!--Block--> */}
            <div className="intro-block col-lg-4 col-md-6 col-sm-12">
              <div
                className="inner-box wow fadeInUp"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="icon">
                  <span>
                    <img src={intro1} alt="" />
                  </span>
                </div>
                <h4>Most Popular Destinations</h4>
                <p className="travilo-text">
                  Discover the World's most sought-after destinations, from
                  breathtaking wonders to vibrant cityscapes. Unveil iconic
                  landmarks, immerse in diverse cultures, and create cherished
                  memories on your journey of a lifetime.
                </p>
              </div>
            </div>
            {/* <!--Block--> */}
            <div className="intro-block col-lg-4 col-md-6 col-sm-12">
              <div
                className="inner-box wow fadeInUp"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                <div className="icon">
                  <span>
                    <img src={intro2} alt="" />
                  </span>
                </div>
                <h4>Budget Friendly Packages</h4>
                <p className="travilo-text">
                  Travel doesn't have to break the bank! Explore our curated
                  selection of budget-friendly packages, where you can
                  experience incredible adventures without compromising on
                  quality. Embrace wanderlust without the financial worry.
                </p>
              </div>
            </div>
            {/* <!--Block--> */}
            <div className="intro-block col-lg-4 col-md-6 col-sm-12">
              <div
                className="inner-box wow fadeInUp"
                data-wow-delay="600ms"
                data-wow-duration="1500ms"
              >
                <div className="icon">
                  <span>
                    <img src={intro3} alt="" />
                  </span>
                </div>
                <h4>Satisfaction Guarranted</h4>
                <p className="travilo-text">
                  Your satisfaction is our top priority. With meticulous
                  planning and personalized service, we ensure your travel
                  experiences exceed expectations. Book with confidence, knowing
                  that your journey will be nothing short of exceptional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro3;
