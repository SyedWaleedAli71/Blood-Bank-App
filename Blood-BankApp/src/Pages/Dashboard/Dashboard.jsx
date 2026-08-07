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
