import { Link } from 'react-router-dom';
import React from 'react';
import './ButtonJoin.css';


const ButtonJoin = () => {
  return (
    <button className="join-now">
        <Link to="/join" className="join-button"> Join Now</Link>
    </button>
  );
};

export default ButtonJoin;
