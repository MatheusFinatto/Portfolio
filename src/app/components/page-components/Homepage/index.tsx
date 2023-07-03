/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styles from "./homepage.module.scss";
import Image from "next/image";
import TypeWritter from "./TypeWritter";
import Portfolio from "../../page-sections/Projects";
import About from "../../page-sections/About";
import Curriculum from "../../page-sections/Curriculum";

const Homepage = () => {
  return (
    <main className={styles.main}>
      <section className={styles.splitScreen}>
        <div className={styles.heading}>
          <div className={styles.profileImageContainer}>
            <Image
              className={styles.profileImage}
              src="/images/Ma.png"
              alt="Picture of Matheus Finatto"
              width={100}
              height={100}
            />
          </div>
          <div className={styles.headingText}>
            <h1>I'm Matheus Finatto. </h1>
            <span style={{ lineHeight: "20px" }}>
              <TypeWritter />
            </span>
          </div>
        </div>
        <div className={styles.profileInfo}>
          <h1>What is this site for?</h1>
          <p>
            Here, you will be able to see some info about me, download my CV and
            see some of my best projects.
          </p>
          <br />
          <p>Hope you like it :)</p>
        </div>
      </section>

      <About />
      <Curriculum />
      <Portfolio />
    </main>
  );
};

export default Homepage;
