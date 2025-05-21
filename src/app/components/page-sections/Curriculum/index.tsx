import React from "react";
import CVDownload from "./CVDownload";
import styles from "./curriculum.module.scss";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCode,
  FaDesktop,
  FaServer,
} from "react-icons/fa";

const Curriculum = () => (
  <>
    <section id="CVDownload">
      <div className={styles.expHeading}>
        <h1>Experience</h1>
      </div>

      <div className={styles.experience} id="experience">
        <div className={styles.job}>
          <h3>Wonder Sistemas</h3>
          <p className={styles.jobTitle}>Software Developer</p>
          <p className={styles.jobDuration}>Jun. 2022 - Present</p>
          <p className={styles.jobLocation}>
            Erechim, Rio Grande do Sul, Brazil
          </p>
          <p>
            As a web tools developer for an ERP software, I specialize in
            utilizing cutting-edge technologies such as React, GraphQL, Apollo
            GraphQL, and Ant Design.
          </p>
          <div className={styles.techTags}>
            <span className={styles.tag}>React</span>
            <span className={styles.tag}>GraphQL</span>
            <span className={styles.tag}>Apollo</span>
            <span className={styles.tag}>Ant Design</span>
            <span className={styles.tag}>TypeScript</span>
          </div>
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
          <div className={styles.techTags}>
            <span className={styles.tag}>JavaScript</span>
            <span className={styles.tag}>Node.js</span>
            <span className={styles.tag}>Blip Platform</span>
            <span className={styles.tag}>IBM Watson</span>
            <span className={styles.tag}>REST APIs</span>
          </div>
        </div>
      </div>

      <div className={styles.skillsSection}>
        <h3>Technical Skills</h3>
        <div className={styles.skillsGrid}>
          <div className={styles.skillCard}>
            <div className={styles.skillIcon}>
              <FaReact />
            </div>
            <div className={styles.skillName}>Frontend</div>
            <div className={styles.skillLevel}>React, TypeScript, HTML/CSS</div>
          </div>
          <div className={styles.skillCard}>
            <div className={styles.skillIcon}>
              <FaNodeJs />
            </div>
            <div className={styles.skillName}>Backend</div>
            <div className={styles.skillLevel}>Node.js, Express</div>
          </div>
          <div className={styles.skillCard}>
            <div className={styles.skillIcon}>
              <FaDatabase />
            </div>
            <div className={styles.skillName}>Database</div>
            <div className={styles.skillLevel}>SQL, MongoDB</div>
          </div>
          <div className={styles.skillCard}>
            <div className={styles.skillIcon}>
              <FaCode />
            </div>
            <div className={styles.skillName}>Languages</div>
            <div className={styles.skillLevel}>
              JavaScript, Python, C++, Java
            </div>
          </div>
          <div className={styles.skillCard}>
            <div className={styles.skillIcon}>
              <FaDesktop />
            </div>
            <div className={styles.skillName}>UI/UX</div>
            <div className={styles.skillLevel}>
              Ant Design, Responsive Design
            </div>
          </div>
          <div className={styles.skillCard}>
            <div className={styles.skillIcon}>
              <FaServer />
            </div>
            <div className={styles.skillName}>Other</div>
            <div className={styles.skillLevel}>GraphQL, REST APIs</div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className={styles.expHeading}>
        <h1>Education</h1>
      </div>

      <div className={styles.educationContainer}>
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
          <p className={styles.educationDuration}>Jan. 2021 - Dec. 2021</p>
        </div>

        <div className={styles.education}>
          <h3>Universidade Federal de Santa Maria</h3>
          <p className={styles.degree}>
            Bachelor&apos;s degree, Business Administration
          </p>
          <p className={styles.educationDuration}>Feb. 2016 - Dec. 2020</p>
        </div>
      </div>
    </section>

    <section>
      <div className={styles.cvSection}>
        <h1>Download my CV</h1>
        <h2>
          Feel free to take a look at my CV in English or Brazilian Portuguese
          if you&apos;d like more details about my experience and education. 😁
        </h2>
        <CVDownload />
      </div>
    </section>
  </>
);

export default Curriculum;
