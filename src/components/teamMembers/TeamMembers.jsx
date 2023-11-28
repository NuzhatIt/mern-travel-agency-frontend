import React, { useEffect } from "react";
import {
  default as bgGradient24,
  default as bgGradient25,
} from "../../assets/images/background/bg-gradient-24.png";
import purple4 from "../../assets/images/elements/purple-4.png";
import team1 from "../../assets/images/resources/team/team-1.jpg";
import team2 from "../../assets/images/resources/team/team-2.jpg";
import team3 from "../../assets/images/resources/team/team-3.jpg";
import team4 from "../../assets/images/resources/team/team-4.jpg";
import useWOW from "../../custom-hooks/useWOW";
const memberInfos = [
  {
    name: "Paul Harrison",
    designation1: "Founder",
    designation2: "CEO",
    image: team4,
  },
  {
    name: "Tyron Johnson",
    designation1: "Founder",
    designation2: "CTO",
    image: team1,
  },
  {
    name: "Richard Parker",
    designation1: "Finance Manager",
    designation2: "",
    image: team3,
  },
  {
    name: "Tom Anderson",
    designation1: "Marketing Executive",
    designation2: "",
    image: team2,
  },
];

const TeamMembers = () => {
    const { initWOW } = useWOW();
  useEffect(() => {
    initWOW();
  }, []);
  // console.log(memberInfos);
  return (
    <div className="team-section">
      <div className="auto-container">
        <div
          className="title-box centered wow fadeInUp"
          data-wow-delay="0ms"
          data-wow-duration="1500ms"
        >
          <div className="subtitle">Team Members</div>
          <h2>
            <span>Our Amazing Team Players</span>
          </h2>
        </div>
        <div
          className="team-box wow fadeInUp"
          data-wow-delay="0ms"
          data-wow-duration="1500ms"
        >
          <div className="bg-grad-left">
            <img src={bgGradient24} alt="" title="" />
          </div>
          <div className="bg-grad-right">
            <img src={bgGradient25} alt="" title="" />
          </div>
          <div className="d-elem-1">
            <img src={purple4} alt="" />
          </div>
          <div className="row clearfix justify-content-center">
            {/*Block*/}
            {memberInfos &&
              memberInfos.map((memberInfo) => 
              <div className="team-block col-xl-3 col-lg-4 col-md-6 col-sm-12">
                  <div className="inner-box clearfix">
                    <div className="image-box">
                      <div className="image">
                        <a href="#">
                          <img src={memberInfo.image} alt="Team 4" />
                        </a>
                      </div>
                      <ul className="social-links clearfix">
                        <li>
                          <a href="#" className="facebook">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#" className="twitter">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#" className="linkedin">
                            <i className="fab fa-linkedin-in" />
                          </a>
                        </li>
                        <li>
                          <a href="#" className="youtube">
                            <i className="fab fa-youtube" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <h4>
                      <a href="#">{memberInfo.name}</a>
                    </h4>
                     <div className="designation">
                      {memberInfo.designation1} {memberInfo.designation2?  `& ${memberInfo.designation2}`:""}
                    </div> 
                  </div>
                </div>
              )}

            {/*Block*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
