import React from "react";
import { Link } from "react-scroll";
import "../css/Navbar.css";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link
            activeClass="active-link"
            to="home-section"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            activeClass="active-link"
            to="projects-section"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            My Projects
          </Link>
        </li>
        <li>
          <Link
            activeClass="active-link"
            to="about-section"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            activeClass="active-link"
            to="contact-section"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
