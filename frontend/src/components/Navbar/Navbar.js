import React from "react";
import "./Navbar.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

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
            <Link className="navLinks" style={{textDecoration:"none"}} to="/register">
              Sign Up
            </Link>
          </div>
          <div className="navBtn">
            <a className="navBtnLink" href="/login" style={{textDecoration:"none", marginBottom:20}}>
              Sign In
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
