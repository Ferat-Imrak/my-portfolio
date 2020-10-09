import React from "react";
import "../assets/style/NavBar.css";
import WebImg from "../assets/images/web-developer.jpg";
import { Link } from "react-scroll";

const NavBar = () => {
  return (
    <div id="home-page">
      <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top">
        <div className="container-fluid active">
          <Link
            activeClass="active"
            to="home-page"
            spy={true}
            smooth={true}
            offset={-44}
            duration={500}
            className="navbar-brand logo"
          >
            <img src={WebImg} alt="Logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link
                  activeClass="active"
                  to="home-page"
                  spy={true}
                  smooth={true}
                  offset={-44}
                  duration={500}
                  className="nav-link"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="aboutme"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="nav-link"
                >
                  About Me
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="experties"
                  spy={true}
                  smooth={true}
                  offset={-44}
                  duration={500}
                  className="nav-link"
                >
                  My Expertises
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-75}
                  duration={500}
                  className="nav-link"
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-44}
                  duration={500}
                  className="nav-link"
                >
                  Contact Me
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
