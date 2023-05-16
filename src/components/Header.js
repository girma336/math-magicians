import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/Header.css';

const Header = () => (
  <div>
    <header className="header-logo">
      <div className="logo">
        Math Magicians
      </div>
      <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/calculator">Calculator</NavLink></li>
          <li><NavLink to="/quote">Quote</NavLink></li>
        </ul>
      </nav>
    </header>
  </div>
);

export default Header;
