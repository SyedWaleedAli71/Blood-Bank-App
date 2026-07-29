import React from "react";
import "./Hero.css";
import heroImg from "../../../assets/Images/doctor.jpg";

export default function Hero() {
  return (
    <section className="home hero-section" id="home">
      <div className="overlay"></div>
      <div className="hero-inner">
        <div className="hero-copy reveal">
          <div className="badge">🩸 Trusted Blood Network</div>
          <h1>
            Premium Blood Bank Services — <span>Donate</span> & <span>Save Lives</span>
          </h1>
          <p>
            We connect verified donors with hospitals and emergency services.
            Safe, fast and reliable blood supply when it matters most.
          </p>
          <div className="hero-actions">
            <a href="#donate" className="btn-primary">Donate Now</a>
            <a href="#find" className="btn-secondary">Find Blood</a>
          </div>
        </div>

        <div className="hero-media reveal">
          <img src={heroImg} alt="Blood donation" />
        </div>
      </div>
    </section>
  );
}
