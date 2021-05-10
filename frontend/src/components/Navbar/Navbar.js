import React from "react";
import "./Navbar.css";
import logo from "../../images/logo.png";

const Navbar = ({ toggle }) => {
  return (
    <div className="nav">
      <div className="navbarContainer">
        <h3 to="/" className="navLogo">
          <img className="navLogoImg" src={logo} alt="logo" />
          ICAF
        </h3>
        <div className="mobileIcon" onClick={toggle}>
          <p className="faBars"></p>
        </div>
        <div className="navMenu">
          <div className="navItem">
            <p className="navLinks" to="">
              About
            </p>
          </div>
          <div className="navItem">
            <p className="navLinks" to="">
              Discover
            </p>
          </div>
          <div className="navItem">
            <p className="navLinks" to="">
              Services
            </p>
          </div>
          <div className="navItem">
            <p className="navLinks" to="">
              Sign Up
            </p>
          </div>
          <div className="navBtn">
            <p className="navBtnLink" to="">
              Sign In
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
