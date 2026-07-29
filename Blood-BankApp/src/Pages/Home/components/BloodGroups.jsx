import React from "react";
import "./BloodGroups.css";

const groups = ["A+","A-","B+","B-","AB+","AB-","O+","O-"];

export default function BloodGroups(){
  return (
    <section className="section groups-section reveal" id="groups">
      <h2>Available Blood Groups</h2>
      <p className="muted">Click a group to view available units and nearby donors.</p>
      <div className="groups-grid">
        {groups.map((g)=> (
          <button className="group-card" key={g} aria-label={`Group ${g}`}>
            <div className="group-symbol">{g}</div>
            <div className="group-meta">Available: <strong> {Math.floor(Math.random()*300)}</strong></div>
          </button>
        ))}
      </div>
    </section>
  )
}
