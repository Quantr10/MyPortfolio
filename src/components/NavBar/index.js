import React, { useState } from "react";
import "./index.css";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <section className="navbar">
      {isOpen && <div className="nav-overlay" onClick={closeMenu}></div>}

      <div className="navbar-icon" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      <div className={`navbar-links ${isOpen ? "active" : ""}`}>
        <a href="#" data-hover="home" onClick={closeMenu}>
          <span className="nav-text">home</span>
        </a>
        <a href="#about" data-hover="about" onClick={closeMenu}>
          <span className="nav-text">about</span>
        </a>
        <a href="#experience" data-hover="experience" onClick={closeMenu}>
          <span className="nav-text">experience</span>
        </a>
        <a href="#projects" data-hover="projects" onClick={closeMenu}>
          <span className="nav-text">projects</span>
        </a>
        <a href="#skills" data-hover="skills" onClick={closeMenu}>
          <span className="nav-text">skills</span>
        </a>
      </div>
    </section>
  );
};

export default NavBar;
