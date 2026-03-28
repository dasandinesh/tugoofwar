import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>TUG OF WAR 2026</h3>
          <p>Tenkasi District Level Grand Championship</p>
        </div>
        
        <div className="footer-section">
          <h4>Contact Details</h4>
          <p><strong>📞 Phone:</strong> +91 80720 74098</p>
          <p><strong>👤 Secretary:</strong> S.A. PRABAKARAN</p>
          <p><strong>📍 Venue:</strong> பங்களாசுரண்டை, தென்காசி (Tenkasi dist)</p>
          <p><strong>📅 Date:</strong> May 10, 2026</p>
        </div>

      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2026 TUG OF WAR Championship. All rights reserved.</p>
        <p>Developed by <strong>Ziyonex</strong> | Follow us on Instagram: <a href="https://www.instagram.com/ziyonextec?igsh=MWpnaW9rYjQzdnJwbg==" target="_blank" rel="noopener noreferrer" className="instagram-text">ziyonextec</a></p>
        <p>For any queries, please contact: +91 6381121261</p>
      </div>
    </footer>
  );
};

export default Footer;
