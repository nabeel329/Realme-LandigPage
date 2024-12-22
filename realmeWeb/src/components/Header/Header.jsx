// Header.js
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header-left">
          <span className="brand-name">realme</span>
          <nav className="nav-links">
            <a href="#">realSmartphone</a>
            <a href="#">narzo Smartphones</a>
            <a href="#">Audio Accessories</a>
          </nav>
        </div>
        <div className="header-right">
          <a href="#">Brand Support</a>
          <a href="#">Community</a>
        </div>
      </header>
      <div className="main-content">
        <img 
          src="RealmeC75(2).jpg" 
          alt="Center Image" 
          className="center-image"
        />
      </div>
    </>
  );
};

export default Header;
