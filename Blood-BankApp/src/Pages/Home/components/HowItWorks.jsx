import React from "react";
import "./HowItWorks.css";

const steps = [
  { title: "Register", desc: "Create your profile and complete a quick eligibility check." },
  { title: "Donate Blood", desc: "Visit a center or mobile drive to donate safely." },
  { title: "Blood Testing", desc: "All donations are screened and processed by labs." },
  { title: "Help Save Lives", desc: "Units are matched and delivered to patients in need." },
];

export default function HowItWorks(){
  return (
    <section className="section works-section reveal" id="how">
      <h2>How It Works</h2>
      <p className="muted">A simple, safe process to donate and support patients.</p>
      <div className="works-grid">
        {steps.map((s,i)=> (
          <div className="step-card" key={i}>
            <div className="step-index">{i+1}</div>
            <h4>{s.title}</h4>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
