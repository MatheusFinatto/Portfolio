"use client";

import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaMailBulk,
  FaEnvelope,
} from "react-icons/fa";
import styles from "./contact.module.scss";

const Contact = ({ size = 50 }: { size?: number }) => {
  const email = "matheusfinatto2@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    alert("Email 'matheusfinatto2@gmail.com' copied to clipboard!");
  };

  return (
    <div className={styles.contact}>
      <a
        href="https://github.com/MatheusFinatto"
        target="_blank"
        style={{ width: size, height: size }}
      >
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/matheusfinatto/"
        target="_blank"
        style={{ width: size, height: size }}
      >
        <FaLinkedin />
      </a>
      <a
        href="https://www.instagram.com/matheusfinatto/"
        target="_blank"
        style={{ width: size, height: size }}
      >
        <FaInstagram />
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=5554991683475&text=Hey%2C%20Matheus!%20I%20saw%20your%20profile%20on%20your%20website."
        target="_blank"
        style={{ width: size, height: size }}
      >
        <FaWhatsapp />
      </a>
      <a onClick={copyToClipboard} style={{ width: size, height: size }}>
        <FaEnvelope />
      </a>
    </div>
  );
};

export default Contact;
