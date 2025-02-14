import React from "react";
import CVDownload from "./CVDownload";
import styles from "./curriculum.module.scss";

const Curriculum = () => (
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
          <p className={styles.jobDuration}>Oct. 2022 - Present</p>
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
          <p className={styles.jobDuration}>Dec. 2021 - Mar. 2022</p>
          <p className={styles.jobLocation}>
            Erechim, Rio Grande do Sul, Brazil
          </p>
          <p>
            Learning related to Javascript, Node.js, Blip chatbot platform, IBM
            Watson Assistant, and other tools for making chatbots and
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
            Universidade Regional Integrada do Alto Uruguai e das Missões - URI
          </h3>
          <p className={styles.degree}>
            Bachelor&apos;s degree, Computer Science
          </p>
          <p className={styles.educationDuration}>Feb. 2021 - Dec. 2024</p>
        </div>

        <div className={styles.education}>
          <h3>HarvardX - EdX, Online</h3>
          <p className={styles.degree}>
            CS50x: Introduction to Computer Science
          </p>
          <p className={styles.educationDuration}>Jan. 2021 - Dec. 2024</p>
        </div>

        <div className={styles.education}>
          <h3>Universidade Federal de Santa Maria</h3>
          <p className={styles.degree}>
            Bachelor&apos;s degree, Business Administration
          </p>
          <p className={styles.educationDuration}>Feb. 2016 - Dec. 2020</p>
        </div>

        {/* Add more education sections as needed */}
      </div>
    </section>
    <section>
      <div>
        <h1>Download my CV</h1>
        <h2>
          Feel free to take a look at my CV in English or Brazilian Portuguese
          if you&apos;d like more details about my experience and education. 😁
        </h2>
      </div>
      <CVDownload />
    </section>
  </>
);

export default Curriculum;
