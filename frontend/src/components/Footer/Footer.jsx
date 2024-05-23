import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" className="logo"/>
            <p>Indulge in culinary delights delivered right to your doorstep. Discover a diverse menu crafted with passion and care. For any inquiries or assistance, our dedicated support team is here to help.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li><Link to='/'> Home</Link></li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>

        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1-212-456-7890</li>
                <li>bazarindia123@gmail.com</li>
            </ul>


        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 @ BazarIndia.com-All Right Reserved</p>
    </div>
  );
};

export default Footer;
