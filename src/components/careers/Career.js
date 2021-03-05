import React, { Component } from "react";
import { Helmet } from "react-helmet";
import "./career.css";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { IoIosSend } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaUserAlt } from "react-icons/fa";

import Man from "../../images/Man.svg";
import user from "../../images/user.svg";
import email from "../../images/email.svg";

import work1 from "../../images/work1.png";
import work2 from "../../images/work2.png";
import work3 from "../../images/work3.png";
import work4 from "../../images/work4.png";
import work5 from "../../images/work5.png";
import career2 from "../../images/career2.png";
import career3 from "../../images/career3.png";

class Career extends Component {
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
          <title>Careers | Creniux</title>
          <meta name="description" content="We are a full fledged software services company
                        providing best innovative solutions to all your software
                        requirements We are here to delight you with our
                        services right from software consulting to software
                        deployment and then support and maintenance" />
        </Helmet>
        <section>
          <div className="container-fluid career_top_section2">
            <div className="row">
              <div className="col-md-10 col-lg-10 col-sm-10 col-12 mx-auto career_top_heading2">
                <h1>Careers</h1>
               
                <div className="we_hiring">
                  <h4>We are hiring.</h4>
                  <h3>Creniux Wants You! Are You Ready ?</h3>
                  <button
                    className="btn_hover_effect"
                    data-toggle="modal"
                    data-target="#myModal"
                  >
                    Join Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- The Modal --> */}
        <div class="modal fade" id="myModal">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              {/* <!-- Modal Header --> */}
              <div class="modal-header">
                <h4 class="modal-title">Contact Us</h4>
                <button type="button" class="close" data-dismiss="modal">
                  &times;
                </button>
              </div>

              {/* <!-- Modal body --> */}
              <div class="modal-body">
                <div className="form_section2">
                  <h4>Fill in your information</h4>
                  <p>we don't share your information</p>
                  <form onSubmit={this.sendEmail} className="form_section_div">
                    <div class="mb-1">
                      <div class="form-group">
                        <input
                          type="text"
                          className="form-control form-group"
                          id="form_2"
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
                          id="exampleFormControlInput11"
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
                        id="exampleFormControlTextarea12"
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
                    <div className="men_icon2">
                      <img className="men_img_bottom2" src={Man} alt="menimg" />
                    </div>
                    <div className="form_input_man2">
                      <FaUserAlt className="user_img_bottom" />
                      {/* <img className="user_img_bottom" src={user} alt="menimg"/> */}
                    </div>
                    <div className="email_icon2">
                      <img
                        className="email_img_bottom2"
                        src={email}
                        alt="menimg"
                      />
                    </div>
                  </form>
                  <div className="contact_career_box">
                    <h1>Contact Us</h1>
                    <ul>
                      <li className="my_lists">
                        <IoIosSend className="contact_icons" /> Benson town,
                        Bangalore
                      </li>
                      <li className="my_lists">
                        <HiOutlineMail className="contact_icons" />
                        <a href="mailto:info@creniux.com">info@creniux.com</a>
                      </li>
                      <li className="my_lists">
                        <FaPhoneAlt className="contact_icons" />
                        +91-6366178925 <br /> +91-7795598779
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* <!-- Modal footer --> */}
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* second section start here */}
        {/* <section>
        <div className="container-fluid career_second_heading">
          <div className="row">
            <div className="col-md-10 col-lg-10 col-sm-10 col-12 mx-auto career_heading">
              <h5>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                praesentium tempora blanditiis necessitatibus libero voluptate
                eaque! Voluptas minima similique, et rerum ducimus doloremque
                officia corporis!
              </h5>
            </div>
          </div>
        </div>
      </section> */}

        {/* careers block start here */}

        <section className="whowe_blog_section">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-10 col-lg-10 col-sm-10 col-12 mx-auto">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12 order-lg-0 order-1 mx-auto">
                    <figure>
                      <img
                        src={career3}
                        className="who_we_top_img"
                        alt="p1img"
                      />
                    </figure>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12 order-lg-1 order-0 whowe_headings">
                    <h2>Who are we?</h2>
                    <p>
                      We are a promising firm giving innovative software
                      solutions delivering best services to our clients with
                      best expertise to boost your business.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* why join block start here */}

        <section className="whowe_blog_section">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-10 col-lg-10 col-sm-10 col-12 mx-auto">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12 whowe_headings">
                    <h2>Why you should join?</h2>
                    <p>
                      Our team is the secret of our success that’s what made us
                      best and we look out for the best. We are always open for
                      people who can takeover challenges and be part of our
                      problems in turn developing world class solutions to our
                      clients.
                    </p>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12 mx-auto border_first">
                    <figure>
                      <img
                        src={career2}
                        className="who_we_top_img"
                        alt="p1img"
                      />
                    </figure>
                    {/* <div className="background_shapes">
              <div className="circle_back">
                <p className="all_circle3"></p>
                
              </div>
            </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="work_section">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-10 col-lg-10 col-sm-10 col-12 mx-auto">
                <div className="work_with_us">
                  <h2>Work with us as</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="work2_section">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-10 col-lg-10 col-sm-10 col-12 mx-auto">
                <div className="row">
                  <div className="col-lg-8 col-md-8 col-12 responsibilites_headings">
                    <div className="row">
                      <div className="col-4 dot_background">
                        <div className="all_careers_options">
                          <h4>UI/UX Designer</h4>
                        </div>
                      </div>
                      <div className="col-8">
                        <p>
                          As a UI/UZ designer, you will be aligned with the
                          Creniux design studio, a dedicated in-house team
                          creating design, UI and visual content for the
                          company.
                        </p>
                      </div>
                    </div>
                    <h3>Responsibilities</h3>
                    <p>
                      Designing user interfaces and quickly iterating on
                      multiple design solutions.
                      <br /> Designing interfaces for iOS, Android and Web
                      Applications
                      <br /> Deliver innovative end-to-end user experience that
                      optimise among user needs, <br />
                      business goals, and technologies realities across web and
                      mobile platforms.
                      <br /> Understand and implement brand guidelines such as
                      typography, colour theory etc.
                      <br /> Plan and conduct interviews, user surveys, card
                      sorting, user research competitor analysis and usability
                      tests
                      <br /> Design and execute studies into user behavior and
                      attitudes <br />
                      Create user stories, personas, and storyboards <br />
                      Determine information architecture and create sitemaps{" "}
                      <br />
                      Create prototypes and wireframes
                    </p>
                    <h3>Skills</h3>
                    <p>
                      0-2 years of work experience in relevant fields of UI UX
                      Design.
                      <br /> Proficiency in Adobe Creative Suite such as XD,
                      Photoshop and Illustrator.
                      <br /> Good Communication Skills to present your work.
                      <br /> Proficiency with end-to-end design process. <br />
                      Ability to solve problems creatively and effectively{" "}
                      <br />
                      Business know-how: Understanding of business metrics and
                      the ability to translate company goals and objectives into
                      digital experiences <br />
                      Fluent in user-centered design best practices
                      <br /> Ability to collaborate with different teams
                    </p>

                    {/* img and text section end here */}
                  </div>
                  <div className="col-lg-4 col-md-4 col-12 mx-auto">
                    <figure>
                      <img
                        className="work_images img-fluid"
                        src={work1}
                        alt=""
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="work2_section">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-10 col-lg-10 col-sm-10 col-12 mx-auto">
                <div className="row">
                  <div className="col-lg-8 col-md-8 col-12 responsibilites_headings">
                    <div className="row">
                      <div className="col-4 dot_background">
                        <div className="all_careers_options">
                          <h4>IOT Expert</h4>
                        </div>
                      </div>
                      <div className="col-8">
                        <p>
                          Excellent Python development Thorough understanding of
                          Azure IOT Hub / Event Hub, Kafka real time/stream data
                          processing using spark/Apache beam.
                        </p>
                      </div>
                    </div>
                    <h3>Responsibilities</h3>
                    <p>
                      Managing deliverables to a mix of projects to both
                      internal and external partners.
                      <br /> Designing interfaces for iOS, Android and Web
                      Applications
                      <br />
                      Working closely with Product Management and Technical
                      teams to provide the technical oversight and leadership to
                      IoT RD projects
                      <br />
                      This candidate will provide thought technical skills in
                      the IoT domain and integration between an array of systems
                      including Kafka, Azure IoT hub, Event Hub, Spark/Apache
                      beam, NoSQL and other enterprise systems
                      <br /> Understand and implement brand guidelines such as
                      typography, colour theory etc.
                    </p>
                    <h3>Skills</h3>
                    <p>
                      0-2 years of work experience in relevant fields of IOT.
                      <br /> Team Player
                      <br /> Good Communication Skills to present your work.
                      <br /> Team-working - being able to work with others in
                      groups and teams <br />
                      Good knowledge of quality standards and best practices
                      <br />
                      Problem solving and decision-making - working with others
                      to identify, define and solve problems, which includes
                      making decisions about the best course of action
                      <br />
                    </p>

                    {/* img and text section end here */}
                  </div>
                  <div className="col-lg-4 col-md-4 col-12 mx-auto">
                    <figure>
                      <img
                        className="work_images img-fluid"
                        src={work2}
                        alt=""
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="work2_section">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-10 col-lg-10 col-sm-10 col-12 mx-auto">
                <div className="row">
                  <div className="col-lg-8 col-md-8 col-12 responsibilites_headings">
                    <div className="row">
                      <div className="col-4 dot_background">
                        <div className="all_careers_options">
                          <h4>Machine Learning Expert</h4>
                        </div>
                      </div>
                      <div className="col-8">
                        <p>
                          The Data Science and Machine Learning team works
                          closely with sales, product and engineering teams to
                          design and implement the next generation of retail
                          solutions.
                        </p>
                      </div>
                    </div>
                    <h3>Responsibilities</h3>
                    <p>
                      Under guidance, or independently, design and implement
                      machine learning models by
                      <br /> Procuring data from platform, client and public
                      data sources
                      <br />
                      Implementing data enrichment and cleansing routines <br />
                      Implementing features, preparing modeling data sets,
                      feature selection, etc.
                      <br /> Evaluating candidate models, selecting and
                      reporting on test performance of final one
                      <br />
                      Ensuring proper runtime deployment of models, and
                      <br /> Implementing runtime monitoring of model inputs and
                      performance in order to ensure continued model stability.
                    </p>
                    <h3>Skills</h3>
                    <p>
                      0-2 years of work experience in relevant fields of Machine
                      Learning.
                      <br /> Experience with transitioning applications from R&D
                      into production is a big plus
                      <br /> Good Communication Skills to present your work.
                      <br /> Experience working in distributed international
                      teams <br />
                      Domain expertise in accounting, tax or related areas
                      <br />
                      Familiarity with Jira and Confluence
                    </p>

                    {/* img and text section end here */}
                  </div>
                  <div className="col-lg-4 col-md-4 col-12 mx-auto">
                    <figure>
                      <img
                        className="work_images img-fluid"
                        src={work3}
                        alt=""
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="work2_section">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-10 col-lg-10 col-sm-10 col-12 mx-auto">
                <div className="row">
                  <div className="col-lg-8 col-md-8 col-12 responsibilites_headings">
                    <div className="row">
                      <div className="col-4 dot_background">
                        <div className="all_careers_options">
                          <h4>Artificial Intelligence Expert</h4>
                        </div>
                      </div>
                      <div className="col-8">
                        <p>
                          Artifical Intelligence experts who are passionate to
                          build something that is a catalyst for change and help
                          the business to utilize AI and within six months take
                          on the role of AI Engineering Head in India.
                        </p>
                      </div>
                    </div>
                    <h3>Responsibilities</h3>
                    <p>
                      Understand the latest industrial developments in AI/ML
                      <br /> Ability to translate requirements into design
                      specifications and experience in developing design
                      documents
                      <br />
                      Build data ingest and data transformation infrastructure.
                      Identify transfer learning opportunities and new training
                      datasets.
                      <br />
                      Build AI models from scratch and help product managers and
                      stakeholders understand results.
                      <br />
                      Should have understanding on conversational AI and related
                      platforms like DialogFlow, Microsoft Azure bot Services,
                      IBM Watson, Rasa stack
                    </p>
                    <h3>Skills</h3>
                    <p>
                      0-2 years of work experience in relevant fields of
                      Artificial Intelligence.
                      <br /> Have published some research papers in Artificial
                      Intelligence domain or contributed to some research which
                      got implemented commercially.
                      <br /> Good Communication Skills to present your work.
                      <br /> Proficiency in any one language Python Java C++.{" "}
                      <br />
                      Strong data structures and algorithmic skills.
                      <br />
                      Self-motivated and passionate about Artificial General
                      Intelligence.
                      <br />
                    </p>

                    {/* img and text section end here */}
                  </div>
                  <div className="col-lg-4 col-md-4 col-12 mx-auto">
                    <figure>
                      <img
                        className="work_images img-fluid"
                        src={work4}
                        alt=""
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="work2_section">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-10 col-lg-10 col-sm-10 col-12 mx-auto">
                <div className="row">
                  <div className="col-lg-8 col-md-8 col-12  responsibilites_headings">
                    <div className="row">
                      <div className="col-4 dot_background">
                        <div className="all_careers_options">
                          <h4>App Developer</h4>
                        </div>
                      </div>
                      <div className="col-8">
                        <p>
                        As an Application Developer, you will lead Creniux into the future by translating system requirements into the design and development of customized systems in an agile environment. 
                        </p>
                      </div>
                    </div>
                    <h3>Responsibilities</h3>
                    <p>
                    You are responsible for designing and developing Java components using Spring framework to implement transaction management
                      <br />You will manage Java objects and enterprise integration needs that involves messages, routers, transformations, adapters, service activators, management and auditing.
                      <br />You will design, develop and support application solutions to meet customer requirements. <br />
                      You will develop technical specifications and unit test cases.
                      <br />Perform application unit testing activities such as Translate business and IT (Information Technology) requirements and also Interpret data models.
                    </p>
                    <h3>Skills</h3>
                    <p>
                      0-2 years of work experience in relevant fields of App Developer. 
                     
                        <br /> C#
                      <br /> Good Communication Skills to present your work.
                      <br /> 
                      Application Development
                      <br />
                      Business Strategy
                     <br />
                     Agile
                      <br />SQL Server
                    </p>

                    {/* img and text section end here */}
                  </div>
                  <div className="col-lg-4 col-md-4 col-12 mx-auto">
                    <figure>
                      <img
                        className="work_images img-fluid"
                        src={work5}
                        alt="work5"
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="contact_to_hr">
          <div className="hr_box">
            <a href="mailto:info@creniux.com">
              To apply - send your resume to info@creniux.com
            </a>
          </div>
        </div>
      </>
    );
  }
}
export default Career;
