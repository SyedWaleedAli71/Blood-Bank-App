import "./home.css";
import heroImg from "../../assets/Images/doctor.jpg";

function Home() {
  return (
    <section className="home">
      <div className="overlay"></div>

      <div className="home-content">
        <div className="badge animate-fade-down">🩸 Save Lives Today</div>

        <h1 className="animate-fade-up">
          Donate Blood, <span>Save Lives</span>
        </h1>

        <p className="animate-fade-up delay-1">
          Every drop counts. Join thousands of donors and help patients in need.
          Your one donation can save up to <strong>3 lives</strong>.
        </p>

        <div className="stats animate-fade-up delay-2">
          <div className="stat">
            <h3>10K+</h3>
            <p>Donors</p>
          </div>
          <div className="stat">
            <h3>50K+</h3>
            <p>Lives Saved</p>
          </div>
          <div className="stat">
            <h3>100+</h3>
            <p>Blood Banks</p>
          </div>
        </div>

        <div className="buttons animate-fade-up delay-3">
          <button className="btn-primary">Donate Now</button>
          <button className="btn-secondary">Find Blood</button>
        </div>
      </div>

      <div className="home-image animate-float">
        <img src={heroImg} alt="Blood Donation" />
      </div>
    </section>
  );
}

export default Home;
