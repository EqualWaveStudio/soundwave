import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import '../../index.css';
import LogoFacebook from '../../assets/img/vector(2).png';
import LogoTwitter from '../../assets/img/vector(1).png';

const Buttons = () => {
  return (

    <div className="Footer-Left">
      <Link to="./discover" className="t-button hover-t-buttons">About Us</Link>
      <Link to="./join" className="t-button hover-t-buttons">Contact</Link>
    </div>


  );
};

const Pages = () => {
  return (

    <div className='Footer-Right'>
      <div className='twitter'>
        <img className="logoRs" src={LogoTwitter} alt="LogoTwitter" />
        <Link to="https://twitter.com/?lang=es/" className="rs-button">Twitter</Link>
      </div>
      <div className='facebook'>
        <img className="logoRs" src={LogoFacebook} alt="LogoFacebook" />
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
