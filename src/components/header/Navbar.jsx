import React from "react";
import classes from "./css/Navbar.module.css";
import logoBcr from "./img/logo.png";
import Button from "../UI/ButtonLogin";

const Navbar = (props) => {
  return (
    <nav
      className="navbar navbar-expand-lg" // fixed-top
      aria-label="Offcanvas navbar large"
    >
      <div className="container px-lg-5 my-2">
        <a href="/">
          <img src={logoBcr} alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar2"
          aria-controls="offcanvasNavbar2"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar2"
          aria-labelledby="offcanvasNavbar2Label"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbar2Label">
              BCR
            </h5>
            <button
              type="button"
              className="btn-close btn-close-black"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav ms-auto">
              <li className={classes.navItem}>
                <a
                  className={classes.navLink}
                  aria-current="page"
                  href="#ourService"
                >
                  Our Services
                </a>
              </li>
              <li className={classes.navItem}>
                <a className={classes.navLink} href="#whyUs">
                  Why Us
                </a>
              </li>
              <li className={classes.navItem}>
                <a className={classes.navLink} href="#testimonial">
                  Testimonial
                </a>
              </li>
              <li className={classes.navItem}>
                <a className={classes.navLink} href="#faq">
                  FAQ
                </a>
              </li>
              <li className="nav-item ms-2">
                <Button>Register</Button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
