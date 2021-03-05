import React, { Component } from "react";
import { Helmet } from 'react-helmet';
import axios from "axios";
import "./contact.css";
import { NavLink } from "react-router-dom";
import { IoIosSend } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaUserAlt } from "react-icons/fa";

import Man from "../../images/Man.svg";
import user from "../../images/user.svg";
import email from "../../images/email.svg";
class Contact extends Component {
  constructor() {
    super();
    this.state = {
      fullname: "",
      email: "",
      message: "",
    };
  }
  changefullname = (event) => {
    this.setState({
      fullname: event.target.value,
    });
  };

  changeemail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  changemessage = (event) => {
    this.setState({
      message: event.target.value,
    });
  };
  sendEmail = (event) => {
    event.preventDefault();

    // emailjs.sendForm('service_e3cp86t', 'template_z9zsxjk', event.target, 'user_lCSsJrCdxRM8TErL4kQDD')
    // .then((result) => {
    //     console.log(result.text);
    // }, (error) => {
    //     console.log(error.text);
    // });
    // event.target.reset();

    const regitstered = {
      fullname: this.state.fullname,
      email: this.state.email,
      message: this.state.message,
    };
    axios
      .post("http://localhost:5000/app/signup", regitstered)
      .then((res) => console.log(res.data));

    this.setState({
      fullname: "",
      email: "",
      message: "",
    });
  };
  render() {
    return (
      <>
         <Helmet>
          <title>Contact Us | Creniux</title>
          <meta name="description" content="We are a full fledged software services company
                        providing best innovative solutions to all your software
                        requirements We are here to delight you with our
                        services right from software consulting to software
                        deployment and then support and maintenance" />
        </Helmet>
        <section>
          <div className="container-fluid contact_top_section">
            <div className="row">
              <div className="col-md-10 col-lg-10 col-sm-10 col-12 mx-auto contact_top_heading">
                <h1>Contact Us</h1>
              
              </div>
            </div>
          </div>
        </section>
        {/* second section start here */}

        <section className="get_touch_section">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-10 col-lg-10 col-sm-10 col-12 mx-auto">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12 get_touch_heading">
                    <h2>Get in Touch</h2>

                    <h3>Let's talk about your idea</h3>
                    <p>
                      We’re here to answer and help with any question you have,
                      we’ll be always happy to lead you into the future of
                      DIGITAL world. whether you have a query about our
                      services, features of our products, pricing, technology
                      consulting or whatever it is please fill up the form and
                      we’ll reach out to you ASAP. Let’s work together to create
                      game-changing experiences that takes your brand to a whole
                      new buzzworthy level. We’re just a call away.
                    </p>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12 mx-auto">
                    <div className="form_sectio">
                      <h4>Fill in your information</h4>
                      <p>we don't share your information</p>
                      <form
                        onSubmit={this.sendEmail}
                        className="form_section_div"
                      >
                        <div class="mb-1">
                          <div class="form-group">
                            <input
                              type="text"
                              className="form-control form-group"
                              id="form_1222"
                              name="fullname"
                              onChange={this.changefullname}
                              value={this.state.fullname}
                              placeholder="Enter Your FullName"
                            />
                          </div>
                        </div>
                        <div class="mb-1">
                          <div className="mb-3 form-group">
                            <input
                              type="email"
                              className="form-control form-group"
                              id="exampleFormControlInput1222"
                              name="email"
                              onChange={this.changeemail}
                              value={this.state.email}
                              placeholder="Your Email Address"
                            />
                          </div>
                        </div>

                        <div className="mb-1">
                          <textarea
                            className="form-control form-group"
                            id="exampleFormControlTextarea123232"
                            rows="3"
                            name="message"
                            onChange={this.changemessage}
                            value={this.state.message}
                            placeholder="Start typing your message here..."
                          ></textarea>
                        </div>
                        <div class="mb-3 form-row">
                          <div class="form-group col-md-6">
                            <input
                              type="submit"
                              className="btn btn_submit2 btn-primary"
                              value="Submit"
                            />
                          </div>
                        </div>
                        {/* input icons here */}
                        <div className="men_icon">
                          <img
                            className="men_img_bottom"
                            src={Man}
                            alt="menimg"
                          />
                        </div>
                        <div className="form_input_man">
                          <FaUserAlt className="user_img_bottom" />
                          {/* <img className="user_img_bottom" src={user} alt="menimg"/> */}
                        </div>
                        <div className="email_icon">
                          <img
                            className="email_img_bottom"
                            src={email}
                            alt="menimg"
                          />
                        </div>
                      </form>
                      <div className="contact_box">
                        <h1>Contact Us</h1>
                        <ul>
                          <li className="my_lists">
                            <IoIosSend className="contact_icons" /> Benson town,
                            Bangalore
                          </li>
                          <li className="my_lists">
                            <HiOutlineMail className="contact_icons" />
                            {/* info@creniux.com */}
                            <a href = "mailto:info@creniux.com">info@creniux.com</a>
                          </li>
                          <li className="my_lists">
                            <FaPhoneAlt className="contact_icons" />
                            +91-6366178925 <br /> +91-7795598779
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* map section here  */}
        <section className="get_touch_section">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-10 col-lg-10 col-sm-10 col-12 mx-auto map_section_heading">
                <h2>Our Office </h2>
                <h3>Find us here</h3>
                <div>
                  <iframe
                    width="600"
                    height="450"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62205.76671891818!2d77.6158920862314!3d12.980778061040395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe3e4281694d06515!2sRpl%20Techno%20It%20Services%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1612898464918!5m2!1sen!2sin"
                    frameborder="0"
                    style={{ border: 0 }}
                    allowfullscreen=""
                    aria-hidden="false"
                    tabindex="0"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
export default Contact;
