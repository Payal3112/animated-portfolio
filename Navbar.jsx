import React from 'react';

import './Navbar.css';

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav className="navbar glass">
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
        <li>
          <button
            className="toggle-button"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? '🌞 Light' : '🌙 Dark'}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
