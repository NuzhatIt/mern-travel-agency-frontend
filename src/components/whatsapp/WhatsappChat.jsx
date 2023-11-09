import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./whatsapp-chat.css";

const WhatsAppChat = () => {
  const phoneNumber = ""; // Replace with the actual phone number

  return (
    <div className="whatsapp_float">
      <a
        href={`https://wa.me/${phoneNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className=""
      >
        <FaWhatsapp className="whatsapp_icon-position whatsapp_icon-style" />
      </a>
    </div>
  );
};

export default WhatsAppChat;
