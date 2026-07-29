import React from "react";
import "./WhyChoose.css";
import Lab from "../../../assets/Icons/Lab.png";
import Transfusion from "../../../assets/Icons/TransfusionServices.png";
import Institute from "../../../assets/Icons/Institute.png";

export default function WhyChoose() {
  const cards = [
    { title: "Trusted Blood Supply", desc: "Verified donors and safe collection procedures.", icon: Lab },
    { title: "Fast Emergency Support", desc: "Priority matching for urgent hospital requests.", icon: Transfusion },
    { title: "Verified Donors", desc: "Background-checked donors and medical screening.", icon: Institute },
  ];

  return (
    <section className="section why-section reveal" id="why">
      <h2>Why Choose Our Blood Bank</h2>
      <p className="muted">Premium care, verified donors, and rapid emergency response.</p>
      <div className="why-grid">
        {cards.map((c, i) => (
          <div className="why-card" key={i}>
            <img src={c.icon} alt={c.title} />
            <h4>{c.title}</h4>
            <p>{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
