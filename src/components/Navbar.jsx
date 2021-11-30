import React from "react";
// React Router
import { Link } from "react-router-dom";
// Icons
import { FaBars, FaTimes } from "react-icons/fa";
// Styles
import "./NavbarStyles.css";

const Navbar = () => {
  return (
    <>
      <header>
        <nav className="navbar">
          <div className="logo">
            <h1>Logo</h1>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
