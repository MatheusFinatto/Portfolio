import React from "react";
import CVDownload from "./CVDownload";
import styles from "./curriculum.module.scss";

const Curriculum = () => {
  const calculatedMonths = () => {
    const now = new Date();
    const start = new Date(2022, 9, 1);
    const diff = now.getTime() - start.getTime();
    const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
    return months;
  };

  return (
    <>
      <section id="CVDownload">
        <div className={styles.expHeading}>
          <h1
            style={{
              marginBottom: 5,
            }}
          >
            Experience
          </h1>
          <span>(as developer)</span>
        </div>

        <div className={styles.experience} id="experience">
          <div className={styles.job}>
            <h3>Wonder Sistemas</h3>
            <p className={styles.jobTitle}>Software Developer</p>
            <p className={styles.jobDuration}>
              October 2022 - Present ({calculatedMonths()} months)
            </p>
            <p className={styles.jobLocation}>
              Erechim, Rio Grande do Sul, Brazil
            </p>
            <p>
              As a web tools developer for an ERP software, I specialize in
              utilizing cutting-edge technologies such as React, GraphQL, Apollo
              GraphQL, and Ant Design.
            </p>
          </div>

          <div className={styles.job}>
            <h3>Compass.uol</h3>
            <p className={styles.jobTitle}>Chatbot Take Intern</p>
            <p className={styles.jobDuration}>
              December 2021 - March 2022 (4 months)
            </p>
            <p className={styles.jobLocation}>
              Erechim, Rio Grande do Sul, Brazil
            </p>
            <p>
              Learning related to Javascript, Node.js, Blip chatbot platform,
              IBM Watson Assistant, and other tools for making chatbots and
              integrations with APIs.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div>
          <h1>Education</h1>

          <div className={styles.education}>
            <h3>
              Universidade Regional Integrada do Alto Uruguai e das Missões -
              URI
            </h3>
            <p className={styles.degree}>
              Bachelor&apos;s degree, Computer Science
            </p>
            <p className={styles.educationDuration}>
              February 2021 - December 2024
            </p>
          </div>

          <div className={styles.education}>
            <h3>Universidade Federal de Santa Maria</h3>
            <p className={styles.degree}>
              Bachelor&apos;s degree, Business Administration
            </p>
            <p className={styles.educationDuration}>2016 - 2020</p>
          </div>

          {/* Add more education sections as needed */}
        </div>
      </section>
      <section>
        <div>
          <h1>Download my CV</h1>
          <h2>
            If you are interested in seeing more detail about my experiences and
            education (such as non-dev exp or minor courses taken), you can take
            a look on my CV in english or Brazilian portuguese :D
          </h2>
        </div>
        <CVDownload />
      </section>
    </>
  );
};

export default Curriculum;
