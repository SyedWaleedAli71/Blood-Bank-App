import React from "react";
import {
  AlertCircle,
  Clock3,
  Droplets,
  MapPin,
  Phone,
} from "lucide-react";

import "./UrgentRequests.css";

const requests = [
  {
    hospital: "City Hospital",
    location: "Karachi",
    bloodGroup: "O+",
    units: 4,
    priority: "Urgent",
    time: "10 min ago",
  },
  {
    hospital: "Mira Care Hospital",
    location: "Lahore",
    bloodGroup: "A-",
    units: 2,
    priority: "High",
    time: "25 min ago",
  },
  {
    hospital: "Sunrise Clinic",
    location: "Islamabad",
    bloodGroup: "B+",
    units: 3,
    priority: "Medium",
    time: "1 hour ago",
  },
  {
    hospital: "Al-Shifa Medical Center",
    location: "Rawalpindi",
    bloodGroup: "AB+",
    units: 2,
    priority: "High",
    time: "2 hours ago",
  },
];

export default function UrgentRequests() {
  return (
    <section className="urgent-requests">

      {/* Header */}
      <div className="urgent-requests__header">

        <div>
          <span className="urgent-requests__eyebrow">
            Emergency Management
          </span>

          <h2>Urgent Blood Requests</h2>

          <p>
            Monitor hospitals and patients who currently need blood.
          </p>
        </div>

        <div className="urgent-requests__live">
          <span className="urgent-requests__live-dot"></span>
          Live Updates
        </div>

      </div>


      {/* Requests */}
      <div className="urgent-requests__list">

        {requests.map((request) => (
          <div
            className={`urgent-request-card priority-${request.priority.toLowerCase()}`}
            key={`${request.hospital}-${request.bloodGroup}`}
          >

            {/* Blood Group */}
            <div className="urgent-request-card__blood">
              <Droplets size={22} />
              <strong>{request.bloodGroup}</strong>
            </div>


            {/* Hospital Info */}
            <div className="urgent-request-card__info">

              <h3>{request.hospital}</h3>

              <div className="urgent-request-card__meta">

                <span>
                  <MapPin size={14} />
                  {request.location}
                </span>

                <span>
                  <Droplets size={14} />
                  {request.units} Units
                </span>

                <span>
                  <Clock3 size={14} />
                  {request.time}
                </span>

              </div>

            </div>


            {/* Priority */}
            <div className="urgent-request-card__priority">

              <span className="priority-badge">
                <AlertCircle size={14} />
                {request.priority}
              </span>

            </div>


            {/* Action */}
            <a
              href="tel:+923122166216"
              className="urgent-request-card__call"
              aria-label={`Call regarding ${request.hospital}`}
            >
              <Phone size={17} />
              Call
            </a>

          </div>
        ))}

      </div>

    </section>
  );
}