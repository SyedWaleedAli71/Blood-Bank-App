import React, { useEffect, useState, useRef } from "react";
import "./Testimonials.css";
import t1 from "../../../assets/Images/donar1.jpg";
import t2 from "../../../assets/Images/doctor.jpg";
import t3 from "../../../assets/Images/heart.jpg";
import t4 from "../../../assets/Images/heart2.jpg";
import t5 from "../../../assets/Images/heart3.jpg";
import t6 from "../../../assets/Images/blooding.jpg";

const slides = [
  { img: t1, name: "Aisha", role: "Volunteer", text: "Quick process and professional staff. Glad to help!" },
  { img: t2, name: "Omar", role: "Donor", text: "Found the nearest drive and booked in minutes." },
  { img: t3, name: "Sara", role: "Nurse", text: "Reliable supply and efficient matching for patients." },
  { img: t4, name: "Hassan", role: "Student", text: "Friendly team and clear instructions throughout." },
  { img: t5, name: "Lina", role: "Teacher", text: "A small act that made a big difference for someone I know." },
  { img: t6, name: "Bilal", role: "Engineer", text: "The app made donation scheduling effortless." },
];

export default function Testimonials(){
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  useEffect(()=>{
    start();
    return stop;
  },[index]);

  function start(){
    stop();
    timerRef.current = setInterval(() => {
      setIndex((i)=> (i+1) % slides.length);
    }, 3800);
  }
  function stop(){ if(timerRef.current) clearInterval(timerRef.current); }

  function prev(){ setIndex(i => (i - 1 + slides.length) % slides.length); }
  function next(){ setIndex(i => (i + 1) % slides.length); }

  return (
    <section className="section testimonials-section reveal" id="testimonials">
      <h2>What Our Donors Say</h2>
      <div className="slider" onMouseEnter={stop} onMouseLeave={start}>
        <button className="slider-btn prev" onClick={prev}>‹</button>
        <div className="slide-window">
          <div className="slide-track" style={{transform:`translateX(-${index*100}%)`}}>
            {slides.map((s,i)=> (
              <div className="slide" key={i}>
                <img src={s.img} alt={s.name} />
                <p className="slide-text">"{s.text}"</p>
                <p className="slide-author">{s.name} — <span>{s.role}</span></p>
              </div>
            ))}
          </div>
        </div>
        <button className="slider-btn next" onClick={next}>›</button>
        <div className="dots">
          {slides.map((_,i)=> (
            <button key={i} className={`dot ${i===index? 'active':''}`} onClick={()=> setIndex(i)}></button>
          ))}
        </div>
      </div>
    </section>
  )
}
