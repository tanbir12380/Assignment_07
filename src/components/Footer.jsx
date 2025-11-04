import React from "react";
import "./Our.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-column about">
          <h2>CS — Ticket System</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        <div className="footer-column">
          <h3>Company</h3>
          <ul>
            <li>
              <a>About Us</a>
            </li>
            <li>
              <a>Our Mission</a>
            </li>
            <li>
              <a>Contact Sales</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Services</h3>
          <ul>
            <li>
              <a>Products & Services</a>
            </li>
            <li>
              <a>Customer Stories</a>
            </li>
            <li>
              <a>Download Apps</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Information</h3>
          <ul>
            <li>
              <a>Privacy Policy</a>
            </li>
            <li>
              <a>Terms & Conditions</a>
            </li>
            <li>
              <a>Join Us</a>
            </li>
          </ul>
        </div>

        <div className="footer-column social">
          <h3>Social Links</h3>
          <ul>
            <li>
              {" "}
              <img src="twitter.png" alt="" /> @CS — Ticket System
            </li>
            <li>
              {" "}
              <img src="social.png" alt="" /> @CS — Ticket System
            </li>
            <li>
              {" "}
              <img src="facebook.png" alt="" /> @CS — Ticket System
            </li>
            <li>
              {" "}
              <img src="email.png" alt="" /> support@cst.com
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <h3>© 2025 CS — Ticket System. All rights reserved.</h3>
      </div>
    </div>
  );
};

export default Footer;
