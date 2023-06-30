"use client";

import React, { useState, useEffect } from "react";
import styles from "./footer.module.scss";
import Contact from "../../page-sections/About/Contact";

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      <span>© Matheus Finatto 2023</span>
      <span>Contact me on my social media!</span>
      <Contact size={35} />

      {showButton && (
        <button className={styles.backToTopBtn} onClick={scrollToTop}>
          ↑
        </button>
      )}
    </footer>
  );
};

export default Footer;
