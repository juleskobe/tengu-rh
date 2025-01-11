
import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="logo">
        <img src="/assets/images/logo.png" alt="TËNGU RH Logo" />
      </div>
      <nav>
        <ul>
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/about" 
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              À Propos
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/services" 
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/testimonials" 
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Testimonials
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/statistics" 
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Statistics
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;



/*
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="logo">
        <img src="/assets/images/logo.png" alt="TËNGU RH Logo" />
      </div>
      <nav>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/about">À Propos</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

*/







/*
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/about">À Propos</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/testimonials">Témoignages</Link></li>
        <li><Link to="/stats">Nos Chiffres</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Header;

*/



/*
import React from "react";

function Header() {
  return (
    <header>
      <div className="logo">
        <img src="/assets/images/logo.png" alt="TËNGU RH Logo" />
      </div>
      <nav>
        <ul>
          <li><a href="#home">Accueil</a></li>
          <li><a href="#about">À Propos</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#testimonials">Témoignages</a></li>
          <li><a href="#statistics">Nos Chiffres</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

*/