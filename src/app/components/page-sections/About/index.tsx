import React from "react";
import Contact from "./Contact";
import styles from "./about.module.scss";

const About = () => {
  return (
    <section id="about">
      <div>
        <h1>About me</h1>
        <Contact />
        <p className={styles.about}>
          <span>
            Hey there! 👋 I&apos;m Matheus Finatto, a web developer with a
            passion for React ⚛️.
          </span>
          <br />
          I&apos;m not just a coding wizard 🧙‍♂️, but also a Computer Science
          student 🎓 and a proud holder of a Bachelor&apos;s degree in Business
          Administration 🏢.
          <br />
          <br />
          When it comes to tech, I&apos;ve got some serious skills! I excel at
          React, TypeScript, JavaScript, HTML5, CSS3, Apollo GraphQL, Node.js,
          and Express.js. Currently, I&apos;m putting my web development
          expertise to work at Wonder Sistemas, where I&apos;m all about that
          front-end magic with React.
          <br />
          <br />
          But that&apos;s not all! I&apos;m not just into front-end development
          💻. I&apos;m also fascinated by the world of back-end development ⚙️,
          machine learning 🤖, and networks 🌐. I love exploring new
          possibilities and pushing the boundaries of what&apos;s possible in
          the digital realm 🌌 📚.
          <br />
          <br />
          Got any burning questions? Feel free to reach out and let&apos;s chat!
          📩
          <br />
          <br />
          <span>Stay awesome and keep coding! 💪</span>
        </p>
      </div>
    </section>
  );
};

export default About;
