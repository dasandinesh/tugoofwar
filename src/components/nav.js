import React from "react";
import "./Navbar.css";
import logo from "../components/images/logo.png";

const Navbar = () => {
  return (
    <header className="site-header">

      {/* 🔥 TOP BAR */}
      <div className="top-bar">
        <div className="logo-section">
          <div className="logo-circle"><img src={logo} alt="" /></div>
        </div>

        <div className="title-box">
          <h1>TUGO OF WAR</h1>
          <span>Tenkasi District Championship</span>
        </div>

        <div className="contact-details">
          <p>📞 +91 9621XXXXXX</p>
          <p>Ambai Road</p>
          <p>Alagankulam</p>
          <p>Tenkasi</p>
          <p>Tamil Nadu</p>
        </div>
      </div>

      {/* 🔥 MENU BAR */}
      <nav className="main-nav">
        <ul>
          <li to="/hero" className="active">Home</li>
          <li>Events</li>
          <li>Teams</li>
          <li>Gallery</li>
          <li>Contact</li>
        </ul>
      </nav>

    </header>
  );
};

export default Navbar;