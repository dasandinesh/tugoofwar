import React from "react";
import "./EventCard.css";
import { Link } from "react-router-dom";

const EventCard = ({ date, location }) => {
  return (
    <div className="card-box">

      <h3 className="card-title">Register Now</h3>

      <div className="date-display">{date}</div>

      <div className="location">{location}</div>

      {/* 🔥 LINK BUTTON */}
      <Link to="/register" className="register-link">
        Join Event
      </Link>

    </div>
  );
};

export default EventCard;