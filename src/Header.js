import React from 'react';
import logo from './images/logo.png';
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <figure className="logo-container">
          <img src={logo} alt="logo" className="logo" />
        </figure>
        <div className="nav-links">
          <p className="register">
          <Link to="/terms">Register</Link>
          </p>
          <p className="register">
          <Link to="/login">Sign </Link>
          </p>
        </div>
      </nav>
    </header>
  );
};

export default Header;
