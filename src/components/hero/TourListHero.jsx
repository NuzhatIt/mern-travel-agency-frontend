import banner4 from "../../assets/images/resources/featured/banner-4.jpg";

const TourListHero = () => {
  return (
    <div className="inner-banner">
      <div
        className="image-layer"
        style={{
          backgroundImage: `url(${banner4})`,
        }}
      ></div>
      <div className="auto-container">
        <div className="content-box">
          <h1>Tour List</h1>
          <div className="bread-crumb">
            <ul className="clearfix">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li className="current">Tour List</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourListHero;
