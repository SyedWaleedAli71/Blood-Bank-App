import React, { useEffect, useState } from "react";
import "./Stats.css";

function useCounter(target, duration = 1200) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let start = 0;
    const increment = Math.ceil(target / (duration / 16));
    let rafId;
    function step() {
      start += increment;
      if (start >= target) {
        setValue(target);
      } else {
        setValue(start);
        rafId = requestAnimationFrame(step);
      }
    }
    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [target, duration]);
  return value;
}

export default function Stats() {
  const donors = useCounter(10234);
  const donations = useCounter(56210);
  const saved = useCounter(45321);
  const available = useCounter(842);

  return (
    <section className="section stats-section reveal" id="stats">
      <div className="stats-inner">
        <div className="stat-card">
          <h3>{donors.toLocaleString()}</h3>
          <p>Total Donors</p>
        </div>
        <div className="stat-card">
          <h3>{donations.toLocaleString()}</h3>
          <p>Blood Donations</p>
        </div>
        <div className="stat-card">
          <h3>{saved.toLocaleString()}</h3>
          <p>Lives Saved</p>
        </div>
        <div className="stat-card">
          <h3>{available.toLocaleString()}</h3>
          <p>Blood Units Available</p>
        </div>
      </div>
    </section>
  );
}
