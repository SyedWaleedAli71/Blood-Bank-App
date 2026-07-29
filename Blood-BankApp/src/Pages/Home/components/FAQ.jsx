import React, { useState } from "react";
import "./FAQ.css";

const faqs = [
  { q: "Who can donate blood?", a: "Generally, healthy adults meeting minimum age and weight requirements. Donors are screened for medical conditions to ensure safety." },
  { q: "How often can I donate blood?", a: "Whole blood donors may give every 56 days. Other donation types have different intervals as advised by staff." },
  { q: "How does blood donation help patients?", a: "A single donation can be separated into components to help multiple patients—surgery, trauma, long-term illnesses, and more." },
  { q: "Is the donation process safe?", a: "Yes. All equipment is sterile and single-use. Medical staff monitor donors before and after donation." },
  { q: "Can I request blood through the Blood Bank?", a: "Yes. Use the Emergency Request form or contact our support line to submit required details for a match." },
  { q: "How is donated blood tested?", a: "All donations are tested for infectious diseases and blood typing before being released for transfusion." },
];

export default function FAQ(){
  const [open, setOpen] = useState(null);

  return (
    <section className="section faq-section reveal" id="faq">
      <h2>Frequently Asked Questions</h2>
      <p className="muted">Common questions about donation, eligibility and emergency requests.</p>
      <div className="faq-grid">
        {faqs.map((f,i)=> (
          <div className={`faq-item ${open===i? 'open':''}`} key={i}>
            <button className="faq-btn" onClick={() => setOpen(open===i? null : i)}>
              <span>{f.q}</span>
              <span className={`faq-icon ${open===i? 'open':''}`}></span>
            </button>
            <div className="faq-body">{f.a}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
