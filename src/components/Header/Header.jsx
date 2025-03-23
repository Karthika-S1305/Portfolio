import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="header-portfolio">
        <p className="portfolio-text">Portfo<span>lio</span></p>
      </div>
      <nav className="header-fields">
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#education">Education</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
