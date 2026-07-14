import "./about.css";
import doctorImg from "../../assets/Images/doctor.jpg";
import donarImg from "../../assets/Images/donar1.jpg";
import heartImg from "../../assets/Images/heart.jpg";
import BloodDrop from "../../assets/Icons/BloodDrop.png";
import Clinic from "../../assets/Icons/Clinic.png";
import Lab from "../../assets/Icons/Lab.png";
import TransfusionServices from "../../assets/Icons/TransfusionServices.png";

const services = [
  { icon: BloodDrop,           label: "Blood Donation" },
  { icon: Clinic,              label: "Clinics" },
  { icon: Lab,                 label: "Lab Testing" },
  { icon: TransfusionServices, label: "Transfusion" },
];

const team = [
  { img: doctorImg, name: "Dr. Ahmed Khan",   role: "Chief Medical Officer" },
  { img: donarImg,  name: "Sara Malik",        role: "Lead Donor Coordinator" },
  { img: heartImg,  name: "Dr. Usman Ali",     role: "Hematology Specialist" },
];

function About() {
  return (
    <div className="about-page">

      {/* Hero */}
      <section className="about-hero">
        <div className="about-glow" />
        <div className="about-badge animate-fade-down">🩸 Who We Are</div>
        <h1 className="animate-fade-up">
          About <span>Blood Bank</span>
        </h1>
        <p className="animate-fade-up delay-1">
          We connect donors with patients in need — saving lives every single day
          through safe, fast and reliable blood services.
        </p>
      </section>

      {/* Mission */}
      <section className="about-mission">
        <div className="mission-text animate-slide-left">
          <h2>Our <span>Mission</span></h2>
          <p>
            Our mission is to ensure a safe and adequate blood supply for all
            patients. We work 24/7 to collect, test, and distribute blood to
            hospitals and clinics across the region.
          </p>
          <p>
            Every donation matters. With your help, we can reach more patients
            and save more lives — one drop at a time.
          </p>
          <button className="about-btn">Become a Donor</button>
        </div>
        <div className="mission-image animate-float">
          <img src={doctorImg} alt="Our Mission" />
        </div>
      </section>

      {/* Services */}
      <section className="about-services">
        <h2 className="section-title">What We <span>Offer</span></h2>
        <div className="services-grid">
          {services.map((s, i) => (
            <div className="service-card" key={i} style={{ animationDelay: `${i * 0.15}s` }}>
              <img src={s.icon} alt={s.label} />
              <p>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="about-team">
        <h2 className="section-title">Meet Our <span>Team</span></h2>
        <div className="team-grid">
          {team.map((m, i) => (
            <div className="team-card" key={i} style={{ animationDelay: `${i * 0.2}s` }}>
              <img src={m.img} alt={m.name} />
              <h3>{m.name}</h3>
              <p>{m.role}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default About;
