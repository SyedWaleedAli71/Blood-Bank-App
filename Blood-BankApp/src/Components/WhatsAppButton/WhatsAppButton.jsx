import React from "react";
import "./WhatsAppButton.css";
import WhatsappIcon from "../../assets/Images/whatsapp6.jpg"; // Ensure you have a WhatsApp icon in your assets

export default function WhatsAppButton() {
  const phoneNumber = "923122166216";

  const message = encodeURIComponent(
    "Hello, I need assistance regarding the Blood Bank."
  );

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappURL}
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <span className="whatsapp-icon"> <img src={WhatsappIcon} alt="WhatsApp" /></span>

      <span className="whatsapp-tooltip">
        Chat with us on WhatsApp
      </span>
    </a>
  );
}