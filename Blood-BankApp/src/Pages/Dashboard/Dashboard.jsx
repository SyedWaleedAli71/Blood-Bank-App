// import { Link } from "react-router-dom";
// import "./Dashboard.css";

// const stats = [
//   { label: "Active Donors", value: "1,248", detail: "+24 this week" },
//   { label: "Blood Requests", value: "86", detail: "12 urgent" },
//   { label: "Units Available", value: "320", detail: "A+, O+, B-" },
//   { label: "Camps Hosted", value: "18", detail: "This month" },
// ];

// const modules = [
//   {
//     title: "Donate Blood",
//     desc: "Register a donor or book a convenient donation slot.",
//     icon: "🩸",
//     accent: "#dc2626",
//     link: "/contact",
//   },
//   {
//     title: "Donors",
//     desc: "View donor profiles by blood group and location.",
//     icon: "🧑‍⚕️",
//     accent: "#ef4444",
//     link: "/about",
//   },
//   {
//     title: "Blood Requests",
//     desc: "Track urgent requests from hospitals and patients.",
//     icon: "📋",
//     accent: "#f43f5e",
//     link: "/dashboard",
//   },
//   {
//     title: "Blood Stock",
//     desc: "Monitor available units and keep supply balanced.",
//     icon: "🧪",
//     accent: "#fb923c",
//     link: "/dashboard",
//   },
// ];

// const urgentRequests = [
//   { name: "City Hospital", bloodGroup: "O+", units: 4, priority: "Urgent" },
//   { name: "Mira Care", bloodGroup: "A-", units: 2, priority: "High" },
//   { name: "Sunrise Clinic", bloodGroup: "B+", units: 3, priority: "Medium" },
// ];

// const donorInventory = [
//   { name: "Syed Waleed", group: "O+", status: "Available" },
//   { name: "Abdullah Shakeel", group: "A-", status: "Ready" },
//   { name: "Dawwod Shakeel", group: "B+", status: "Available" },
// ];

// const Dashboard = () => {
//   return (
//     <section className="dashboard">
//       <div className="dashboard__glow dashboard__glow--one" />
//       <div className="dashboard__glow dashboard__glow--two" />

//       <div className="dashboard__content">
//         <div className="dashboard__hero">
//           <div className="dashboard__hero-copy">
//             <p className="dashboard__eyebrow">🩸 Blood Bank Control Center</p>
//             <h1>
//               Save more lives with a smarter <span>blood dashboard</span>
//             </h1>
//             <p>
//               Manage donations, connect donors, and respond to critical blood
//               requests faster than ever.
//             </p>

//             <div className="dashboard__actions">
//               <Link to="/contact" className="dashboard__button dashboard__button--primary">
//                 Donate Now
//               </Link>
//               <Link to="/about" className="dashboard__button dashboard__button--secondary">
//                 View Blood Info
//               </Link>
//             </div>
//           </div>

//           <div className="dashboard__hero-card">
//             <div className="dashboard__hero-card-badge">24/7 emergency</div>
//             <h3>Live Support</h3>
//             <p>Urgent blood requests are highlighted instantly for quick action.</p>
//             <div className="dashboard__pulse">
//               <span />
//               <span />
//               <span />
//             </div>
//           </div>
//         </div>

//         <div className="dashboard__stats">
//           {stats.map((stat, index) => (
//             <div
//               key={stat.label}
//               className="dashboard__stat"
//               style={{ animationDelay: `${index * 0.12}s` }}
//             >
//               <p className="dashboard__stat-label">{stat.label}</p>
//               <h3>{stat.value}</h3>
//               <span>{stat.detail}</span>
//             </div>
//           ))}
//         </div>

//         <div className="dashboard__grid">
//           {modules.map((item, index) => (
//             <Link
//               key={item.title}
//               to={item.link}
//               className="dashboard__card"
//               style={{ "--accent": item.accent, animationDelay: `${index * 0.1}s` }}
//             >
//               <div className="dashboard__card-icon">{item.icon}</div>
//               <h3>{item.title}</h3>
//               <p>{item.desc}</p>
//               <span>Open →</span>
//             </Link>
//           ))}
//         </div>

//         <div className="dashboard__panel-grid">
//           <div className="dashboard__panel">
//             <div className="dashboard__panel-head">
//               <h3>Urgent Requests</h3>
//               <span>Live</span>
//             </div>
//             <ul className="dashboard__list">
//               {urgentRequests.map((req) => (
//                 <li key={req.name} className="dashboard__list-item">
//                   <div>
//                     <strong>{req.name}</strong>
//                     <p>{req.bloodGroup} • {req.units} units</p>
//                   </div>
//                   <span className="dashboard__priority">{req.priority}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div className="dashboard__panel">
//             <div className="dashboard__panel-head">
//               <h3>Donor Availability</h3>
//               <span>Ready</span>
//             </div>
//             <ul className="dashboard__list">
//               {donorInventory.map((donor) => (
//                 <li key={donor.name} className="dashboard__list-item">
//                   <div>
//                     <strong>{donor.name}</strong>
//                     <p>{donor.group}</p>
//                   </div>
//                   <span className="dashboard__status">{donor.status}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Dashboard;
//
//
//
import React from "react";
import "./Dashboard.css";

import DashboardHero from "./components/DashboardHero";
import DashboardStats from "./components/DashboardStats";
import DashboardModules from "./components/DashboardModules";
import UrgentRequests from "./components/UrgentRequests";
import DonorAvailability from "./components/DonorAvailability";
import BloodInventory from "./components/BloodInventory";

export default function Dashboard() {
  return (
    <main className="dashboard">
      {/* Background Effects */}
      <div className="dashboard__glow dashboard__glow--one"></div>
      <div className="dashboard__glow dashboard__glow--two"></div>
      <div className="dashboard__content">
        {/* 1. Dashboard Hero */}
        <DashboardHero />
        {/* 2. Statistics */}
        <DashboardStats />
        {/* 3. Main Dashboard Modules */}
        <DashboardModules />
        {/* 4. Blood Inventory */}
        <BloodInventory />
        {/* 5. Urgent Blood Requests + Donor Availability */}
        <div className="dashboard__management">
          {/* Urgent Blood Requests */}
          <div className="dashboard__management-section">
            <UrgentRequests />
          </div>
          {/* Donor Availability */}
          <div className="dashboard__management-section">
            <DonorAvailability />
          </div>
        </div>
      </div>
    </main>
  );
}
