"use client";

import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import styles from "./contact.module.scss";

const EMAIL = "matheusfinatto2@gmail.com";

const Contact = ({ size = 50 }: { size?: number }) => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className={styles.contact}>
      <a
        href="https://github.com/MatheusFinatto"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className={styles.iconLink}
      >
        <FaGithub aria-hidden="true" />
      </a>

      <a
        href="https://www.linkedin.com/in/matheusfinatto/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className={styles.iconLink}
      >
        <FaLinkedin aria-hidden="true" />
      </a>

      <a
        href="https://api.whatsapp.com/send?phone=5554991683475&text=Hey%2C%20Matheus!%20I%20saw%20your%20profile%20on%20your%20website."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className={styles.iconLink}
      >
        <FaWhatsapp aria-hidden="true" />
      </a>

      <a
        href={`mailto:${EMAIL}`}
        className={styles.emailLink}
        aria-label="Send email"
      >
        <FaEnvelope aria-hidden="true" />
        <span>{EMAIL}</span>
      </a>

      <button
        onClick={copyEmail}
        className={styles.copyBtn}
        aria-label="Copy email address"
        title="Copy email"
      >
        {copied ? "Copied!" : "Copy email"}
      </button>
    </div>
  );
};

export default Contact;
