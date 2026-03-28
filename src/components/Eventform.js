import React, { useState } from "react";
import "./Eventform.css";
import qrImage from "../components/images/qr.jpg";

function Eventform() {
  const [formData, setFormData] = useState({
    name: "",
    team: "",
    area: "",
    phone: "",
  });

  const [paid, setPaid] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!paid) {
      alert("Please complete payment first!");
      return;
    }

    setLoading(true);

    const data = {
      ...formData,
      paid: "Yes",
      date: new Date().toLocaleString(),
    };

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbye32ziihl3XipFhvVMZTWHbu9PVBje0N58VQuPOJMbNVpypgEuwXpF7X2WHX9_iTWkDQ/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "text/plain;charset=utf-8", // 🔥 IMPORTANT FIX
          },
          body: JSON.stringify(data),
        }
      );

      alert("Registration Submitted ✅");

      setFormData({
        name: "",
        team: "",
        area: "",
        phone: "",
      });
      setPaid(false);

    } catch (error) {
      console.error(error);
      alert("Error submitting form ❌");
    }

    setLoading(false);
  };

  return (
    <div className="form-container">
      <form className="event-form" onSubmit={handleSubmit}>
        <h2>Event Registration</h2>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="team"
          placeholder="Team Name"
          value={formData.team}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="area"
          placeholder="Area"
          value={formData.area}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        {/* 💰 PAYMENT */}
        <div className="payment-box">
          <p>💰 Entry Fee ₹1000</p>

          <img src={qrImage} alt="QR" className="qr-image" />

          <p>
            UPI ID:
            <a href="upi://pay?pa=saprabatraders@okhdfcbank&pn=belssy&am=1000&cu=INR">
              <strong> saprabatraders@okhdfcbank</strong>
            </a>
          </p>

          {/* GPay */}
          <a
            className="gpay-btn"
            href="intent://pay?pa=saprabatraders@okhdfcbank&pn=belssy&am=1000&cu=INR#Intent;scheme=upi;package=com.google.android.apps.nbu.paisa.user;end;"
          >
            Pay with GPay (Android)
          </a>

          {/* iPhone GPay */}
          <a
            className="gpay-btn"
            href="https://pay.google.com/payments/u/0/pay?pa=saprabatraders@okhdfcbank&pn=belssy&am=1000&cu=INR"
          >
            Pay with GPay (iPhone)
          </a>

          <button
            type="button"
            className="pay-btn"
            onClick={() => setPaid(true)}
          >
            I Have Paid
          </button>

          {paid && <p>✅ Payment Confirmed</p>}
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit Registration"}
        </button>
      </form>
    </div>
  );
}

export default Eventform;