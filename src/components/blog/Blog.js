import React from "react";
import { Helmet } from "react-helmet";
import "./blog.css";
import { NavLink } from "react-router-dom";
import p12 from "../../images/p12.png";
import p25 from "../../images/p25.png";
import p14 from "../../images/p14.png";
import p13 from "../../images/p13.png";
import p15 from "../../images/p15.jpg";
const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Blog | Creniux</title>
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
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-10 col-lg-10 col-sm-10 col-12 mx-auto blog_top_heading blog_top_section">
              <h1>Blog</h1>
              {/* <div className="navlink_homeandcontact">
                <NavLink className="home_and_blog" to="/">
                  <p>
                    Home <span className="mx-2">&gt;</span>
                  </p>
                </NavLink>
                <NavLink className="home_and_blog" to="/blog">
                  <p> Blog</p>
                </NavLink>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      {/* second blog post section start here */}
      <section>
        <div className="container-fluid second_top_blog">
          <div className="row">
            <div className="col-md-10 col-lg-10 col-sm-10 col-12 mx-auto">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="all_blog_latest">
                    <h1>Creniux Blog</h1>
                    <p>
                      Explore this place for great articles and posts of Tech
                      and Business
                    </p>
                    <NavLink to="/product" className="explore_more_blog">
                      Explore More
                    </NavLink>

                    <h1>Technology Consultation</h1>
                    <p>
                      Raise your business to next level with ground breaking
                      strategy, Latest technologies and expert advisory.
                    </p>
                    <NavLink to="/contact" className="explore_more_blog">
                      Contact Us
                    </NavLink>
                    <h1>Love Creniux ? Join Us</h1>
                    <p>
                      Join our innovative, dedicated and passionate team. Build
                      the future of technology.
                    </p>
                    <NavLink to="/career" className="explore_more_blog">
                      Jobs
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                  <figure>
                    <img className="blog_img_techno" src={p12} alt="" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* all blog videos here */}
      <section className="blog_video_section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-10 col-lg-10 col-sm-10 col-12 mx-auto welcome_blog">
              <h1>
                <strong>Welcome To Creniux Blog</strong>
              </h1>
              <p>
                You'll find the following on this blog:
                <br />
                Latest articles on Technology and IT Business
                <br />
                Office Updates, Job Openings
                <br />
                And much more..
              </p>
              <div className="row">
                <div className="col-lg-4 col-md-4 col-12 mx-auto my-3">
                  <div className="blog_video_box">
                    <img className="blog_bottom_img" src={p13} alt="" />
                    <h1>REACT VS ANGULAR WHICH ONE TO CHOOSE?</h1>
                    <p>
                      Angular is a framework for building dynamic web apps.
                      React is a Js library used for building ui components.
                    </p>
                    {/* <NavLink to="/readmoreblog" className="read_more">
                      Read More
                    </NavLink> */}
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-12 mx-auto my-3">
                  <div className="blog_video_box">
                    <img className="blog_bottom_img" src={p14} alt="" />
                    <h1>E-COMMERCE DEVELOPMENT AT RPLTECHNO</h1>
                    <p>
                      Our e-commerce development solution delivers an effective
                      and comprehensive e-business strategy and marketing hacks.
                    </p>
                    {/* <NavLink to="/readmoreblog" className="read_more">
                      Read More
                    </NavLink> */}
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-12 mx-auto my-3">
                  <div className="blog_video_box">
                    <img className="blog_bottom_img2" src={p15} alt="" />
                    <h1>MECHINE LEARNING FOR A PRODUCT DEVELOPMENT</h1>
                    <p>
                      ML is turning the data evaluation into a tranformable and
                      more efficient technology.
                    </p>
                    {/* <NavLink to="/readmoreblog" className="read_more">
                      Read More
                    </NavLink> */}
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-12 mx-auto my-3">
                  <div className="blog_video_box">
                    <img className="blog_bottom_img" src={p14} alt="" />
                    <h1>AI-PROMISE OR HYPE ?</h1>
                    <p>
                      AI and ML are set to tranform future of digital world. Be
                      it any sector AI is booming like a star with its
                      extra-ordinary vide variety of solutions.
                    </p>
                    {/* <NavLink to="/readmoreblog" className="read_more">
                      Read More
                    </NavLink> */}
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-12 mx-auto my-3">
                  <div className="blog_video_box">
                    <img className="blog_bottom_img2" src={p15} alt="" />
                    <h1>THINGS TO ASK YOURSELF BEFORE DEVELOPNIG AN APP</h1>
                    <p>
                      Should i outsource app development or do it inhouse ? How
                      to market the app to set it for success ?
                    </p>
                    {/* <NavLink to="/readmoreblog" className="read_more">
                      Read More
                    </NavLink> */}
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-12 mx-auto my-3">
                  <div className="blog_video_box">
                    <img className="blog_bottom_img" src={p14} alt="" />
                    <h1>AN OVERVIEW OF AI/ML</h1>
                    <p>
                      AI is a field that focus on building smart machines that
                      can perform tasks which typically requires human
                      intelligence.ML empowers machines with ability to learn.
                    </p>
                    {/* <NavLink to="/readmoreblog" className="read_more">
                      Read More
                    </NavLink> */}
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
export default Blog;
