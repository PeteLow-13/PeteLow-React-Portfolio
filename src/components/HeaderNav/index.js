import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Container from '../Container';
import "./style.css";

function HeaderNav() {
  const location = useLocation();
  
  return (
    <Container>
    <nav className="navbar navbar-expand-lg navbar-light">
      <Link className="navbar-brand" to="/">
          Pete Low
      </Link>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link  
            to="/"
            className={
              window.location.pathname === "/" || window.location.pathname === "/HomePage"
                ? "nav-link active"
                : "nav-link"}
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
    </Container>
  );
}

export default HeaderNav;
