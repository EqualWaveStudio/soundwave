import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import '../../index.css';
import logo from '../../assets/img/logo.png';

const Logo = () => {
  return (
    <Link to="/" className="logo-link">
    <div className="logo-container">
      <img className="logo" src={logo} alt="Logo" />
      <h1 className="logo-title">SoundWave</h1>
    </div>
    </Link>
  );
};

const Buttons = () => {
  return (
    <div className="button-container">
      <Link to="/discover" className="header-button">Discover</Link>
      <Link to="/join" className="header-button">Join</Link>
    </div>
  );
};

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <Buttons />
    </header>
  );
};

export default Header;
