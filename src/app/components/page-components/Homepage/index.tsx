/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styles from "./homepage.module.scss";
import Portfolio from "../../page-sections/Projects";
import About from "../../page-sections/About";
import Curriculum from "../../page-sections/Curriculum";

const Homepage = () => {
  return (
    <main className={styles.main}>
      <About />
      <Curriculum />
      <Portfolio />
    </main>
  );
};

export default Homepage;
