import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./prizelist.css";

const PrizeList = () => {
  const prizes = [
    { pos: "🥇 1st PRIZE", amount: "₹50,000", extra: "+ Mega Trophy", color: "gold-bg" },
    { pos: "🥈 2nd PRIZE", amount: "₹30,000", extra: "+ Trophy", color: "silver-bg" },
    { pos: "🥉 3rd PRIZE", amount: "₹15,000", extra: "+ Trophy", color: "bronze-bg" },
    { pos: "🏅 4th PRIZE", amount: "₹7,000", extra: "+ Shield", color: "shield-bg" },
  ];

  return (
    <section className="prize-list-section py-5 bg-light" id="prizes">
      <div className="container text-center">
        
        {/* Title Section */}
        <div className="mb-5">
          <h2 className="fw-black text-dark text-uppercase italic-font">
            🏆 Prize <span className="text-danger">Structure</span>
          </h2>
          <div className="prize-pool-badge mt-2">
            TOTAL PRIZE POOL: ₹2,04,000
          </div>
          <p className="text-muted mt-3 fw-bold uppercase">
            Same for both <span className="text-primary">Men's</span> & <span className="text-danger">Women's</span> Divisions
          </p>
        </div>

        {/* Prize Cards Grid */}
        <div className="row g-4 justify-content-center">
          {prizes.map((prize, index) => (
            <div className="col-6 col-md-3" key={index}>
              <div className={`prize-card shadow-sm ${prize.color}`}>
                <div className="prize-rank">{prize.pos}</div>
                <div className="prize-amount">{prize.amount}</div>
                <div className="prize-extra">{prize.extra}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Note / Tamil Tagline */}
        <div className="mt-5 p-4 bg-white border rounded-3 shadow-sm">
          <h5 className="fw-bold text-dark">
        <a href="./register">Register Now</a>
          </h5>
          <p className="mb-0 text-muted">Register before the deadline to participate!</p>
        </div>

      </div>
    </section>
  );
};

export default PrizeList;