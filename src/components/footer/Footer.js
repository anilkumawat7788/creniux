import React from "react";
import "./footer.css";
import logo from "../../images/logo.png";
import footer11 from "../../images/footer11.png";
import footer12 from "../../images/footer12.jpg";
import footer13 from "../../images/footer13.png";
import footer14 from "../../images/footer14.png";
import footer15 from "../../images/footer15.png";
import footer16 from "../../images/footer16.PNG";
import { NavLink } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { ImFacebook } from "react-icons/im";
import { AiFillInstagram } from "react-icons/ai";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { FiYoutube } from "react-icons/fi";

const Footer = () => {
  return (
    <>
    <div className="main_container">
      <footer className="footer_background">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-10 col-lg-10 col-sm-10 col-12 mx-auto">
              <div className="row my-5">
                <div className="col-lg-4 col-md-4 col-10 mx-auto footer_left1">
                  <img className="footer_logo" src={logo} alt="" />
                  <p>
                    Creniux being derived from the words creative genius, we
                    stand firm to give the best software solutions, a company
                    with a vision to be<br /> #1 Software company on Mother Earth. We
                    are on a mission to provide our customers with products and
                    solutions which helps them save time, money and feel happy
                    and secured.
                  </p>
                </div>
                <div className="col-lg-2 col-md-2 col-5 footer_left2">
                  <h3>Company</h3>
                  <p>
                    <NavLink className="footer_left2_headings" to="/about">
                      About
                    </NavLink>
                    <br />
                    <NavLink className="footer_left2_headings" to="/service">
                      Services
                    </NavLink>
                    <br />
                    <NavLink className="footer_left2_headings" to="/product">
                      Products
                    </NavLink>
                  </p>
                </div>
                <div className="col-lg-3 col-md-3 col-5 footer_center">
                  <h3>Quick Links</h3>
                  <p>
                    <NavLink className="footer_left2_headings" to="/">
                      Home
                    </NavLink>
                    <br />
                    <NavLink className="footer_left2_headings" to="/career">
                      Career
                    </NavLink>
                    <br />
                    <NavLink className="footer_left2_headings" to="/blog">
                      Blog
                    </NavLink>
                    <br />
                    <NavLink className="footer_left2_headings" to="/contact">
                      Contact Us
                    </NavLink>
                   
                  </p>
                </div>
               
                <div className="col-lg-3 col-md-3 col-6 footer_right2 mx-auto">
                  <h3 className="special_center">Social Presence</h3>
                  <div className="row">
                    <div className="col-md-2 col-lg-2 col-2 media_margin">
                      {/* <NavLink to="/"> */}
                        <span className="circile_media">
                        <a href="https://www.facebook.com/Creniux-103344251811314/"><ImFacebook className="footer_circle_icons" /></a>
                          
                        </span>
                      {/* </NavLink> */}
                    </div>
                    <div className="col-md-2 col-lg-2 col-2 media_margin">
                      {/* <NavLink to="/"> */}
                        <span className="circile_media">
                       <a href="https://www.linkedin.com/company/creniux"><LinkedInIcon className="footer_circle_icons2" /></a>
                         
                        </span>
                      {/* </NavLink> */}
                    </div>
                    <div className="col-md-2 col-lg-2 col-2 media_margin">
                      <NavLink to="/">
                        <span className="circile_media">
                       
                          <FaTwitter className="footer_circle_icons" />
                        </span>
                      </NavLink>
                    </div>
                    <div className="col-md-2 col-lg-2 col-2 media_margin">
                      {/* <NavLink to="/"> */}
                        <span className="circile_media">
                          <a href="https://instagram.com/creniux?igshid=c4j9wl6dag14"><AiFillInstagram className="footer_circle_icons" /></a>
                         
                        </span>
                      {/* </NavLink> */}
                    </div>
                    <div className="col-md-2 col-lg-2 col-2 media_margin">
                      {/* <NavLink to="/"> */}
                        <span className="circile_media">
                        <a href="https://youtu.be/doBFPSM9_7I"><FiYoutube className="footer_circle_icons" /></a>
                          
                        </span>
                      {/* </NavLink> */}
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-lig-10 col-md-10 col-12 mx-auto  footer_img_section">
                  <div className="row">
                    <div className="col-lg-2 col-md-2 col-4 my-1 ">
                      <img className="footer_images" src={footer15} alt="" />
                    </div>
                    <div className="col-lg-2 col-md-2 col-4 my-1 ">
                      <img className="footer_images" src={footer12} alt="" />
                    </div>
                    <div className="col-lg-2 col-md-2 col-4 my-1 ">
                      <img className="footer_images" src={footer11} alt="" />
                    </div>
                    <div className="col-lg-2 col-md-2 col-4 my-1 ">
                      <img className="footer_images" src={footer14} alt="" />
                    </div>
                    <div className="col-lg-2 col-md-2 col-4 my-1 ">
                      <img className="footer_images" src={footer13} alt="" />
                    </div>
                    <div className="col-lg-2 col-md-2 col-4 my-1 ">
                      <img className="footer_images" src={footer16} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="all_policy">
                <h3>©2021 Creniux. All Rights Reserved</h3>
                <h5>Privacy Policy </h5>
                <h5>Terms of Service</h5>
                <h5>Feedback</h5>
              </div>
            </div>
          </div>
        </div>
      </footer>
      </div>
    </>
  );
};
export default Footer;
