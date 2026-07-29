
import React from "react";
import { Link } from "react-router-dom";
import "./EmergencyCTA.css";

export default function EmergencyCTA() {
  return (
    <section className="emergency-section" id="emergency">
      <div className="emergency-inner">

        <div className="emergency-content">
          <h2>Emergency Blood Request</h2>

          <p className="emergency-text">
            If you need blood urgently, submit a request and we will prioritize
            matching donors immediately.
          </p>
        </div>

        <div className="emergency-actions">

          {/* Go to Contact Page */}
          <Link to="/contact" className="btn-primary">
            Request Blood
          </Link>

          {/* Direct Phone Call */}
          <a
            className="btn-secondary"
            href="tel:+923122166216"
          >
            Emergency Call
          </a>

        </div>

      </div>
    </section>
  );
}