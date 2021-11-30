import React, { useState } from "react";
// React Router
import { Link } from "react-router-dom";
// Logo
import Logo from "../assets/logo.jpg";
// Icons
import { FaBars, FaTimes } from "react-icons/fa";
// Styles
import "./NavbarStyles.css";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <>
      <header className="header">
        <nav className="navbar">
          <div className="logo">
            <Link to="/">
              <img className="nav-img" src={Logo} alt="logo" />
            </Link>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
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
          <div className="hamburger" onClick={handleClick}>
            {click ? (
              <FaTimes
                size={20}
                style={{ color: "#ffffff", cursor: "pointer" }}
              />
            ) : (
              <FaBars
                size={30}
                style={{ color: "#ffffff", cursor: "pointer" }}
              />
            )}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
