import React from "react";
import {
  Droplets,
  Package,
  AlertTriangle,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";

import "./BloodInventory.css";

const bloodStock = [
  {
    group: "A+",
    units: 82,
    status: "Good",
    percentage: 82,
  },
  {
    group: "A-",
    units: 34,
    status: "Good",
    percentage: 55,
  },
  {
    group: "B+",
    units: 68,
    status: "Good",
    percentage: 68,
  },
  {
    group: "B-",
    units: 21,
    status: "Low",
    percentage: 35,
  },
  {
    group: "AB+",
    units: 47,
    status: "Good",
    percentage: 63,
  },
  {
    group: "AB-",
    units: 13,
    status: "Critical",
    percentage: 22,
  },
  {
    group: "O+",
    units: 96,
    status: "Good",
    percentage: 96,
  },
  {
    group: "O-",
    units: 18,
    status: "Low",
    percentage: 30,
  },
];

export default function BloodInventory() {
  const totalUnits = bloodStock.reduce(
    (total, item) => total + item.units,
    0
  );

  return (
    <section className="blood-inventory">

      {/* ================================
          HEADER
      ================================= */}

      <div className="blood-inventory__header">

        <div>
          <span className="blood-inventory__eyebrow">
            Blood Stock Management
          </span>

          <h2>Blood Inventory</h2>

          <p>
            Monitor available blood units and identify groups that need
            replenishment.
          </p>
        </div>

        <div className="blood-inventory__total">
          <Package size={18} />

          <div>
            <span>Total Stock</span>
            <strong>{totalUnits} Units</strong>
          </div>
        </div>

      </div>


      {/* ================================
          BLOOD STOCK GRID
      ================================= */}

      <div className="blood-inventory__grid">

        {bloodStock.map((blood) => (
          <div
            className={`blood-stock-card blood-stock-card--${blood.status.toLowerCase()}`}
            key={blood.group}
          >

            {/* Card Top */}

            <div className="blood-stock-card__top">

              <div className="blood-stock-card__icon">
                <Droplets size={21} />
              </div>

              <strong className="blood-stock-card__group">
                {blood.group}
              </strong>

            </div>


            {/* Units */}

            <div className="blood-stock-card__units">

              <strong>{blood.units}</strong>

              <span>Units Available</span>

            </div>


            {/* Progress */}

            <div className="blood-stock-card__progress">

              <div className="blood-stock-card__progress-track">
                <span
                  style={{
                    width: `${blood.percentage}%`,
                  }}
                />
              </div>

              <span>{blood.percentage}%</span>

            </div>


            {/* Status */}

            <div className="blood-stock-card__status">

              {blood.status === "Good" && (
                <CheckCircle2 size={15} />
              )}

              {blood.status === "Low" && (
                <AlertTriangle size={15} />
              )}

              {blood.status === "Critical" && (
                <AlertTriangle size={15} />
              )}

              <span>{blood.status} Stock</span>

            </div>

          </div>
        ))}

      </div>


      {/* ================================
          INVENTORY SUMMARY
      ================================= */}

      <div className="blood-inventory__summary">

        <div className="inventory-summary__item">

          <div className="inventory-summary__icon">
            <CheckCircle2 size={19} />
          </div>

          <div>
            <strong>5</strong>
            <span>Healthy Stock Groups</span>
          </div>

        </div>


        <div className="inventory-summary__item">

          <div className="inventory-summary__icon">
            <AlertTriangle size={19} />
          </div>

          <div>
            <strong>2</strong>
            <span>Low Stock Groups</span>
          </div>

        </div>


        <div className="inventory-summary__item">

          <div className="inventory-summary__icon">
            <TrendingUp size={19} />
          </div>

          <div>
            <strong>320+</strong>
            <span>Units Managed</span>
          </div>

        </div>

      </div>

    </section>
  );
}