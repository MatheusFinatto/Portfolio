/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styles from "./homepage.module.scss";
import Image from "next/image";
import TypeWritter from "./TypeWritter";
import Portfolio from "../../page-sections/Projects";
import CVDownload from "../../page-sections/CVDownload";
import About from "../../page-sections/About";

const Homepage = () => {
  return (
    <main className={styles.main}>
      <section className={styles.splitScreen}>
        <div className={styles.heading}>
          <div className={styles.profileImageContainer}>
            <Image
              className={styles.profileImage}
              src="/images/profile.jpg"
              alt="Picture of Matheus Finatto"
              width={100}
              height={100}
            />
          </div>
          <div className={styles.headingText}>
            <h1>I'm Matheus Finatto. </h1>
            <TypeWritter />
          </div>
        </div>
        <div className={styles.profileInfo}>
          <h1>What is this site for?</h1>
          <p>
            Here, you will be able to see my portfolio, some things about me and
            download my CV.
          </p>
          <br />
          <p>Hope you like it :)</p>
        </div>
      </section>

      <About />
      <CVDownload />
      <Portfolio />
    </main>
  );
};

export default Homepage;
