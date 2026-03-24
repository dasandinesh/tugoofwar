import React from "react";
import "./home.css";
import Hero from "./Hero";
import EventCard from "./Eventcard";

function Home() {
  return (
    <div className="home-container">

      <Hero />

      <h2 className="cta-heading">
        We are here to make you strong 💪
      </h2>

      <p className="sub-text">
        Join the ultimate Tug of War competition
      </p>

      <div className="grid-layout">
        <EventCard date="March 28" location="Tenkasi" />
      </div>

    </div>
  );
}

export default Home;