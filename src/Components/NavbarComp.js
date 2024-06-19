import React, { useState } from "react";
// import { Link } from "react-router-dom";
import "./Navbar.css";
import { CodeIcon, HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";
import Logo from "../Assets/Abia_State_University_logo.svg.c7d43b43.e0f8335038396c9c6064.png"

function NavBarComp() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar z-20">
        <div className="nav-container">
          <a href="/" className="nav-logo gap-3 text-lg font-bold sm:text-xl">
            
            {/* <i className="fas fa-code"></i> */}
            <span className="icon">
              {/* <CodeIcon /> */}
              <img src={Logo}/>
            </span>
            <span>FACULTY REPOSITORY</span>
          </a>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <a
                // exact
                href="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                // exact
                href="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                // exact
                href="/blog"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a
                // exact
                href="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </a>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

            {click ? (
              <span className="icon">
                <HamburgetMenuClose />
               
              </span>
            ) : (
              <span className="icon">
                 <HamburgetMenuOpen />{" "}
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBarComp;