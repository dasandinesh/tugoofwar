import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Navbar.css";
import logo from "../components/images/logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`site-header shadow-lg  ${scrolled ? 'scrolled' : ''}`}>
      {/* --- TOP BAR (Logo, Title, Phone) --- */}
      <div className="bg-white py-3 border-bottom border-3 border-warning">
        <div className="container">
          <div className="row align-items-center">

            {/* LOGO */}
            <div className="col-3 col-md-3 d-flex justify-content-start justify-content-md-start align-items-center">
              <div className="logo-wrapper p-1 rounded-circle border border-2 border-primary shadow-sm">
                <img
                  src={logo}
                  alt="Championship Logo"
                  className="rounded-circle logo-img-custom"
                />
              </div>
            </div>

            {/* MAIN TITLE */}
            <div className="col-9 col-md-6 text-center text-md-center">
              <h1 className="fw-black text-danger mb-0 display-6 tracking-tight italic-font main-title">
                TUG OF <span className="text-dark">WAR 2026</span>
              </h1>
              <p className="text-primary fw-bold small text-uppercase mb-0 tracking-widest sub-title">
                Tenkasi District Level Grand Championship
              </p>
              <div className="badge bg-warning text-dark mt-1 px-3 py-1 fw-bold">
                வலிமை • ஒற்றுமை • வெற்றி 💪
              </div>
            </div>

            {/* CONTACT DETAILS */}
            <div className="col-12 col-md-3 text-center text-md-end mt-3 mt-md-0 contact-box">
              <span className="text-muted small fw-bold text-uppercase d-block mb-1">
                Official Contact
              </span>
              <h5 className="fw-bold text-primary mb-0 contact-number">
                📞 +91 80720 74098
              </h5>
              <p className="small fw-bold text-danger mb-0">
                Secretary: S.A. PRABAKARAN
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* --- MAIN MENU (Dark Navigation) --- */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-0 border-bottom border-4 border-primary">
        <div className="container">
          <span className="navbar-brand d-lg-none fw-bold text-warning small text-uppercase">
            Championship Menu
          </span>

          <button
            className="navbar-toggler my-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainMenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mainMenu">
            <ul className="navbar-nav mx-auto w-100 justify-content-between text-center">
              <li className="nav-item border-end border-secondary flex-grow-1">
                <a className="nav-link active text-warning fw-bold py-3 text-uppercase" href="./">
                  Home
                </a>
              </li>
              <li className="nav-item border-end border-secondary flex-grow-1">
                <a className="nav-link text-white fw-bold py-3 text-uppercase" href="./gallery">
                  Gallery
                </a>
              </li>
              <li className="nav-item border-end border-secondary flex-grow-1">
                <a className="nav-link text-white fw-bold py-3 text-uppercase" href="./prizes">
                  Prize List
                </a>
              </li>
              <li className="nav-item border-end border-secondary flex-grow-1">
                <a className="nav-link text-white fw-bold py-3 text-uppercase" href="./contact">
                  About Committee
                </a>
              </li>
              <li className="nav-item border-end border-secondary flex-grow-1">
                <a className="nav-link text-white fw-bold py-3 text-uppercase" href="./register">
                  Register Now
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;