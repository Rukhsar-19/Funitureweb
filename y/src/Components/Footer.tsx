import React from "react";
import "../Styles/Footer.scss";
import footerlogo from "../assets/foolterlogo.webp";
const Footer = () => {
  return (
    <section className="footer main-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <a className="footer-logo" href="#">
              <img src={footerlogo} alt="Footer Logo" />
            </a>
            <div className="mail-fun">
              400 University Drive Suite 200 Coral Gables,
            </div>
            <div className="people-mail">FL 33134 USA</div>
          </div>
          <div className="col-lg-2">
            <ul className="links-footer">
              <p className="link-head">Links</p>
              <li>
                <a href="#">Home</a>
              </li>

              <li>
                <a href="#">Shop</a>
              </li>

              <li>
                <a href="#">About</a>
              </li>

              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-2">
            <ul className="links-footer">
              <p className="link-head">Help</p>
              <li>
                <a href="#">Payment Options</a>
              </li>

              <li>
                <a href="#">Returns</a>
              </li>

              <li>
                <a href="#">Privacy Policies</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4">
            <div className="email">
              <p className="link-head">Newsletter</p>
              <div className="footer-newsletter">
                <input type="email" placeholder="Enter Your Email Address" />
                <button className="subscribe-btn">Subscribe</button>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
            <div className="footer-bottom">
                <div>2023 furino. All rights reverved</div>
            </div>

        </div>
      </div>
    
    </section>
  );
};

export default Footer;
