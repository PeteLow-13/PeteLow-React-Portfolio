import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./style.css";

function Navbar() {
  const location = useLocation();
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/HomePage"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              About Me
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className={window.location.pathname === "/Contact" ? "nav-link active" : "nav-link"}
            >
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/portfolio"
              className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
            >
              Portfolio
            </Link>
          </li>
        </ul>
    </nav>
  );
}

export default Navbar;
