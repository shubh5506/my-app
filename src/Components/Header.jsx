import React, { useState } from "react";
import Logo from '../Images/shubhamlogo-1.png';

export default function Header() {
  const [mobileNavActive, setMobileNavActive] = useState(false);

  const handleMobileNavToggle = () => {
    setMobileNavActive(!mobileNavActive);
  };

  const handleNavItemClick = () => {
    setMobileNavActive(false);
  };

  return (
    <header className={`fixed-top ${mobileNavActive ? 'navbar-mobile active' : ''}`}>
      <div className="container">
        <nav id="navbar" className={`navbar ${mobileNavActive ? 'active' : ''}`}>
          <ul>
            <li className="logo">
              <img src={Logo} alt="My Image Description" />
            </li>
            <li>
              <a href="#hero" onClick={handleNavItemClick}>Home</a>
            </li>
            <li>
              <a href="#about" onClick={handleNavItemClick}>About</a>
            </li>
            <li>
              <a href="#experiences" onClick={handleNavItemClick}>Experience</a>
            </li>
            <li>
              <a href="#contact" onClick={handleNavItemClick}>Contact</a>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle" onClick={handleMobileNavToggle}></i>
        </nav>
      </div>
    </header>
  );
}
