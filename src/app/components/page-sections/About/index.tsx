import React from "react";
import Contact from "./Contact";
import styles from "./about.module.scss";

const About = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className="section-header">
        <h1>About me</h1>
        <Contact />
      </div>

      <div className={styles.container}>
        <div className={styles.bioCard}>
          <div className={styles.bioInfo}>
            <h3 className={styles.jobTitle}>Hey, happy to meet you!</h3>
            <p className={styles.bioText}>
              I&apos;m a web developer who loves creating cool digital
              experiences! With backgrounds in both Computer Science and
              Business, I enjoy bringing creative ideas to life through code.
              I&apos;m passionate about React and front-end development, and
              I&apos;m always excited to learn and try out new technologies!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
