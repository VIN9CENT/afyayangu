import React from 'react';
import logo from './images/logo.png';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <figure className="logo-container">
          <img src={logo} alt="logo" className="logo" />
        </figure>
        <div className="nav-links">
          <p className="sign">
            <a href="/signin">Sign In</a>
          </p>
          <p className="register">
            <a href="/register">Register</a>
          </p>
        </div>
      </nav>
    </header>
  );
};

export default Header;
