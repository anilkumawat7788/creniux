import React, { Component } from "react";
import { Helmet } from "react-helmet";
import "./service.css";

import p10 from "../../images/p10.png";
import service1 from "../../images/service1.png";
import service2 from "../../images/service2.png";
import service3 from "../../images/service3.png";
import service4 from "../../images/service4.png";
import service5 from "../../images/service5.png";
import service6 from "../../images/service6.png";
import service7 from "../../images/service7.png";
import service8 from "../../images/service8.png";
import service9 from "../../images/service9.png";
import service10 from "../../images/service10.png";
import axios from "axios";
import email from "../../images/email.svg";
import { NavLink } from "react-router-dom";
import { IoIosSend } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaUserAlt } from "react-icons/fa";

import Man from "../../images/Man.svg";
import user from "../../images/user.svg";

import p11 from "../../images/p11.png";

class Service extends Component {
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
          <title>Services | Creniux</title>
          <meta
            name="description"
            content="We are a full fledged software services company
                        providing best innovative solutions to all your software
                        requirements. We are here to delight you with our
                        services right from software consulting to software
                        deployment and then support and maintenance."
          />
        </Helmet>
        <div className="main_bg">
          <section>
            <div className="container-fluid services_top_section">
              <div className="row">
                <div className="col-md-10 col-lg-10 col-sm-10 col-12 mx-auto services_top_heading">
                  <h1>Services</h1>
                  {/* <div className="navlink_homeandcontact">
                  <NavLink className="home_and_service" to="/">
                    <p>
                      Home <span className="mx-2">&gt;</span>
                    </p>
                  </NavLink>
                  <NavLink className="home_and_service" to="/service">
                    <p> Services</p>
                  </NavLink>
                </div> */}
                </div>
              </div>
            </div>
          </section>
          {/* IOT SECTION here */}
          <section className="services_header_section">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-10 col-lg-10 col-sm-10 col-12 mx-auto">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-12 order-1 order-lg-0">
                      <div className="iot_box">
                        <img
                          src={service1}
                          className="iot_top_img"
                          alt="p1img"
                        />
                        <button
                          to="/contact"
                          className="btn_get_service"
                          data-toggle="modal"
                          data-target="#myModal1"
                        >
                          Get This Service
                        </button>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 order-0 order-lg-1 iot_headings">
                      <h3>Internet Of Things</h3>
                      <h4>
                        Want to digitize your business, secure important data,
                        improve decision-making and cut down unnecessary costs?
                      </h4>
                      <p>
                        In today’s spectrum of the IOT, has got a digital
                        revolution impacting our daily lives in terms of how we
                        interact with other humans and devices. Our IOT
                        Expertise includes:
                        <br />
                        Connectivity Management
                        <br /> All-round IoT Applications
                        <br /> Device Management
                        <br /> IoT Data Analytics
                        <br /> Data Visualization
                        <br /> IoT Consulting
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- The Modal --> */}
          <div class="modal fade" id="myModal1">
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
                    <form
                      onSubmit={this.sendEmail}
                      className="form_section_div"
                    >
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
                        <img
                          className="men_img_bottom2"
                          src={Man}
                          alt="menimg"
                        />
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
          {/*cloud service section here*/}
          <section className="services_header_section">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-10 col-lg-10 col-sm-10 col-12 mx-auto">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-12 cloud_headings">
                      <h3>Cloud Service & Infrastructure</h3>
                      {/* <h4>
                    Want to digitize your business, secure important data,
                    improve decision-making and cut down unnecessary costs?
                  </h4> */}
                      <p>
                        Creniux has extensive experience on developing cloud
                        ready applications, cloud deployment automation and
                        management. We develop cloud compatible micro services
                        and APIs that can easily scale horizontally and
                        vertically.
                        <br /> We employ the following approach at a high level.
                        <br /> Identification of Domain Entities and business
                        operation <br />
                        Identification of Core Microservices and Integration
                        <br /> Mobile first Approach with Omni channel support{" "}
                        <br />
                        Support for SaaS and Optimized PaaS
                        <br />
                        Industry Standard certified IaaS <br />
                        Continuous Integration and Continuous Deployment
                        <br /> Security at application, service, data and cloud
                      </p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 mx-auto">
                      <div className="iot_box2">
                        <img
                          src={service2}
                          className="iot_top_img2"
                          alt="p1img"
                        />
                        <button
                          to="/contact"
                          className="btn_get_service2"
                          data-toggle="modal"
                          data-target="#myModal1"
                        >
                          Get This Service
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* IOT SECTION here */}
          <section className="services_header_section">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-10 col-lg-10 col-sm-10 col-12 mx-auto">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-12 mx-auto  order-1 order-lg-0">
                      <div className="iot_box">
                        <img
                          src={service3}
                          className="iot_top_img"
                          alt="p1img"
                        />
                        <button
                          to="/contact"
                          className="btn_get_service"
                          data-toggle="modal"
                          data-target="#myModal1"
                        >
                          Get This Service
                        </button>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12  order-0 order-lg-1 iot_headings">
                      <h3>Training & Consultancy</h3>
                      {/* <h4>
                    Want to digitize your business, secure important data,
                    improve decision-making and cut down unnecessary costs?
                  </h4> */}
                      <p>
                        We offer Staffing, business & technology consulting for
                        your business problems; we conduct classroom and
                        on-premise technical training for a wide range of
                        cutting edge technologies and our training material is
                        tailor-made by the subject matter experts and trainers
                        that are from Creniux core technology team. Along with
                        technical training we help organizations and individuals
                        improve personal competence <br />• Real user and
                        acceptance survey <br />• Rapid prototyping and rapid
                        change <br />• Omni channel customer experience
                        <br /> • Design & development to adapt change
                        <br /> • Post production market analysis <br />•
                        360-degree feedback collections and in-corporation
                        <br /> • Help Customer in product positioning <br />•
                        Post release support
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*cloud service section here*/}
          <section className="services_header_section">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-10 col-lg-10 col-sm-10 col-12 mx-auto">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-12 cloud_headings">
                      <h3>Mobile App Development</h3>

                      <p>
                        Multiple businesses are driving their commerce to
                        mobiles for a direct business connection with their
                        current clients or customers as well as building new
                        connections with ingenious mobile apps, we enable our
                        Clients to envision their ideas and build cutting edge
                        innovative mobile app that your user will love. We are a
                        leading UX/UI Design & Development powerhouse. Our focus
                        primarily is on the following areas to overcome the
                        fastest growing mobility space. Adapt to Change in
                        Business Value Proposition and mobility technology Our
                        vast experience on omni channel product development help
                        customer achieves mobility on the go accessing in any
                        device from anywhere with our Enterprise APIs
                      </p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 mx-auto">
                      <div className="iot_box2">
                        <img
                          src={service4}
                          className="iot_top_img2"
                          alt="p1img"
                        />
                        <button
                          to="/contact"
                          className="btn_get_service2"
                          data-toggle="modal"
                          data-target="#myModal1"
                        >
                          Get This Service
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* IOT SECTION here */}
          <section className="services_header_section">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-10 col-lg-10 col-sm-10 col-12 mx-auto">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-12 mx-auto order-1 order-lg-0">
                      <div className="iot_box">
                        <img
                          src={service5}
                          className="iot_top_img"
                          alt="p1img"
                        />
                        <button
                          to="/contact"
                          className="btn_get_service"
                          data-toggle="modal"
                          data-target="#myModal1"
                        >
                          Get This Service
                        </button>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12  order-0 order-lg-1 iot_headings">
                      <h3>Product Innovation</h3>

                      <p>
                        The aim of our product or process development projects
                        is to turn business ideas from concept to market-ready
                        products by converging to a specific market need, being
                        their technology partner end-to-end: from ideation &
                        design to prototyping to market-fit, full product
                        development to launch, strategy, and scaling up,
                        accelerating the ideas and new ventures through rapid
                        and quick development, product management, etc.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*cloud service section here*/}
          <section className="services_header_section">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-10 col-lg-10 col-sm-10 col-12 mx-auto">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-12 cloud_headings">
                      <h3>Enterprise & Digital Transformation</h3>

                      <p>
                        Drive Customer Experience With Digital Transformation
                        Creniux digitally transforms your business activities,
                        processes, and models to fully leverage the digital
                        technologies and their accelerating impact on the people
                        in a planned way, with present and future changes in
                        mind, to deliver value to end customers. The digital
                        transformation (DX) is imperative for all businesses
                        from small to large enterprises.
                      </p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 mx-auto">
                      <div className="iot_box2">
                        <img
                          src={service6}
                          className="iot_top_img2"
                          alt="p1img"
                        />
                        <button
                          to="/contact"
                          className="btn_get_service2"
                          data-toggle="modal"
                          data-target="#myModal1"
                        >
                          Get This Service
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* IOT SECTION here */}
          <section className="services_header_section">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-10 col-lg-10 col-sm-10 col-12 mx-auto">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 mx-auto order-1 order-lg-0 col-12">
                      <div className="iot_box">
                        <img
                          src={service7}
                          className="iot_top_img"
                          alt="p1img"
                        />
                        <button
                          to="/contact"
                          className="btn_get_service"
                          data-toggle="modal"
                          data-target="#myModal1"
                        >
                          Get This Service
                        </button>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12  order-0 order-lg-1 iot_headings">
                      <h3>Software Services</h3>

                      <p>
                        The swift pace of technological advancements has greatly
                        diminished the barrier of time-to-market of complex and
                        advanced solutions. Our Core Engineering Services team
                        focuses on Software Development driven by Agile,
                        Domain-Driven-Design and Test-Driven Principles to
                        ensure 100% requirement satisfaction and to guarantee
                        control over project management. We follow process
                        automation including Dev-Ops Operation, CI/CD release
                        management, and end to end QA automation. With the help
                        of in-house frameworks, we guarantee quality and
                        cost-effective solutions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*cloud service section here*/}
          <section className="services_header_section">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-10 col-lg-10 col-sm-10 col-12 mx-auto">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-12  cloud_headings">
                      <h3>Business Intelligence & Analytics</h3>

                      <p>
                        As the amount of information available online is
                        growing, information overload is a real problem.
                        Accessing specific important information from a huge
                        knowledge base has clearly shown the importance of
                        natural language processing applications. We can help
                        you to build solutions leveraging artificial
                        intelligence to empower people and automate processes to
                        enable our clients with data driven decisions, We offer
                        services centered around business intelligence, business
                        data analytics and data visualization. We constantly
                        help our customer finding new opportunity based on
                        analytics and gap analysis. Being an expert in handling
                        big data, extract semantics and value proposition using
                        several scientifically proven algorithms, we predict and
                        propose what could help business make a quick and right
                        decision, to maintain profitability and ensure
                        competitiveness within their respective industries. We
                        also provide end to end solution in visualizing data in
                        various platforms and devices. Our services are cost
                        effective since we develop and use sophisticated cloud
                        based services that keep your analytics related costs in
                        control while empowering your business with analytics
                        insights.
                      </p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 mx-auto">
                      <div className="iot_box2">
                        <img
                          src={service8}
                          className="iot_top_img2"
                          alt="p1img"
                        />
                        <button
                          to="/contact"
                          className="btn_get_service2"
                          data-toggle="modal"
                          data-target="#myModal1"
                        >
                          Get This Service
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* IOT SECTION here */}
          <section className="services_header_section">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-10 col-lg-10 col-sm-10 col-12 mx-auto">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 mx-auto order-1 order-lg-0 col-12">
                      <div className="iot_box">
                        <img
                          src={service9}
                          className="iot_top_img"
                          alt="p1img"
                        />
                        <button
                          to="/contact"
                          className="btn_get_service"
                          data-toggle="modal"
                          data-target="#myModal1"
                        >
                          Get This Service
                        </button>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6  order-0 order-lg-1 col-12 iot_headings">
                      <h3>Data Recovery & Management</h3>

                      <p>
                        Your data is important. Data is GOLD... Consol.info
                        provides data recovery for desktop, laptops and hard
                        disks drives. We also recover data from memory cards,
                        pen drives, flash memory drives etc. For any data
                        recovery solutions feel free to contact us.. Data
                        Recovery team at Consol.info comprises dedicated
                        professional experts having vast knowledge
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*cloud service section here*/}
          <section className="services_header_section">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-10 col-lg-10 col-sm-10 col-12 mx-auto">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-12 cloud_headings">
                      <h3>ERP Solutions</h3>
                      {/* <h4>
                    Want to digitize your business, secure important data,
                    improve decision-making and cut down unnecessary costs?
                  </h4> */}
                      <p>
                        We design, develop and implement customized ERP
                        solutions throughout your management that permeates into
                        every operational sections. Our comprehensive,
                        all-encompassing ERP platforms will provide your
                        business the benefits of data congruency and
                        cost-effectiveness.
                      </p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 mx-auto">
                      <div className="iot_box2">
                        <img
                          src={service10}
                          className="iot_top_img2"
                          alt="p1img"
                        />
                        <button
                          to="/contact"
                          className="btn_get_service2"
                          data-toggle="modal"
                          data-target="#myModal1"
                        >
                          Get This Service
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }
}
export default Service;
