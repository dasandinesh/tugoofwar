
import React, { useState, useEffect } from "react";
import "./Hero.css";

// Importing images
import img1 from "./images/1.jpg";
import img2 from "./images/2.jpg";
import img3 from "./images/3.jpg";
import img4 from "./images/4.jpg";
import img5 from "./images/5.jpg";
import PrizeSection from "./prizesection";
// import Home from "../components/home";


// ✅ CRITICAL: Move the array OUTSIDE the component. 
// This prevents the "exhaustive-deps" warning/error on Netlify.
const images = [img1, img2, img3, img4, img5];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Stable Auto Slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, []); // Empty array is now safe because 'images' is defined outside

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
    <>
    <section className="hero-container">
   
      <div className="slider-wrapper">
        <img
          src={images[currentIndex]}
          alt={`Tug of War Slide ${currentIndex + 1}`}
          className="hero-image"
        />

        {/* Overlay Content */}
        <div className="hero-overlay">
          <h1>TUG OF WAR 2026</h1>
          <p>Strength • Unity • Victory 💪</p>
        </div>

        {/* Navigation Arrows */}
        <button className="slider-btn prev" onClick={prevSlide} aria-label="Previous Slide">
          ‹
        </button>
        <button className="slider-btn next" onClick={nextSlide} aria-label="Next Slide">
          ›
        </button>

        {/* Navigation Dots */}
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
      <PrizeSection />
    </section>

    </>
  );
};

export default Hero;