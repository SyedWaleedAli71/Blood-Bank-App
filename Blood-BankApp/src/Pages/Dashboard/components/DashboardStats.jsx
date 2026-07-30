import React from "react";
import {
  Users,
  ClipboardList,
  Droplet,
  CalendarDays,
} from "lucide-react";
import "./DashboardStats.css";

const stats = [
  {
    label: "Active Donors",
    value: "1,248",
    detail: "+24 this week",
    icon: Users,
  },
  {
    label: "Blood Requests",
    value: "86",
    detail: "12 urgent",
    icon: ClipboardList,
  },
  {
    label: "Units Available",
    value: "320",
    detail: "A+, O+, B-",
    icon: Droplet,
  },
  {
    label: "Camps Hosted",
    value: "18",
    detail: "This month",
    icon: CalendarDays,
  },
];

export default function DashboardStats() {
  return (
    <section className="dashboard-stats">
      {stats.map((stat, index) => {
        const Icon = stat.icon;

        return (
          <div
            className="dashboard-stat-card"
            key={stat.label}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="dashboard-stat-icon">
              <Icon size={24} strokeWidth={2.2} />
            </div>

            <div className="dashboard-stat-info">
              <p>{stat.label}</p>

              <h3>{stat.value}</h3>

              <span>{stat.detail}</span>
            </div>
          </div>
        );
      })}
    </section>
  );
}