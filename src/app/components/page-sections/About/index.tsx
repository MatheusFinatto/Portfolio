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
            <h3 className={styles.jobTitle}>Hi, I&apos;m Matheus.</h3>
            <p className={styles.bioText}>
              Full-stack developer with 5+ years of production experience,
              specializing in React, TypeScript, Node.js, and GraphQL. I
              currently build web tooling for a production ERP platform at
              Wonder Sistemas — working daily with Apollo GraphQL, NestJS,
              Express, and Ant Design.
            </p>
            <p className={styles.bioText}>
              I care about developer ergonomics, clean API design, and shipping
              features that hold up under real users — not just demos. Computer
              Science degree, Business Administration background, and a genuine
              interest in the intersection of both.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
