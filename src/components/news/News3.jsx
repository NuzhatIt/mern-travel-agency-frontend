import React, { useEffect } from "react";

import bgGradient9 from "../../assets/images/background/bg-gradient-9.png";
import bgGradient10 from "../../assets/images/background/bg-gradient-10.png";
import post1 from "../../assets/images/resources/posts/post-1.jpg";
import post2 from "../../assets/images/resources/posts/post-2.jpg";
import post3 from "../../assets/images/resources/posts/post-3.jpg";
import post4 from "../../assets/images/resources/posts/post-4.jpg";
import useWOW from "../../custom-hooks/useWOW";

const News3 = () => {
  const { initWOW } = useWOW();
  useEffect(() => {
    initWOW();
  }, []);
  return (
    <>
      {/*News Section*/}
      <div className="news-section">
        <div className="auto-container">
          <div className="title-box centered">
            <div className="subtitle">Updates</div>
            <h2>
              <span>From Our Blog</span>
            </h2>
          </div>
          <div className="news-box">
            <div className="bg-grad-left">
              <img src={bgGradient9} alt="" title="" />
            </div>
            <div className="bg-grad-right">
              <img src={bgGradient10} alt="" title="" />
            </div>
            <div className="masonry-container row clearfix">
              {/*Block*/}
              <div
                className="news-item masonry-item col-xl-6 col-lg-12 col-md-12 col-sm-12 wow fadeInUp"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="news-block-one">
                  <div className="inner-box">
                    <div
                      className="image-layer"
                      style={{
                        backgroundImage: `url(${post1})`,
                      }}
                    />
                    <div className="over-box">
                      <ul className="info clearfix">
                        <li>
                          <a href="#">
                            <i className="fa-solid fa-folder" /> Adventure
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa-solid fa-clock" /> June 17, 2022
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa-solid fa-comments" /> 22
                          </a>
                        </li>
                      </ul>
                      <h3>
                        <a href="blog-single.html">
                          Off the Beaten Path Travel Adventures
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              {/* .news-item .masonry-item */}
              {/*Block*/}
              <div
                className="news-item masonry-item col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                <div className="news-block-one m-height">
                  <div className="inner-box">
                    <div
                      className="image-layer"
                      style={{
                        backgroundImage: `url(${post2})`,
                      }}
                    />
                    <div className="over-box">
                      <ul className="info clearfix">
                        <li>
                          <a href="#">
                            <i className="fa-solid fa-folder" /> Culture
                          </a>
                        </li>
                      </ul>
                      <h5>
                        <a href="blog-single.html">
                          How to Experience the World without Breaking the Bank
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              {/* .news-item .masonry-item */}
              {/*Block*/}
              <div
                className="news-item masonry-item col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp"
                data-wow-delay="600ms"
                data-wow-duration="1500ms"
              >
                <div className="news-block-one sm-height">
                  <div className="inner-box">
                    <div
                      className="image-layer"
                      style={{
                        backgroundImage: `url(${post3})`,
                      }}
                    />
                    <div className="over-box">
                      <ul className="info clearfix">
                        <li>
                          <a href="#">
                            <i className="fa-solid fa-folder" /> Adventure
                          </a>
                        </li>
                      </ul>
                      <h5>
                        <a href="blog-single.html">
                          Embracing Self-Discovery on Your Journey
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              {/* .news-item .masonry-item */}
              {/*Block*/}
              <div
                className="news-item masonry-item col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                <div className="news-block-one sm-height">
                  <div className="inner-box">
                    <div
                      className="image-layer"
                      style={{
                        backgroundImage: `url(${post4})`,
                      }}
                    />
                    <div className="over-box">
                      <ul className="info clearfix">
                        <li>
                          <a href="#">
                            <i className="fa-solid fa-folder" /> History
                          </a>
                        </li>
                      </ul>
                      <h5>
                        <a href="blog-single.html">
                          Capturing Memories That Last a Lifetime
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              {/* .news-item .masonry-item */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default News3;
