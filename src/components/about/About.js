import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import { BiPlayCircle } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import AddIcon from "@material-ui/icons/Add";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import p1 from "../../images/p1.png";
import team1 from "../../images/team1.jpeg";
import team2 from "../../images/team2.jpeg";
import team3 from "../../images/team3.jpg";
import team4 from "../../images/team4.jpeg";
import team5 from "../../images/team5.jpeg";
// import team6 from "../../images/team6.jpeg";
// import team7 from "../../images/team7.jpeg";
import team8 from "../../images/team8.jpeg";
import user1 from "../../images/user1.svg";


import vision from "../../images/vision.png";
import hand from "../../images/hand.svg";
import hand2 from "../../images/hand2.svg";
import hand3 from "../../images/hand3.svg";
import hand4 from "../../images/hand4.svg";
import gift from "../../images/gift.svg";
import heart from "../../images/heart.svg";
import "./about.css";
import Accordion from "./Accordion";

const About = () => {
  const [active, setActive] = useState("title1");
  return (
    <>
      <Helmet>
        <title>About | Creniux</title>
        <meta
          name="description"
          content="We are a full fledged software services company
                        providing best innovative solutions to all your software
                        requirements We are here to delight you with our
                        services right from software consulting to software
                        deployment and then support and maintenance"
        />
      </Helmet>
      <section className="">
        <div className="container-fluid about_top_section">
          <div className="row">
            <div className="col-md-10 col-lg-10 col-sm-10 col-12 mx-auto about_top_heading">
              <h1>About</h1>
              {/* <div className="navlink_homeandcontact">
                <NavLink className="home_and_about" to="/">
                  <p>
                    Home <span className="mx-2">&gt;</span>
                  </p>
                </NavLink>
                <NavLink className="home_and_about" to="/contact">
                  <p> About</p>
                </NavLink>
              </div> */}
              <div className="digial_future">
                <h4>OUR MISSION</h4>
                <h3>Shaping the digital future</h3>
                <p>Scroll for more</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* second section start here */}
      <section className="about_story_sedction">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-10 col-lg-10 col-sm-10 col-12 mx-auto">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-12 stort_heading">
                  <h2>What's the Creniux Story?</h2>

                  <p>
                    Creniux is a global software development company offering
                    progressive end-to-end software development, IOT solutions,
                    Mobile application development, cloud services and
                    infrastructure, Business intelligence and analytics, ERP
                    solutions, Enterprise and digital transformation by
                    combining our business domain experience, technical
                    expertise, profound knowledge of the latest industry trends
                    & quality driven delivery model.
                  </p>
                  <NavLink to="/service" className="btn_explore_more">
                    Read more <BiPlayCircle />
                  </NavLink>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="story_video">
                  
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/doBFPSM9_7I" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* third section start here */}
      <section className="about_vision_sedction">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-10 col-lg-10 col-sm-10 col-12 mx-auto">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-12 vision_heading">
                  <h2>Our Vision</h2>

                  <p>
                    To be No.1 Company in the digital world where creniux
                    becomes a synonym for quality, reliability and trusted
                    digital products and software services.
                  </p>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <figure>
                    <img src={vision} className="header_top_img1" alt="p1img" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* fourth valure at section start here */}
      <section className="values_at_section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-10 col-lg-10 col-sm-10 col-12 mx-auto value_about_heading">
              <h2>Values at Creniux</h2>

              <p>
                We strive to add value & enhance well being of our partners,
                communities and everyone with whom we are connected.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3rd effect----------------- */}
      <section className="my_new_values">
        <div className="container-fluid new_values_container">
          <div className="row">
            <div className="col-md-10 col-lg-10 col-sm-10 col-12 mx-auto">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-12">
                  <Accordion
                    title="Respect"
                    imgsrc={hand4}
                    contents=" Creniux offers a suite of 360 degree software
                          solutions by a team of experienced ideators to help
                          your business ace in the digital era"
                    active={active}
                    setActive={setActive}
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <Accordion
                    title="Transparency"
                    imgsrc={hand}
                    contents=" we pride ourselves on providing complete visibility
                          into the successes, and sometimes failures, of our
                          business as we grow and scale."
                    active={active}
                    setActive={setActive}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-12">
                  <Accordion
                    title="Collaburation"
                    imgsrc={hand3}
                    contents=" Alone we can't, but together we can become stronger.
                          We delivere more succes through shared goals and
                          mutual support."
                    active={active}
                    setActive={setActive}
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <Accordion
                    title="Commitments"
                    imgsrc={hand2}
                    contents=" We are committed to business, processes, resources and
                          to it's people."
                    active={active}
                    setActive={setActive}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* what we will get */}
      <section className="we_get_section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-10 col-lg-10 col-sm-10 col-12 mx-auto get_heading">
              <h2>What You'll Get</h2>

              <p>
                The business of delivering digital services and products is
                undergoing rapid change every day as we are capturing markets
                and customers across the country. So as we grow along with the
                times, we are always looking for great people to join us on this
                exciting journey.
              </p>
              <div className="row">
                <div className="col-md-5 col-lg-5 col-5 mx-auto benefit_heading">
                  <h3>
                    <img className="gift_and_heart_img" src={gift} alt="" />{" "}
                    Benefits
                  </h3>
                  <p>
                    Mobile allowance <br />
                    Flexi Benefit Component Policy
                  </p>
                </div>
                <div className="col-md-2 col-lg-2 col-2 mx-auto"></div>
                <div className="col-md-5 col-lg-5 col-5 mx-auto benefit_heading">
                  <h3>
                    <img className="gift_and_heart_img" src={heart} alt="" />{" "}
                    Perks
                  </h3>
                  <p>
                    Working with smart, young, mission-driven people <br />
                    Approachable Leadership
                    <br />
                    Flexible Schedule
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* our team people section */}
      <section className="our_people_section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-10 col-lg-10 col-sm-10 col-12 mx-auto our_people_heading">
              <h2>Meet Our People</h2>

              <p>
                Here are some of the key Zomans who lead our vision towards
                better food for more people.
              </p>
              <div className="row my-3">
                <div className="col-lg-3 col-md-3 col-6 mx-auto">
                  <div className="people_box1">
                    <img className="circle_team_img" src={team1} alt="" />
                    <h3>Zonain Haris</h3>
                    <h4>CEO</h4>
                  </div>
                  {/* <span className="twitter_icons"><FaTwitter className="twitter_icons" /> <FaLinkedinIn  className="twitter_icons"/></span> */}
                </div>
                <div className="col-lg-3 col-md-3 col-6 mx-auto">
                  <div className="people_box1">
                    <img className="circle_team_img" src={team2} alt="" />
                    <h3>Tanveer</h3>
                    <h4> CTO</h4>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-6 mx-auto">
                  <div className="people_box1">
                    <img className="circle_team_img" src={team3} alt="" />
                    <h3>Mahesh Jain</h3>
                    <h4> Operations Manager</h4>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-6 mx-auto">
                  <div className="people_box1">
                    <img className="circle_team_img" src={team4} alt="" />
                    <h3>Payal Chauhan</h3>
                    <h4> Graphic Designer</h4>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-6 mx-auto">
                  <div className="people_box1">
                    <img className="circle_team_img" src={team5} alt="" />
                    <h3>Anil Kumawat</h3>
                    <h4> Developer</h4>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-6 mx-auto ">
                  <div className="people_box1">
                  <img className="circle_team_img2" src={user1} alt="" />
                    <h3>Javed</h3>
                    <h4> Developer</h4>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-6 mx-auto">
                  <div className="people_box1">
                    <img className="circle_team_img2" src={user1} alt="" />
                    <h3>Krishna</h3>
                    <h4> Developer</h4>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-6 mx-auto">
                  <div className="people_box1">
                    <img className="circle_team_img" src={team8} alt="" />
                    <h3>Meenal Salvi</h3>
                    <h4>UI/UX Designer</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
