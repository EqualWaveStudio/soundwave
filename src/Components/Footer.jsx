import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import '../index.css';
import LogoFacebook from '../assets/img/vector(2).png';
import LogoTwitter from '../assets/img/vector(1).png';

const Buttons = () => {
  return (
    <div className='Footer-container'>
      <div className="Footer-Left">
        <Link to="./discover" className="aboutus-button">About Us</Link>
        <Link to="/join" className="contact-button">Contact</Link>
      </div>
      </div>

    );
  };

    const Pages = () => {
      return (
        <div className='Footer-container'>
      <div className="Footer-Right">
      <img className="logoFacebook" src={ LogoFacebook } alt="LogoFacebook" />
        <Link to="https://twitter.com/?lang=es" className="rs-button">Twitter</Link>
        <img className="logoTwitter" src={ LogoTwitter } alt="LogoTwitter" />
        <Link to="https://es-es.facebook.com/" className="rs-button">Facebook</Link>
      </div>
      </div>

  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <Buttons />
      <Pages />
    </footer>
  );
};

export default Footer;
