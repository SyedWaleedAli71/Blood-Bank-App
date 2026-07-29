import React from "react";
import "./BloodBankFeatures.css";

import BloodDonationImage from "../../../assets/Images/donate-blood-save-life-1.png";

import {
  ShieldCheck,
  Globe2,
  HeartHandshake,
  Clock3,
  Stethoscope,
  Building2,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Safe & Screened Blood",
    desc: "All donated blood is carefully tested to ensure maximum safety for patients.",
  },
  {
    icon: Globe2,
    title: "International Hygiene Standards",
    desc: "Blood collection and storage follow strict hygiene and safety protocols.",
  },
  {
    icon: HeartHandshake,
    title: "Serving Humanity",
    desc: "We support patients during emergencies, surgeries, and critical treatments.",
  },
  {
    icon: Clock3,
    title: "24/7 Emergency Support",
    desc: "Our blood bank is ready to respond quickly to urgent medical needs.",
  },
  {
    icon: Stethoscope,
    title: "Donor Health Screening",
    desc: "Every donor receives a basic health check before blood donation.",
  },
  {
    icon: Building2,
    title: "Central Blood Bank Facility",
    desc: "We maintain a reliable blood supply for hospitals and patients.",
  },
];

export default function BloodBankFeatures() {
  return (
    <section className="blood-features-section" id="blood-features">

      {/* Heading */}
      <div className="blood-features-heading">
        <span>DONATE BLOOD. SAVE LIFE!</span>

        <h2>
          Donate Your Blood to Us,
          <br />
          Save More Life Together
        </h2>

        <p>
          Every blood donation can make a meaningful difference.
          Your contribution helps us provide safe and reliable blood
          support to patients when they need it most.
        </p>
      </div>

      {/* Main Content */}
      <div className="blood-features-container">

        {/* LEFT IMAGE */}
        <div className="blood-features-image-wrapper">

          <div className="blood-features-image-shape">
            <img
              src={BloodDonationImage}
              alt="Blood donation"
            />
          </div>

          {/* Floating Badge */}
          <div className="blood-features-badge">
            <div className="blood-features-badge-icon">
              <HeartHandshake size={22} />
            </div>

            <div>
              <strong>Save Lives</strong>
              <span>One Donation Matters</span>
            </div>
          </div>

        </div>

        {/* RIGHT FEATURES */}
        <div className="blood-features-grid">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                className="blood-feature-card"
                key={index}
              >
                <div className="blood-feature-icon">
                  <Icon size={24} strokeWidth={2} />
                </div>

                <div className="blood-feature-content">
                  <h3>{feature.title}</h3>

                  <p>{feature.desc}</p>
                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}