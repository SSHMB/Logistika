import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <a href="#" className="logo">
        <div className="logo-icon">
          <svg viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="2" width="5" height="5" rx="1"/>
            <rect x="9" y="2" width="5" height="5" rx="1"/>
            <rect x="2" y="9" width="5" height="5" rx="1"/>
            <rect x="9" y="9" width="5" height="5" rx="1"/>
          </svg>
        </div>
        <span className="logo-text">amid.</span>
      </a>

      {/* Nav havolalar */}
      <ul className="nav-links">
        <li><a href="#" className="active">About amid</a></li>
        <li><a href="#">Features</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Reviews</a></li>
      </ul>

      {/* Login tugmasi */}
      <button className="btn-login">Login</button>
    </nav>
  );
};

export default Navbar;