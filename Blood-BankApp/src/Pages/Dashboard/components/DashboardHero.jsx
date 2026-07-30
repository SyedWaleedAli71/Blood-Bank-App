import React from "react";
import { Link } from "react-router-dom";
import { Heart, PhoneCall, ArrowRight } from "lucide-react";
import "./DashboardHero.css";

export default function DashboardHero() {
  return (
    <section className="dashboard-hero">

      <div className="dashboard-hero__content">

        {/* LEFT SIDE */}
        <div className="dashboard-hero__text">

          <div className="dashboard-hero__badge">
            <Heart size={18} fill="currentColor" />
            <span>Blood Bank Control Center</span>
          </div>

          <h1>
            Save More Lives With a
            <span> Smarter Blood Dashboard</span>
          </h1>

          <p>
            Manage donations, connect donors, monitor blood availability,
            and respond to critical blood requests faster than ever.
          </p>

          <div className="dashboard-hero__actions">

            <Link
              to="/contact"
              className="dashboard-hero__btn dashboard-hero__btn--primary"
            >
              <Heart size={18} fill="currentColor" />
              Donate Blood
              <ArrowRight size={18} />
            </Link>

            <a
              href="tel:+923122166216"
              className="dashboard-hero__btn dashboard-hero__btn--secondary"
            >
              <PhoneCall size={18} />
              Emergency Call
            </a>

          </div>

        </div>


        {/* RIGHT SIDE */}
        <div className="dashboard-hero__support">

          <div className="dashboard-hero__support-glow"></div>

          <div className="dashboard-hero__support-content">

            <div className="dashboard-hero__support-badge">
              <span className="dashboard-hero__live-dot"></span>
              24/7 Emergency Support
            </div>

            <Heart
              className="dashboard-hero__heart"
              size={58}
              fill="currentColor"
            />

            <h2>
              Every Drop
              <span> Matters</span>
            </h2>

            <p>
              Quick blood matching and emergency support when patients
              need it most.
            </p>

            <Link
              to="/contact"
              className="dashboard-hero__support-link"
            >
              Request Blood
              <ArrowRight size={17} />
            </Link>

          </div>

          {/* Decorative circles */}
          <div className="dashboard-hero__circle dashboard-hero__circle--one"></div>
          <div className="dashboard-hero__circle dashboard-hero__circle--two"></div>

        </div>

      </div>

    </section>
  );
}