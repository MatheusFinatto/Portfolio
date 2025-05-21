"use client";
import React, { useEffect, useRef } from "react";
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

const skills = [
  { name: "React", category: "frontend", level: 95, icon: <FaReact /> },
  { name: "TypeScript", category: "frontend", level: 85 },
  { name: "JavaScript", category: "frontend", level: 95 },
  { name: "HTML5 & CSS3", category: "frontend", level: 95 },
  { name: "GraphQL", category: "backend", level: 80 },
  { name: "Node.js", category: "backend", level: 75, icon: <FaNodeJs /> },
  { name: "Express.js", category: "backend", level: 75 },
  { name: "REST APIs", category: "backend", level: 80 },
  { name: "SQL", category: "database", level: 85, icon: <FaDatabase /> },
  { name: "MongoDB", category: "database", level: 80 },
  { name: "C++", category: "languages", level: 70, icon: <FaCode /> },
  { name: "Java", category: "languages", level: 65 },
  { name: "C#/.NET", category: "languages", level: 65 },
  { name: "Python", category: "languages", level: 80 },
  { name: "Ant Design", category: "ui", level: 85, icon: <FaDesktop /> },
  { name: "Responsive Design", category: "ui", level: 90 },
];

// Organize skills by category
const categories = [
  { id: "frontend", title: "Frontend" },
  { id: "backend", title: "Backend" },
  { id: "database", title: "Database" },
  { id: "languages", title: "Other Languages" },
  { id: "ui", title: "UI/UX" },
];

const Curriculum = () => {
  // Type the ref correctly for TypeScript
  const skillBarsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Animation for skill bars
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Type cast entry.target to HTMLElement
            const target = entry.target as HTMLElement;
            target.style.width = target.dataset.width || "0%";
            target.style.opacity = "1";
          }
        });
      },
      { threshold: 0.1 }
    );

    skillBarsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      skillBarsRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

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
            <p className={styles.jobDuration}>April 2022 - Present</p>
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
              Learning related to Javascript, Node.js, Blip chatbot platform,
              IBM Watson Assistant, and other tools for making chatbots and
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

        {/* Integrated Skills Section */}
        <div className={styles.skillsContainer}>
          <div className={styles.sectionHeading}>
            <h1>Technical Skills</h1>
          </div>

          <div className={styles.integratedSkillsContainer}>
            {categories.map((category, categoryIndex) => {
              // Find a skill with an icon for this category
              const categoryIcon =
                skills.find(
                  (skill) => skill.category === category.id && skill.icon
                )?.icon || null;

              // Get all skills for this category
              const categorySkills = skills.filter(
                (skill) => skill.category === category.id
              );

              return (
                <div className={styles.skillCategory} key={categoryIndex}>
                  <div className={styles.categoryHeader}>
                    <div className={styles.categoryIcon}>{categoryIcon}</div>
                    <h3>{category.title}</h3>
                  </div>

                  <div className={styles.skillsList}>
                    {categorySkills.map((skill, skillIndex) => (
                      <div className={styles.skillItem} key={skillIndex}>
                        <div className={styles.skillInfo}>
                          <span className={styles.skillName}>{skill.name}</span>
                          <span className={styles.skillPercentage}>
                            {skill.level}%
                          </span>
                        </div>
                        <div className={styles.skillProgress}>
                          <div
                            className={styles.skillProgressBar}
                            ref={(el) =>
                              (skillBarsRef.current[
                                categoryIndex * 10 + skillIndex
                              ] = el)
                            }
                            data-width={`${skill.level}%`}
                            style={{ width: 0, opacity: 0 }}
                          ></div>
                        </div>
                      </div>
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
              Universidade Regional Integrada do Alto Uruguai e das Missões -
              URI
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
            if you&apos;d like more details about my experience and education.
            😁
          </h2>
          <CVDownload />
        </div>
      </section>
    </>
  );
};

export default Curriculum;
