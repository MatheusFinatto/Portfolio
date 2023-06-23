"use client";

import React from "react";
import styles from "./nav.module.scss";
const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <a href="#about">About me</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
