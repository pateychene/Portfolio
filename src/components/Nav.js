import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Your Logo</div>
      <ul className="nav-list">
        <li className="nav-item">Home</li>
        <li className="nav-item">About</li>
        <li className="nav-item">Services</li>
        <li className="nav-item">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
