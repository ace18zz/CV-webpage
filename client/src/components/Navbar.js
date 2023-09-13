import React from "react";
import { NavLink  } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <li>
        <NavLink to="/" end activeClassName="active-link">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" activeClassName="active-link">
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" activeClassName="active-link">
          About
        </NavLink>
      </li>
    </nav>
  );
}

export default Navbar;
