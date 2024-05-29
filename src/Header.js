import React from 'react';
import images from './ImageLoader';

const Header = () => {
  return (
    <header>
      <nav>
        <figure>
        <img src={require('./images/logo.png')} alt="logo" style={{ width: '500px', margin: '10px' }} />
        </figure>
        <p><a href="">Login</a></p>
        <p><a href="">Get Started</a></p>
      </nav>
    </header>
  )
}

export default Header;
