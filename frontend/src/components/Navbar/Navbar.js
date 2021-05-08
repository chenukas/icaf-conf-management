import React from 'react';
import './Navbar.css';

const Navbar = ({toggle}) => {
    return (
        <div className="nav">
            <div className="navbarContainer">
                <h3 to="/" className="navLogo">ICAF</h3>
                <div className="mobileIcon" onClick={toggle}>
                    <h1 className="faBars"/>
                </div>
                <div className="navMenu">
                    <div className="navItem">
                        <p className="navLinks">About</p>
                    </div>
                    <div className="navItem">
                        <p className="navLinks">Discover</p>
                    </div>
                    <div className="navItem">
                        <p className="navLinks">Services</p>
                    </div>
                    <div className="navItem">
                        <p className="navLinks">Sign Up</p>
                    </div>
                    <div className="navBtn">
                        <p className="navBtnLink">Sign In</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
