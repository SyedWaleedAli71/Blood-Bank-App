import React from "react";
import { Link } from "react-router-dom";
// import FBIcon from "../../assets/Images/FB 4.jpg";


import {
  Heart,
  Mail,
  Phone,
  MapPin,
  Clock3,
  ArrowUp,
} from "lucide-react";

import "./Footer.css";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="blood-footer">

      {/* ================================
          TOP CTA
      ================================= */}

      <div className="footer-cta">

        <div className="footer-cta-content">

          <div className="footer-heart">
            <Heart size={25} fill="currentColor" />
          </div>

          <div>
            <h2>Be a Hero. Donate Blood.</h2>

            <p>
              Your one donation can help save multiple lives.
            </p>
          </div>

        </div>

        <Link to="/contact" className="footer-donate-btn">
          Donate Now
          <Heart size={18} />
        </Link>

      </div>


      {/* ================================
          MAIN FOOTER
      ================================= */}

      <div className="footer-main">

        {/* BRAND */}

        <div className="footer-column footer-brand">

          <Link to="/" className="footer-logo">

            <span className="footer-logo-icon">
              <Heart size={24} fill="currentColor" />
            </span>

            <span>
              Blood<span>Bank</span>
            </span>

          </Link>

          <p>
            Connecting donors with patients and helping communities
            get safe blood when they need it most.
          </p>


          {/* SOCIAL LINKS */}

          <div className="footer-socials">

            <a
              href="#"
              aria-label="Facebook"
              className="social-facebook"
            >
              f
              {/* <img src={FBIcon} alt="Facebook" /> */}
            </a>

            <a
              href="#"
              aria-label="Instagram"
              className="social-instagram"
            >
              ◎
            </a>

            <a
              href="#"
              aria-label="Twitter"
              className="social-twitter"
            >
              𝕏
            </a>

          </div>

        </div>


        {/* QUICK LINKS */}

        <div className="footer-column">

          <h3>Quick Links</h3>

          <ul>

            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/about">About Us</Link>
            </li>

            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>

            <li>
              <Link to="/contact">Contact Us</Link>
            </li>

          </ul>

        </div>


        {/* SERVICES */}

        <div className="footer-column">

          <h3>Our Services</h3>

          <ul>

            <li>
              <Link to="/contact">Blood Donation</Link>
            </li>

            <li>
              <Link to="/contact">Blood Request</Link>
            </li>

            <li>
              <Link to="/contact">Emergency Support</Link>
            </li>

            <li>
              <Link to="/about">Blood Screening</Link>
            </li>

          </ul>

        </div>


        {/* CONTACT */}

        <div className="footer-column footer-contact">

          <h3>Contact Us</h3>

          <div className="contact-item">

            <MapPin size={19} />

            <span>
              Karachi, Pakistan
            </span>

          </div>


          <div className="contact-item">

            <Phone size={19} />

            <a href="tel:+923122166216">
              0312 2166216
            </a>

          </div>


          <div className="contact-item">

            <Mail size={19} />

            <a href="mailto:syedwaleed887@gmail.com">
              syedwaleed887@gmail.com
            </a>

          </div>


          <div className="contact-item">

            <Clock3 size={19} />

            <span>
              24/7 Emergency Support
            </span>

          </div>

        </div>

      </div>


      {/* ================================
          BOTTOM FOOTER
      ================================= */}

      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} BloodBank. All Rights Reserved.
        </p>


        <div className="footer-bottom-links">

          <Link to="/about">
            Privacy Policy
          </Link>

          <Link to="/about">
            Terms & Conditions
          </Link>

        </div>


        <button
          type="button"
          className="footer-top-btn"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <ArrowUp size={18} />
        </button>

      </div>

    </footer>
  );
}