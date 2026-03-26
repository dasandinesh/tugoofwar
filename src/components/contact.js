import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact-container" id="contact">
      <div className="contact-content">
        <h2 className="section-title">About Our Committee</h2>
        
        {/* Office Bearers Cards */}
        <div className="team-grid">
          <div className="team-card">
            <div className="icon">🥇</div>
            <h3>K. BLESSY</h3>
            <p className="role">President</p>
          </div>

          <div className="team-card highlight">
            <div className="icon">📩</div>
            <h3>S.A. PRABAKARAN</h3>
            <p className="role">Secretary</p>
            <p className="phone">📞 8072074098</p>
            <p className="phone">📞 843 842 841 4</p>
          </div>

          <div className="team-card">
            <div className="icon">💰</div>
            <h3>NIRMAL</h3>
            <p className="role">Treasurer</p>
          </div>
        </div>

        {/* Address Section */}
        <div className="address-box">
          <h3>📍 Registered Office</h3>
          <p>13/37 Patel Street</p>
          <p>Alangulam, Tenkasi District</p>
          <p>Tamil Nadu - 627 851</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;