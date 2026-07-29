import "./home.css";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import WhyChoose from "./components/WhyChoose";
import BloodBankFeatures from "./components/BloodBankFeatures";
import BloodGroups from "./components/BloodGroups";
import HowItWorks from "./components/HowItWorks";
import EmergencyCTA from "./components/EmergencyCTA";
import FAQ from "./components/FAQ";
import Testimonials from "./components/Testimonials";

import { useEffect } from "react";

function Home() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    const nodes = document.querySelectorAll(".blood-home .reveal");
    nodes.forEach((n) => obs.observe(n));

    return () => obs.disconnect();
  }, []);

  return (
    <main className="blood-home">
      <Hero />
      <Stats />
      <WhyChoose />
      <BloodBankFeatures />
      <BloodGroups />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <EmergencyCTA /> 
    </main>
  );
}

export default Home;
