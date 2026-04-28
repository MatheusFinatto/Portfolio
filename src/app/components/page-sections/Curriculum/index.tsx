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

type Skill = { name: string; category: string };

const skills: Skill[] = [
  { name: "React", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "HTML5 & CSS3", category: "frontend" },
  { name: "GraphQL", category: "backend" },
  { name: "Apollo GraphQL", category: "backend" },
  { name: "Node.js", category: "backend" },
  { name: "NestJS", category: "backend" },
  { name: "Express.js", category: "backend" },
  { name: "REST APIs", category: "backend" },
  { name: "Ruby on Rails", category: "backend" },
  { name: "SQL", category: "database" },
  { name: "MongoDB", category: "database" },
  { name: "C++", category: "languages" },
  { name: "Java", category: "languages" },
  { name: "C#/.NET", category: "languages" },
  { name: "Python", category: "languages" },
  { name: "Ant Design", category: "ui" },
  { name: "Vitest", category: "tooling" },
  { name: "React Testing Library", category: "tooling" },
  { name: "Docker", category: "tooling" },
  { name: "Git", category: "tooling" },
  { name: "Responsive Design", category: "ui" },
  { name: "SCSS", category: "ui" },
];

const categories = [
  { id: "frontend", title: "Frontend", icon: <FaReact aria-hidden="true" /> },
  { id: "backend", title: "Backend", icon: <FaNodeJs aria-hidden="true" /> },
  { id: "database", title: "Database", icon: <FaDatabase aria-hidden="true" /> },
  { id: "languages", title: "Other Languages", icon: <FaCode aria-hidden="true" /> },
  { id: "ui", title: "UI / Styling", icon: <FaDesktop aria-hidden="true" /> },
  { id: "tooling", title: "Tooling & Testing", icon: <FaServer aria-hidden="true" /> },
];

const Curriculum = () => {
  return (
    <>
      <section id="CVDownload">
        <div className={styles.sectionHeading}>
          <h1>Experience</h1>
        </div>

        <div className={styles.experience} id="experience">
          <div className={styles.job}>
            <h3>Wonder Sistemas</h3>
            <p className={styles.jobTitle}>Software Developer</p>
            <p className={styles.jobDuration}>April 2021 - Present</p>
            <p className={styles.jobLocation}>
              Erechim, Rio Grande do Sul, Brazil
            </p>
            <ul className={styles.bulletList}>
              <li>
                Architected and delivered end-to-end the platform&apos;s expense
                management module — from data modeling and UI design to external
                service integrations — starting from scratch and now in use by
                dozens of client companies.
              </li>
              <li>
                Integrated AWS Textract for OCR parsing of fiscal invoices and
                built a scraper that extracts data from electronic invoices via
                QR code on the SEFAZ portal, eliminating manual data entry.
                Extended the Ruby on Rails BFF to support the full flow.
              </li>
              <li>
                Co-created and maintain a reusable React component library
                documented with JSDoc, standardizing UI patterns and accelerating
                delivery across a team of 6 developers.
              </li>
              <li>
                Covered critical flows with unit and snapshot tests (Vitest +
                React Testing Library) to prevent regressions in production.
              </li>
            </ul>
            <div className={styles.techTags}>
              <span className={styles.tag}>React</span>
              <span className={styles.tag}>TypeScript</span>
              <span className={styles.tag}>GraphQL</span>
              <span className={styles.tag}>Apollo</span>
              <span className={styles.tag}>NestJS</span>
              <span className={styles.tag}>AWS Textract</span>
              <span className={styles.tag}>Docker</span>
              <span className={styles.tag}>Vitest</span>
              <span className={styles.tag}>Ruby on Rails</span>
              <span className={styles.tag}>Ant Design</span>
            </div>
          </div>

          <div className={styles.job}>
            <h3>Compass.uol</h3>
            <p className={styles.jobTitle}>Chatbot Developer Intern</p>
            <p className={styles.jobDuration}>Feb. 2021 - Apr. 2021</p>
            <p className={styles.jobLocation}>
              Erechim, Rio Grande do Sul, Brazil
            </p>
            <ul className={styles.bulletList}>
              <li>
                Built chatbots in Node.js integrating IBM Watson Assistant and
                the Blip platform, focusing on conversational flow automation,
                external API integration, and backend development.
              </li>
            </ul>
            <div className={styles.techTags}>
              <span className={styles.tag}>JavaScript</span>
              <span className={styles.tag}>Node.js</span>
              <span className={styles.tag}>Blip Platform</span>
              <span className={styles.tag}>IBM Watson</span>
              <span className={styles.tag}>REST APIs</span>
            </div>
          </div>
        </div>

        <div className={styles.skillsContainer}>
          <div className={styles.sectionHeading}>
            <h1>Technical Skills</h1>
          </div>

          <div className={styles.skillsGrid}>
            {categories.map((category) => {
              const categorySkills = skills.filter(
                (s) => s.category === category.id
              );
              return (
                <div className={styles.skillCategory} key={category.id}>
                  <div className={styles.categoryHeader}>
                    <div className={styles.categoryIcon}>{category.icon}</div>
                    <h3>{category.title}</h3>
                  </div>
                  <div className={styles.skillChips}>
                    {categorySkills.map((skill) => (
                      <span key={skill.name} className={styles.skillChip}>
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section>
        <div className={styles.sectionHeading}>
          <h1>Education</h1>
        </div>

        <div className={styles.educationContainer}>
          <div className={styles.education}>
            <h3>
              Universidade Regional Integrada do Alto Uruguai e das Missões —
              URI
            </h3>
            <p className={styles.degree}>
              Bachelor&apos;s degree, Computer Science
            </p>
            <p className={styles.educationDuration}>Feb. 2021 - Dec. 2024</p>
          </div>

          <div className={styles.education}>
            <h3>HarvardX — EdX (Online)</h3>
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
            Available in English and Brazilian Portuguese with full experience
            and education detail.
          </h2>
          <CVDownload />
        </div>
      </section>
    </>
  );
};

export default Curriculum;
