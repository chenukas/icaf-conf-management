import React from "react";
import "./Navbar.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import DehazeIcon from '@material-ui/icons/Dehaze';

const Navbar = ({ toggle }) => {
  const logout = (e) => {
    localStorage.removeItem("logUserId");
    localStorage.removeItem("logUserName");
    window.location = '/'
  };

  return (
    <div className="nav">
      <div className="navbarContainer">
        <Link to="/" style={{ textDecoration: 'none'}}>
        <h3 className="navLogo">
          <img className="navLogoImg" src={logo} alt="logo" />
          &nbsp; ICAF
        </h3>
        </Link>
        <div className="mobileIcon">
          <DehazeIcon fontSize='large'  onClick={toggle}/>
        </div>
        <div className="navMenu">
          <div className="navItem"  href="#about">
            <p className="navLinks">
              About
            </p>
          </div>
          <div className="navItem">
            <Link to="/submission" style={{ textDecoration: 'none'}}>
            <p className="navLinks" to="">
              Submissions
            </p>
            </Link>
          </div>
          <div className="navItem">
          <Link to="/download" style={{ textDecoration: 'none'}}>
            <p className="navLinks" to="">
              Downloads
            </p>
          </Link>
          </div>
          <div className="navItem">
            <Link
              style={{ textDecoration: "none" }}
              to="/register"
            >
              <p className="navLinks">Sign Up</p>
            </Link>
          </div>
          <div className="navItem">
          {localStorage.getItem("logUserId") == null ? (
            <Link
              className="navBtn"
              style={{ textDecoration: "none" }}
              to="/login"
            >
              Sign In
            </Link>) : (<Link
              className="navBtn"
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => logout()}
            >
              Sign Out
            </Link>) }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
