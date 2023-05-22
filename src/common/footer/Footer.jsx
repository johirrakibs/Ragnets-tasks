import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF, faTwitter, faInstagram, faPinterest, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Categories</h3>
          <ul>
            <li><a href="#">Men's Clothing</a></li>
            <li><a href="#">Women's Clothing</a></li>
            <li><a href="#">electronics</a></li>
            <li><a href="#">Accessories</a></li>
            <li><a href="#">Others</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Customer Support</h3>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Shipping &amp; Returns</a></li>
            <li><a href="#">Order Tracking</a></li>
            <li><a href="#">Size Guide</a></li>
            <li><a href="#">Sitemap</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Stay Connected</h3>
         
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Ragnets. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
