import React from "react";
// React Router
import { Link } from "react-router-dom";
// Logo
import Logo from "../assets/logo.png";
// Icons
import { FaBars, FaTimes } from "react-icons/fa";
// Styles
import "./NavbarStyles.css";

const Navbar = () => {
  return (
    <>
      <header className="header">
        <nav className="navbar">
          <div className="logo">
            <Link to="/">
              <img className="nav-img" src={Logo} alt="logo" />
            </Link>
          </div>
          <ul className="nav-menu">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                FAQ
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Contact
              </Link>
            </li>
          </ul>
          <div className="hamburger">
            <FaBars style={{color: "ffffff"}} />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
