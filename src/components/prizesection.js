import React from "react";
import "./prizessection.css";

const PrizeSection = () => {
  const prizeData = [
    { pos: "🥇 1st Prize", men: "₹50,000 + Trophy", women: "₹50,000 + Trophy" },
    { pos: "🥈 2nd Prize", men: "₹30,000 + Trophy", women: "₹30,000 + Trophy" },
    { pos: "🥉 3rd Prize", men: "₹15,000 + Trophy", women: "₹15,000 + Trophy" },
    { pos: "🏅 4th Prize", men: "₹7,000 + Shield", women: "₹7,000 + Shield" },
  ];

  return (
    <section className="prize-section">
      <div className="container">
        {/* Title Section */}
        <h2 className="main-title">🏆 Tenkasi State Level Mega Tug of War 2026</h2>
        <h3 className="tamil-title">தென்காசி மாநில அளவிலான மாபெரும் வடம் இழுக்கும் போட்டி 2026</h3>
        <p className="subtitle">வலிமை... ஒற்றுமை... வெற்றி! (Strength... Unity... Victory!)</p>

        {/* Event Details */}
        <div className="event-info">
          <div className="info-box">
            <p>📅 <strong>Date:</strong> May 10, 2026 (மே 10, 2026)</p>
          </div>
          <div className="info-box">
            <p>📍 <strong>Venue:</strong>பங்களாசுரண்டை,தென்காசி (Tenkasi dist)</p>
          </div>
        </div>

        {/* Prize Table */}
        <div className="table-wrapper">
          <table className="prize-table">
            <thead>
              <tr>
                <th>Position</th>
                <th>Men’s (ஆண்கள் பிரிவு)</th>
                <th>Women’s (பெண்கள் பிரிவு)</th>
              </tr>
            </thead>
            <tbody>
              {prizeData.map((item, index) => (
                <tr key={index}>
                  <td className="pos-cell">{item.pos}</td>
                  <td className="amount">{item.men}</td>
                  <td className="amount">{item.women}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Rules & Poster Content Section */}
        <div className="rules-section">
          <h3>📜 Rules & Details (விதிமுறைகள்)</h3>
          <ul>
            <li>Two Categories: Men's Team & Women's Team.</li>
            <li>Registration is mandatory for all teams.</li>
            <li>Decisions of the referees will be final.</li>
            <li><strong>Total Prize Pool: ₹2,04,000</strong></li>
          </ul>
        </div>

        {/* Registration / Social Media Footer */}
        <div className="registration-footer">
          <div className="promo-box">
            <h4>🔥 TENKASI STRENGTH CHALLENGE 2026 🔥</h4>
            <p>The rope is ready. Are you? Calling all the strongest men and women of Tenkasi!</p>
            <div className="contact-now">
              <a href="./register">📞 Register Now: <strong>[Insert Phone Number]</strong></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrizeSection;