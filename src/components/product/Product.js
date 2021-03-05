import React from "react";
import { Helmet } from "react-helmet";
import "./product.css";
import { NavLink } from "react-router-dom";
import product1 from "../../images/product1.png";
import product2 from "../../images/product2.png";
import product3 from "../../images/product3.png";
import product4 from "../../images/product4.png";

const Product = () => {
  return (
    <>
      <Helmet>
        <title>Products | Creniux</title>
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
        <div className="container-fluid product_top_section">
          <div className="row">
            <div className="col-md-10 col-lg-10 col-sm-10 col-12 mx-auto product_top_heading">
              <h1>Products</h1>
            </div>
          </div>
        </div>
      </section>

      <div className="container-fluid blue-bg">
        <div className="container">
          <h2 className="indroducting_heading">Introducing Our Products</h2>
          {/* first section */}
          <div className="row align-items-center how-it-works">
            <div className="col-2 text-center bottom">
              <div className="circle">1</div>
            </div>
            <div className="col-6 all_product_headings">
              <h5>Lead Management Software</h5>
              <div className="box_products">
                <figure>
                  <img src={product1} className="product_img_box" alt="" />
                </figure>
                <div className="all_product_services_box">
                  {/* <span className="dot"></span> */}
                  <h3>Lead Management Software</h3>
                  <p>
                    “One software to collect and manage your leads effectively”
                  </p>
                  <NavLink to="/service" className="btn_product_read">
                    Read More
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          {/* <!--path between 1-2--> */}
          <div className="row timeline">
            <div className="col-2">
              <div className="corner top-right"></div>
            </div>
            <div className="col-8">
              <hr />
            </div>
            <div className="col-2">
              <div className="corner left-bottom"></div>
            </div>
          </div>
          {/* <!--second section--> */}
          <div className="row align-items-center justify-content-end how-it-works">
            <div className="col-6 text-right all_product_headings">
              <h5>Digital Advertising Board</h5>
              <div className="box_products2">
                <figure>
                  <img src={product2} className="product_img_box2" alt="" />
                </figure>
                <div className="all_product_services_box2">
                  <h3>Digital Advertising Board </h3>
                  <p>
                    “Digitize your ad campaigns through our digital advertising
                    soluions”
                  </p>
                  <NavLink to="/service" className="btn_product_read1">
                    Read More
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-2 text-center full">
              <div className="circle">2</div>
            </div>
          </div>
          {/* <!--path between 2-3--> */}
          <div className="row timeline">
            <div className="col-2">
              <div className="corner right-bottom"></div>
            </div>
            <div className="col-8">
              <hr />
            </div>
            <div className="col-2">
              <div className="corner top-left"></div>
            </div>
          </div>
          {/* <!--third section--> */}
          <div className="row align-items-center how-it-works">
            <div className="col-2 text-center full">
              <div className="circle">3</div>
            </div>
            <div className="col-6 all_product_headings">
              <h5>Online Assessment Tool</h5>
              <div className="box_products">
                <figure>
                  <img src={product3} className="product_img_box" alt="" />
                </figure>
                <div className="all_product_services_box3">
                  <h3>Online Assessment Tool</h3>
                  <p>“Software to conduct and evaluate assessments online”</p>
                  <NavLink to="/service" className="btn_product_read">
                    Read More
                  </NavLink>
                </div>
              </div>
            </div>
          </div>

          {/* <!--path between 3-4--> */}
          <div className="row timeline">
            <div className="col-2">
              <div className="corner top-right"></div>
            </div>
            <div className="col-8">
              <hr />
            </div>
            <div className="col-2">
              <div className="corner left-bottom"></div>
            </div>
          </div>
          {/* <!--fourth section--> */}
          <div className="row align-items-center justify-content-end how-it-works">
            <div className="col-6 text-right all_product_headings">
              <h5>ERP Solutions</h5>
              <div className="box_products2">
                <figure>
                  <img src={product4} className="product_img_box2" alt="" />
                </figure>
                <div className="all_product_services_box4">
                  <h3>ERP Solutions</h3>
                  <p> "One solution one platform for Growing Business"</p>
                  <NavLink to="/service" className="btn_product_read1">
                    Read More
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-2 text-center full">
              <div className="circle">4</div>
            </div>
          </div>
          {/* <!--path between 4-5--> */}
          <div className="row timeline">
            <div className="col-2">
              <div className="corner right-bottom"></div>
            </div>
            <div className="col-8">
              <hr />
            </div>
            <div className="col-2">
              <div className="corner top-left"></div>
            </div>
          </div>

          {/* <div className="row align-items-center how-it-works">
            <div className="col-2 text-center full">
              <div className="circle">5</div>
            </div>
            <div className="col-6 all_product_headings">
              <h5>Digital Ad Boards</h5>
              <div className="box_products">
                <figure>
                
                  <img src={product5} className="product_img_box" alt="" />
                </figure>
                <div className="all_product_services_box5">
                
                  <h3>Digital ad boards</h3>
                  <p>"one stop for generation and collecting leads"</p>
                  <NavLink to="/service" className="btn_product_read">Read More</NavLink>
                </div>
              </div>
            </div>
          </div> */}

          {/* <!--path between 3-4--> */}
          {/* <div className="row timeline">
            <div className="col-2">
              <div className="corner top-right"></div>
            </div>
            <div className="col-8">
              <hr />
            </div>
            <div className="col-2">
              <div className="corner left-bottom"></div>
            </div>
          </div> */}
          {/* <!--second section--> */}
          {/* <div className="row align-items-center justify-content-end how-it-works">
            <div className="col-6 text-right all_product_headings">
              <h5>ERP Tool</h5>
              <div className="box_products2">
                <figure>
                 
                  <img src={product2} className="product_img_box2" alt="" />
                </figure>
                <div className="all_product_services_box6">
                  
                  <h3>ERP tool</h3>
                  <p>"Excellent way of conveying information visually"</p>
                  <NavLink to="/service" className="btn_product_read1">Read More</NavLink>
                </div>
              </div>
            </div>
            <div className="col-2 text-center full">
              <div className="circle">6</div>
            </div>
          </div> */}
          {/* <!--path between 2-3--> */}
          {/* <div className="row timeline">
            <div className="col-2">
              <div className="corner right-bottom"></div>
            </div>
            <div className="col-8">
              <hr />
            </div>
            <div className="col-2">
              <div className="corner top-left"></div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};
export default Product;
