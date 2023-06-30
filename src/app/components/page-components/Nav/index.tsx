"use client";

import React from "react";
import styles from "./nav.module.scss";

const Nav = () => {
  const scrollToSection = (event: any, sectionId: any) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    console.log(
      "🚀 ~ file: index.tsx:10 ~ scrollToSection ~ section:",
      section
    );
    section!.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <a href="#about" onClick={(event) => scrollToSection(event, "about")}>
            About me
          </a>
        </li>
        <li>
          <a
            href="#CVDownload"
            onClick={(event) => scrollToSection(event, "CVDownload")}
          >
            My CV
          </a>
        </li>
        <li>
          <a
            href="#projects"
            onClick={(event) => scrollToSection(event, "projects")}
          >
            Projects
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
