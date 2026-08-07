import React from "react";
import {
  UserRound,
  MapPin,
  Phone,
  Droplets,
  CheckCircle2,
  Clock3,
} from "lucide-react";

import "./DonorAvailability.css";

const donors = [
  {
    name: "Syed Waleed",
    group: "O+",
    location: "Karachi",
    status: "Available",
    lastDonation: "2 months ago",
    phone: "03122166216",
  },
  {
    name: "Abdullah Shakeel",
    group: "A-",
    location: "Lahore",
    status: "Ready",
    lastDonation: "3 months ago",
    phone: "03122166216",
  },
  {
    name: "Dawwod Shakeel",
    group: "B+",
    location: "Islamabad",
    status: "Available",
    lastDonation: "4 months ago",
    phone: "03122166216",
  },
  {
    name: "Ahmed Khan",
    group: "AB+",
    location: "Rawalpindi",
    status: "Available",
    lastDonation: "1 month ago",
    phone: "03122166216",
  },
];

export default function DonorAvailability() {
  return (
    <section className="donor-availability">

      {/* Header */}
      <div className="donor-availability__header">

        <div>
          <span className="donor-availability__eyebrow">
            Donor Management
          </span>

          <h2>Donor Availability</h2>

          <p>
            View available donors and their blood groups for quick matching.
          </p>
        </div>

        <div className="donor-availability__count">
          <UserRound size={17} />
          <span>{donors.length} Active Donors</span>
        </div>

      </div>


      {/* Donor Cards */}
      <div className="donor-availability__grid">

        {donors.map((donor) => (
          <div className="donor-card" key={donor.name}>

            {/* Top */}
            <div className="donor-card__top">

              <div className="donor-card__avatar">
                <UserRound size={24} />
              </div>

              <div className="donor-card__status">
                <span></span>
                {donor.status}
              </div>

            </div>


            {/* Name */}
            <h3>{donor.name}</h3>


            {/* Blood Group */}
            <div className="donor-card__blood">

              <Droplets size={18} />

              <div>
                <span>Blood Group</span>
                <strong>{donor.group}</strong>
              </div>

            </div>


            {/* Details */}
            <div className="donor-card__details">

              <div>
                <MapPin size={15} />
                <span>{donor.location}</span>
              </div>

              <div>
                <Clock3 size={15} />
                <span>Last donation: {donor.lastDonation}</span>
              </div>

            </div>


            {/* Action */}
            <a
              href={`tel:+92${donor.phone.substring(1)}`}
              className="donor-card__call"
            >
              <Phone size={16} />
              Contact Donor
            </a>

          </div>
        ))}

      </div>


      {/* Bottom Notice */}
      <div className="donor-availability__notice">

        <CheckCircle2 size={19} />

        <p>
          Donor information should be verified before arranging any blood
          donation or emergency request.
        </p>

      </div>

    </section>
  );
}