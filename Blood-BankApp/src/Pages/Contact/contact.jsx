import "./contact.css";
import BloodDrop from "../../assets/Icons/BloodDrop.png";
import Clinic from "../../assets/Icons/Clinic.png";
import Institute from "../../assets/Icons/Institute.png";
import operationImg from "../../assets/Images/opration.jpg";

function Contact() {
  return (
    <div className="contact-page">

      {/* Hero */}
      <section className="contact-hero">
        <div className="contact-glow" />
        <div className="contact-badge animate-fade-down">🩸 Get In Touch</div>
        <h1 className="animate-fade-up">Contact <span>Us</span></h1>
        <p className="animate-fade-up delay-1">
          Need blood urgently or want to donate? Reach out to us — we're available <strong>24/7</strong>.
        </p>
      </section>

      {/* Main */}
      <section className="contact-main">

        {/* Left Info */}
        <div className="contact-info animate-slide-left">

          <div className="contact-img-wrap animate-float">
            <img src={operationImg} alt="Blood Bank" />
          </div>

          <div className="info-cards">
            <div className="info-card">
              <img src={BloodDrop} alt="Email" />
              <div>
                <h4>Email Us</h4>
                <p>syedwaleed887@gmail.com</p>
              </div>
            </div>
            <div className="info-card">
              <img src={Clinic} alt="Phone" />
              <div>
                <h4>Call Us</h4>
                <p>+92 312 2122216</p>
              </div>
            </div>
            <div className="info-card">
              <img src={Institute} alt="Address" />
              <div>
                <h4>Visit Us</h4>
                <p>Karachi, Pakistan</p>
              </div>
            </div>
          </div>

        </div>

        {/* Right Form */}
        <div className="contact-form animate-slide-right">
          <h2>Send a <span>Message</span></h2>
          <form>
            <div className="form-row">
              <input type="text"  placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
            </div>
            <input type="text" placeholder="Subject" />
            <select>
              <option value="">Select Request Type</option>
              <option value="donate">I Want to Donate</option>
              <option value="other">Donors</option>
              <option value="request">Request Blood</option>
              <option value="other">Other Inquiry</option>
            </select>
            <textarea rows="5" placeholder="Your Message"></textarea>
            <button type="submit">🩸 Send Message</button>
          </form>
        </div>

      </section>

    </div>
  );
}

export default Contact;
