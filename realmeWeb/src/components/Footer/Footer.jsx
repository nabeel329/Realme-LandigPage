import React from 'react';
import './Footer.css'; // Import the CSS for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Recommended</h3>
        <ul>
          <li>realme C75</li>
          <li>realme 13+ 5G</li>
          <li>realme Note 60</li>
          <li>realme C61</li>
          <li>realme C65</li>
          <li>realme 12</li>
          <li>realme 12+ 5G</li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Support</h3>
        <ul>
          <li>FAQ</li>
          <li>Troubleshooting</li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>About realme</h3>
        <ul>
          <li>Our Brand</li>
          <li>Newsroom</li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Contact realme</h3>
        <ul>
          <li>Whatsapp</li>
          <li>service.pk@realme.com</li>
          <li>04238048018</li>
          <li>09:30 - 18:00, MON - SAT</li>
          <li>Exclude Holidays</li>
        </ul>
      </div>

      <div className="footer-section social-media">
        <h3>Follow Us</h3>
        <div className="social-links">
          <a href="#" className="social-icon">
            <i className="fa fa-facebook"></i> {/* Facebook Icon */}
          </a>
          <a href="#" className="social-icon">
            <i className="fa fa-instagram"></i> {/* Instagram Icon */}
          </a>
          <a href="#" className="social-icon">
            <i className="fa fa-twitter"></i> {/* Twitter Icon */}
          </a>
          <a href="#" className="social-icon">
            <i className="fa fa-youtube"></i> {/* YouTube Icon */}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
