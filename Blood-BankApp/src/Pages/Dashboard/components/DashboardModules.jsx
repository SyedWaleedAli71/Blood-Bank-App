import React from "react";
import { Link } from "react-router-dom";
import {
  Droplets,
  Users,
  ClipboardList,
  FlaskConical,
  ArrowRight,
} from "lucide-react";

import "./DashboardModules.css";

const modules = [
  {
    title: "Donate Blood",
    desc: "Register a donor or book a convenient donation slot.",
    icon: Droplets,
    link: "/contact",
  },
  {
    title: "Donors",
    desc: "View donor profiles by blood group and location.",
    icon: Users,
    link: "/about",
  },
  {
    title: "Blood Requests",
    desc: "Track urgent requests from hospitals and patients.",
    icon: ClipboardList,
    link: "/contact",
  },
  {
    title: "Blood Stock",
    desc: "Monitor available units and keep blood supply balanced.",
    icon: FlaskConical,
    link: "/dashboard",
  },
];

export default function DashboardModules() {
  return (
    <section className="dashboard-modules">

      <div className="dashboard-modules__heading">
        <div>
          <span className="dashboard-modules__eyebrow">
            Blood Bank Services
          </span>

          <h2>Manage Blood Bank</h2>

          <p>
            Quickly access important blood donation and management services.
          </p>
        </div>
      </div>

      <div className="dashboard-modules__grid">
        {modules.map((module) => {
          const Icon = module.icon;

          return (
            <Link
              to={module.link}
              className="dashboard-module-card"
              key={module.title}
            >
              <div className="dashboard-module-card__icon">
                <Icon size={28} strokeWidth={2} />
              </div>

              <div className="dashboard-module-card__content">
                <h3>{module.title}</h3>

                <p>{module.desc}</p>

                <span className="dashboard-module-card__link">
                  Open
                  <ArrowRight size={17} />
                </span>
              </div>
            </Link>
          );
        })}
      </div>

    </section>
  );
}