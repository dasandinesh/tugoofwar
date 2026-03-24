import React, { useState, useEffect } from "react";
import "./Hero.css";

import img1 from "../components/images/1.jpg";
import img2 from "../components/images/2.jpg";
import img3 from "../components/images/3.jpg";
import img4 from "../components/images/4.jpg";
import img5 from "../components/images/5.jpg";

const Hero = () => {
  const images = [img1, img2, img3, img4, img5];
  const [currentIndex, setCurrentIndex] = useState(0);

  // 🔥 Stable Auto Slide (no re-render issue)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <section className="hero-container">
      <div className="slider-wrapper">

        <img
          src={images[currentIndex]}
          alt="slider"
          className="hero-image"
        />

        {/* 🔥 Overlay Content */}
        <div className="hero-overlay">
          <h1>TUG OF WAR 2026</h1>
          <p>Strength • Unity • Victory 💪</p>
        </div>

        {/* Arrows */}
        <button className="slider-btn prev" onClick={prevSlide}>‹</button>
        <button className="slider-btn next" onClick={nextSlide}>›</button>

        {/* Dots */}
        <div className="dots">
          {images.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(i)}
            ></span>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Hero;