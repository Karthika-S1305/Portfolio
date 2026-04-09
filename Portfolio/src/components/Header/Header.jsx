import React, { useEffect, useState } from "react";
import "./Header.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={isScrolled ? "scrolled" : ""}>
      <div className="header-portfolio">
        <p className="portfolio-text">
          Portfo<span>lio</span>
        </p>
      </div>
      <nav className="header-fields">
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#education">Education</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
