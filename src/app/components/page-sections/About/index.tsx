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

      <p className={styles.about}>
        <span>Hello, I&apos;m Matheus Finatto, a web developer.</span>
        <br />
        I have Bachelor&apos;s degrees in both Computer Science and Business
        Administration.
        <br />
        <br />
        My expertise includes React, TypeScript, JavaScript, HTML5, CSS3,
        GraphQL, REST APIs, Node.js, and Express.js. I also have experience with
        C++, Java, C# (.NET Framework), and Python.
        <br />
        <br />
        Currently, I work focusing on front-end development with React.
        <br />
        <br />
        Beyond that, I am also interested in back-end development and machine
        learning. I am always looking to explore new technologies and enhance my
        skill set.
        <br />
        <br />
        Feel free to reach out if you have any questions or would like to
        connect. 😃
      </p>
    </section>
  );
};

export default About;
