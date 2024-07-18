import React, { useState } from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const handleClick=()=>{
    navigate('/');
  }

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="navbar-logo" onClick={handleClick}>DSA Tracker</span>
      </div>
      <div className="navbar-right">
        <ul>
          <li>About</li>
          <li>Contact</li>
          <li>Sign Up</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
