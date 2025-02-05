import React from 'react';
import 'remixicon/fonts/remixicon.css';
import '../Style/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
              <div className="footer-left">
                <div className='logo'>
                <img src="https://www.zager.in/_next/image?url=%2Flogowhite.png&w=64&q=75" alt="Logo" className="footer-logo" />
                <p>It's all about values!</p>
                </div>
                <div className="social-links">
                  <h3>Social Links</h3>
                  <a href="#"><i className="fab fa-messenger"></i><i class="ri-messenger-line"></i></a>
                  <a href="#"><i className="fab fa-instagram"></i><i class="ri-instagram-line"></i></a>
                  <a href="#"><i className="fab fa-x-twitter"></i><i class="ri-twitter-x-line"></i></a>
                  <a href="#"><i className="fab fa-github"></i><i class="ri-github-fill"></i></a>
                  <a href="#"><i className="fab fa-youtube"></i><i class="ri-youtube-line"></i></a>
                </div>
              </div>
          <div>
            <h3>Solutions</h3>
            <ul>
              <li><a href="#">Marketing</a></li>
              <li><a href="#">Analytics</a></li>
              <li><a href="#">Automation</a></li>
              <li><a href="#">Commerce</a></li>
              <li><a href="#">Insights</a></li>
            </ul>
          </div>
          <div>
            <h3>Support</h3>
            <ul>
              <li><a href="#">Submit ticket</a></li>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">Guides</a></li>
            </ul>
          </div>
          <div>
            <h3>Company</h3>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Jobs</a></li>
              <li><a href="#">Press</a></li>
            </ul>
          </div>
          <div>
            <h3>Legal</h3>
            <ul>
              <li><a href="#">Terms of service</a></li>
              <li><a href="#">Privacy policy</a></li>
              <li><a href="#">License</a></li>
            </ul>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="footer-bottom">© 2024 Your Company, Inc. All rights reserved.</div>
    </footer>
  );
};

export default Footer;