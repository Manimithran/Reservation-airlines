import React from 'react';
import './Footer.css';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BsWhatsapp } from "react-icons/bs";
import { RiThreadsFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div>
          <h4>About Us</h4>
          <ul>
            <li><a href="/about">Our Story</a></li>
            <li><a href="/team">Team</a></li>
            <li><a href="/careers">Careers</a></li>
          </ul>
        </div>
        <div>
          <h4>Customer Service</h4>
          <ul>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/support">Support</a></li>
          </ul>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/flights">Book a Flight</a></li>
            <li><a href="/deals">Deals</a></li>
            <li><a href="/destinations">Destinations</a></li>
          </ul>
        </div>
        <div>
          <h4>Follow Us</h4>
          <div className="social-media">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaXTwitter/></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram/></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><BsWhatsapp/></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><RiThreadsFill /></a>
            
          </div>
        </div>
      </div>
      <div className="copyright">
        &copy; 2024 Airliner. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
