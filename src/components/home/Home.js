import React, { Component } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import "./home.css";
import { Swiper } from "swiper";
import { BiPlayCircle } from "react-icons/bi";
import { AiOutlineArrowRight } from "react-icons/ai";
import { IoIosSend } from "react-icons/io";
import { NavLink } from "react-router-dom";
import p1 from "../../images/p1.png";
import p13 from "../../images/p13.png";
import p14 from "../../images/p14.png";
import p15 from "../../images/p15.jpg";
import p9 from "../../images/p9.png";
import message from "../../images/message.svg";
import soft from "../../images/soft.svg";
import app from "../../images/app.svg";
import about from "../../images/about.svg";
import app2 from "../../images/app2.svg";
import work1 from "../../images/work1.svg";
import work2 from "../../images/work2.svg";
import work3 from "../../images/work3.svg";
import work4 from "../../images/work4.svg";
import work5 from "../../images/work5.svg";
import work6 from "../../images/work6.svg";
import work7 from "../../images/work7.svg";
import work8 from "../../images/work8.svg";
import call from "../../images/call.svg";
import logo from "../../images/logo.png";

// const Home = () => {
class Home extends Component {
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

  componentDidMount() {
    this.swiper = new Swiper(".swiper-container", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 3,
        slideShadows: true,
      },
      loop: true,
    });
  }
  render() {
    return (
      <>
        <Helmet>
          <title>Creniux</title>
          <meta
            name="description"
            content="We are a full fledged software services company
                        providing best innovative solutions to all your software
                        requirements We are here to delight you with our
                        services right from software consulting to software
                        deployment and then support and maintenance"
          />
           <meta property="og:image" content="${require(`./src/images/logo.png`)}" />
           <meta property="og:image" content={logo} />
        </Helmet>
        <div className="main_container">
          <section className="home_header_section">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-10 col-lg-10 col-sm-10 col-12 mx-auto">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-12 home_digital">
                      <img
                        src={message}
                        className="message_block2"
                        alt="message"
                      />

                      <h1>ENDLESS DIGITAL</h1>
                      <h2>POSSIBILITIES</h2>
                      <p>
                        We are a full fledged software services company
                        providing best innovative solutions to all your software
                        requirements. We are here to delight you with our
                        services right from software consulting to software
                        deployment and then support and maintenance.
                      </p>
                      <NavLink to="/service" className="btn_explore_more">
                        Explore more <BiPlayCircle />
                      </NavLink>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                      <figure>
                        <img src={p1} className="header_top_img" alt="p1img" />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* development services start here */}
          <section className="home_services_section">
            <div className="container-fluid ">
              <div className="row">
                <div className="col-md-10 col-lg-10 col-sm-10 col-12 mx-auto">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-12 order-1 order-lg-0 home_services background_shap">
                      <div className="row">
                        <div className="col-6">
                          <div className="development_boxes1">
                            <span className="circle111">
                              <img src={soft} className="circle_img" alt="" />
                            </span>
                            <h3>Software Services</h3>
                            <p>
                              We embrace software development driven by Agile
                              methodology, Domain design and test design
                              principles.
                            </p>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="development_boxes">
                            <span className="circle2">
                              <img src={app} className="circle_img" alt="" />
                            </span>
                            <h3>App Development</h3>
                            <p>
                              Evolving your idea into a successful app and drive
                              your commerce to mobiles for direct business
                              connection with your clients.
                            </p>
                          </div>
                          <div className="development_boxes">
                            <span className="circle3">
                              <img src={app2} className="circle_img" alt="" />
                            </span>
                            <h3>BI & Analytics</h3>
                            <p>
                              Get in touch with us to build solutions
                              consolidating AI to empower people and automate
                              processes.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 order-0 order-lg-1 home_heading_services">
                      <h4>Our Services</h4>
                      <h3>See what service we offer</h3>
                      <p>
                        We offer a sea of solutions to all your software needs,
                        We build an promote, provide end-to-end solutions,
                        agility in execution and depth of specialization.
                      </p>
                      <NavLink to="/service" className="btn_see">
                        See more <AiOutlineArrowRight className="arrow_grren" />
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* products start here */}
          <section className="home_products_section">
            <div className="container-fluid ">
              <div className="row">
                <div className="col-md-10 col-lg-10 col-sm-10 col-12 mx-auto">
                  <div className="row">
                    <div className="col-md-6 col-lg-6 col-sm-6 col-12 mx-auto products_headings_left">
                      <h4>Our Products</h4>
                      <h3>Introducing Our Products</h3>
                      <p>
                        We have built some unique products to cater the customer
                        needs and help them boost their business online. Get in
                        touch with us to know more about our products.
                      </p>
                      <NavLink to="/product" className="btn_see">
                        See more <AiOutlineArrowRight className="arrow_grren" />
                      </NavLink>
                    </div>
                    <div className="col-md-5 col-lg-5 col-sm-5 col-12 mx-auto">
                      {/* <img className="product_img_right" src={p4} alt="" /> */}
                      <div className="swiper-container">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide swiper_my">
                            <div className="img1">
                              <div className="imgboxes">
                                <h5>Lead management software</h5>
                                <p>“One software to collect and manage your leads effectively”</p>
                                <NavLink
                                  to="/product"
                                  className="btn_read_product"
                                >
                                  Read More
                                </NavLink>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide swiper_my">
                            <div className="img2">
                              <div className="imgboxes">
                                <h5>Digital advertising boards</h5>
                                <p>“Digitize your ad campaigns through our digital advertising soluions”</p>
                                <NavLink
                                  to="/product"
                                  className="btn_read_product"
                                >
                                  Read More
                                </NavLink>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide swiper_my">
                            <div className="img3">
                              <div className="imgboxes">
                                <h5>Online assessment tool</h5>
                                <p>“Software to conduct and  evaluate assessments online”</p>
                                <NavLink
                                  to="/product"
                                  className="btn_read_product"
                                >
                                  Read More
                                </NavLink>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide swiper_my">
                            <div className="img4">
                              <div className="imgboxes">
                                <h5>ERP solutions</h5>
                                <p>
                                  "One solution one platform for Growing
                                  Business"
                                </p>
                                <NavLink
                                  to="/product"
                                  className="btn_read_product"
                                >
                                  Read More
                                </NavLink>
                              </div>
                            </div>
                          </div>
                          {/* <div className="swiper-slide">
                            <div className="img2">
                              <div className="imgboxes">
                                <h5>Easynotes</h5>
                                <p>"We Give WINGS To Your Paper"</p>
                                <NavLink
                                  to="/product"
                                  className="btn_read_product"
                                >
                                  Read More
                                </NavLink>
                              </div>
                            </div>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* digital marketiing start here */}
          <section className="home_digital_marketing">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-10 col-lg-10 col-sm-10 col-12 mx-auto">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-12 home_digital_marketing_heading">
                      <h4>About Us</h4>
                      <h3>We’re a software development firm.</h3>
                      <p>
                        Creniux is a global software development company
                        offering progressive end-to-end software development,
                        IOT solutions, Mobile application development, cloud
                        services and infrastructure, Business intelligence and
                        analytics, ERP solutions, Enterprise and digital
                        transformation by combining our business domain
                        experience, technical expertise, profound knowledge of
                        the latest industry trends & quality driven delivery
                        model.
                      </p>
                      <NavLink to="/about" className="btn_explore_more">
                        Explore more <BiPlayCircle />
                      </NavLink>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                      <figure>
                        <img
                          src={about}
                          className="about_home_img"
                          alt="p1img"
                        />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* 
      our work start here */}
          <section className="home_our_work_section">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-10 col-lg-10 col-sm-10 col-12 mx-auto">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-12 order-lg-0 order-1 mx-auto">
                      <div className="row">
                        <div className="col-md-3 col-sm-3 col-6">
                          <div className="workfirst">
                            <span className="number_circle">
                              <p>01</p>
                            </span>
                            <span className="img_circle">
                              <img
                                className="work_imgs_circle"
                                src={work1}
                                alt=""
                              />
                            </span>
                            <p>Planning</p>
                          </div>
                          <div className="workfirst">
                            <span className="number_circle">
                              <p>02</p>
                            </span>
                            <span className="img_circle">
                              <img
                                className="work_imgs_circle"
                                src={work2}
                                alt=""
                              />
                            </span>
                            <p>Ideation</p>
                          </div>
                        </div>
                        <div className="col-md-3 col-sm-3 col-6">
                          <div className="worksecond">
                            <span className="number_circle">
                              <p>03</p>
                            </span>
                            <span className="img_circle">
                              <img
                                className="work_imgs_circle"
                                src={work3}
                                alt=""
                              />
                            </span>
                            <p>Scope Definition</p>
                          </div>
                          <div className="worksecond">
                            <span className="number_circle">
                              <p>04</p>
                            </span>
                            <span className="img_circle">
                              <img
                                className="work_imgs_circle"
                                src={work4}
                                alt=""
                              />
                            </span>
                            <p>Design</p>
                          </div>
                        </div>
                        <div className="col-md-3 col-sm-3 col-6">
                          <div className="workfirst">
                            <span className="number_circle">
                              <p>05</p>
                            </span>
                            <span className="img_circle">
                              <img
                                className="work_imgs_circle"
                                src={work5}
                                alt=""
                              />
                            </span>
                            <p>Development</p>
                          </div>
                          <div className="workfirst">
                            <span className="number_circle">
                              <p>06</p>
                            </span>
                            <span className="img_circle">
                              <img
                                className="work_imgs_circle"
                                src={work6}
                                alt=""
                              />
                            </span>
                            <p>User Testing</p>
                          </div>
                        </div>
                        <div className="col-md-3 col-sm-3 col-6">
                          <div className="worksecond">
                            <span className="number_circle">
                              <p>07</p>
                            </span>
                            <span className="img_circle">
                              <img
                                className="work_imgs_circle"
                                src={work7}
                                alt=""
                              />
                            </span>
                            <p>Approve</p>
                          </div>
                          <div className="worksecond">
                            <span className="number_circle">
                              <p>08</p>
                            </span>
                            <span className="img_circle">
                              <img
                                className="work_imgs_circle"
                                src={work8}
                                alt=""
                              />
                            </span>
                            <p>Publish</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 order-lg-1 order-0 home_work_flow">
                      <h4>Workflow</h4>
                      <h3>See how we work</h3>
                      <p>
                        We humanize modern development with cutting edge
                        technologies delivering the best solutions to our
                        clients. <br />
                        <br />
                        Your challenge-and ours-is to embrace that.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* blog section start here */}
          <section className="home_blog_section">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-10 col-lg-10 col-sm-10 col-12 mx-auto">
                  <div className="blog_top_heading">
                    <h4>Blogs</h4>
                    <h3>This is what we're talking about.</h3>
                    <NavLink to="/blog" className="btn_see">
                      See more <AiOutlineArrowRight className="arrow_grren" />
                    </NavLink>
                  </div>

                  <div className="swiper-container">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="blogbox">
                          <img className="blogbox_img1" src={p13} alt="" />
                          <h1>REACT VS ANGULAR WHICH ONE TO CHOOSE?</h1>
                          <p>
                            Angular is a framework for building dynamic web
                            apps. React is a Js library used for building ui
                            components.
                          </p>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="blogbox">
                          <img className="blogbox_img1" src={p14} alt="" />
                          <h1>AI-PROMISE OR HYPE ?</h1>
                    <p>
                      AI and ML are set to tranform future of digital world. Be
                      it any sector AI is booming like a star with its
                      extra-ordinary vide variety of solutions.
                    </p>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="blogbox">
                          <img className="blogbox_img1" src={p13} alt="" />
                          <h1>THINGS TO ASK YOURSELF BEFORE DEVELOPNIG AN APP</h1>
                    <p>
                      Should i outsource app development or do it inhouse ? How
                      to market the app to set it for success ?
                    </p>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="blogbox">
                          <img className="blogbox_img1" src={p14} alt="" />
                          <h1>AN OVERVIEW OF AI/ML</h1>
                    <p>
                      AI is a field that focus on building smart machines that
                      can perform tasks which typically requires human
                      intelligence.ML empowers machines with ability to learn.
                    </p>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="blogbox">
                          <img className="blogbox_img1" src={p13} alt="" />
                          <h1>E-COMMERCE DEVELOPMENT AT RPLTECHNO</h1>
                          <p>
                            Our e-commerce development solution delivers an
                            effective and comprehensive e-business strategy and
                            marketing hacks.
                          </p>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="blogbox">
                          <img className="blogbox_img2" src={p15} alt="" />
                          <h1>MECHINE LEARNING FOR A PRODUCT DEVELOPMENT</h1>
                          <p>
                            ML is turning the data evaluation into a
                            tranformable and more efficient technology.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* testimonials section start here */}
          <section className="home_header_section">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-10 col-lg-10 col-sm-10 col-12 mx-auto">
                  <div className="row">
                    <div className="col-lg-7 col-md-7 col-12">
                      <figure>
                        <img src={p9} className="blog_home_img" alt="p1img" />
                      </figure>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12">
                      <div className="swiper-container">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide home_blog_heading">
                            <h4>Testimonials</h4>
                            <h3>Here's what our customers are saying</h3>
                            <p>
                              "Commitment to the cause under any circumstances,
                              easy adaptability to new technologies, a young
                              team that shows remarkable maturity in the way
                              they address the solution at hand. I have worked
                              with them on several critical deliveries and
                              continue to work with them on various initiatives
                              of ours and it has always been a pleasure.
                              <br />
                              <br />
                              Suresh kumar
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="container-fluid home_callrequest_section">
              <div className="row">
                <div className="col-lg-10 col-md-10 col-sm-10 col-12 mx-auto">
                  <div className="row">
                    <div className="col-md-6 col-lg-6 col-12 home_call_request">
                      <h4>Request a Call Back</h4>
                      <h3>We’ll reach out over email to set up a call.</h3>
                      <div className="email_form">
                        <form onSubmit={this.sendEmail}>
                          <input
                            type="email"
                            className="email_class"
                            placeholder="Type your email here…"
                            name="email"
                            onChange={this.changeemail}
                            value={this.state.email}
                          ></input>
                          <button type="submit" className="send_circle">
                            <IoIosSend className="send_icon" />
                          </button>
                        </form>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-12 calback_img_div">
                      <figure>
                        <img
                          className="callback_img"
                          src={call}
                          alt="callimg"
                        />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
              <div className="background_shapes">
                <div className="circle_back">
                  <p className="all_circle"></p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }
}
export default Home;
