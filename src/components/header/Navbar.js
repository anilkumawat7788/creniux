import React, { useState, useEffect } from "react";
// import { Button } from './Button';
import { Link } from "react-router-dom";
import logo from '../../images/logo.png'
import "./navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img className="logo_img" src={logo} alt=""/>
            
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links " onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about"  className="nav-links" onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/service"  className="nav-links" onClick={closeMobileMenu}>
              Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/product"  className="nav-links" onClick={closeMobileMenu}>
              Products
              </Link>
            </li>
            {/* <li className="dropdown nav-item">
              <Link
                to="/service"
                onClick={closeMobileMenu}
                className="dropdown_color dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Services
              </Link>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <Link
                  to="/service"
                  onClick={closeMobileMenu}
                  class="dropdown-item"
                >
                  Internet Of Things
                </Link>
                <Link to="/service" onClick={closeMobileMenu} className="dropdown-item">
                Cloud Service & Infrastructure
                </Link>
                <Link to="/service" onClick={closeMobileMenu} className="dropdown-item">
                Training & Consultancy
                </Link>
                <Link to="/service" onClick={closeMobileMenu} className="dropdown-item">
                Mobile App Development
                </Link>
                <Link to="/service" onClick={closeMobileMenu} className="dropdown-item">
                Product Innovation
                </Link>
                <Link to="/service" onClick={closeMobileMenu} className="dropdown-item">
                Enterprise & Digital Transformation
                </Link>
                <Link to="/service" onClick={closeMobileMenu} className="dropdown-item">
                Software Services
                </Link>
                <Link to="/service" onClick={closeMobileMenu} className="dropdown-item">
                Business Intelligence & Analytics
                </Link>
                <Link to="/service" onClick={closeMobileMenu} className="dropdown-item">
                Data Recovery & Management
                </Link>
                <Link to="/service" onClick={closeMobileMenu} className="dropdown-item">
                ERP Solutions
                </Link>
                
              </div>
            </li>
            <li className="dropdown nav-item">
              <Link
                to="/product"
                onClick={closeMobileMenu}
                className="dropdown_color dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Products
              </Link>
              <div className="dropdown-menu " aria-labelledby="dropdownMenuButton">
                <Link
                  to="/product"
                  onClick={closeMobileMenu}
                  className="dropdown-item"
                >
                 Lead Generation Software
                </Link>
                <Link to="/product" onClick={closeMobileMenu} className="dropdown-item">
                Digital Advertising Boards
                </Link>
                <Link to="/product" onClick={closeMobileMenu} className="dropdown-item">
                E2eHiring
                </Link>
                <Link
                  to="/product"
                  onClick={closeMobileMenu}
                  className="dropdown-item"
                >
                 EzeNotes
                </Link>
                <Link to="/product" onClick={closeMobileMenu} className="dropdown-item">
                E2eTransuite
                </Link>
                <Link to="/product" onClick={closeMobileMenu} className="dropdown-item">
                Convo
                </Link>
              </div>
            </li>
            */}
            <li className="nav-item">
              <Link to="/blog" className="nav-links" onClick={closeMobileMenu}>
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/career"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Careers
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
          {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
