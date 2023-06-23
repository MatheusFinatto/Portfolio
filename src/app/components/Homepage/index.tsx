/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styles from "./homepage.module.scss";
import Image from "next/image";
import Typerwritter from "../Typewritter";
import Portfolio from "../Portfolio";

const Homepage = () => {
  return (
    <main className={styles.main}>
      <div>
        <section>
          <div className={styles.heading}>
            <div>
              <Image
                className={styles.profileImage}
                src="/images/profile.jpg"
                alt="Picture of Matheus Finatto"
                width={100}
                height={100}
              />
            </div>
            <div>
              <h1>I'm Matheus Finatto. </h1>
              <Typerwritter fullText="A  web developer with a passion for programming. " />
            </div>
          </div>
          <div>
            <p>
              I'm pursuing a degree in Computer Science, currently in the 5th
              semester out of 8. I also hold a bachelor's degree in Business
              Administration. With advanced proficiency in English, I strive to
              excel in the field of web development. I find great joy in
              exploring the possibilities of React and continuously expanding my
              knowledge.
            </p>
            <p>
              {" "}
              I'm excited to showcase my skills, projects, and achievements.{" "}
            </p>
          </div>
        </section>
        <p>
          Feel free to browse through my portfolio and reach out if you have any
          inquiries, collaboration opportunities, or simply want to connect.
          Hope you enjoy! :D
        </p>
        <div className={styles.splitScreen}>
          <div>
            <p>
              My name is Matheus Finatto, a brazilian web developer with a
              passion for programming. Through this portfolio, I'm excited to
              showcase my skills, projects, and achievements.
            </p>
            <p>
              Here, ill share some of my work, that I have created over the
              years, using a variety of technologies, with enphasis on HTML,
              CSS, and JavaScript, and React. With years of experience and a
              strong
            </p>
            <p>
              Feel free to browse through my portfolio and reach out if you have
              any inquiries, collaboration opportunities, or simply want to
              connect. Hope you enjoy! :D
            </p>
          </div>
          <div>
            <p>
              My name is Matheus Finatto, a brazilian web developer with a
              passion for programming. Through this portfolio, I'm excited to
              showcase my skills, projects, and achievements.
            </p>
            <p>
              Here, ill share some of my work, that I have created over the
              years, using a variety of technologies, with enphasis on HTML,
              CSS, and JavaScript, and React. With years of experience and a
              strong
            </p>
            <p>
              Feel free to browse through my portfolio and reach out if you have
              any inquiries, collaboration opportunities, or simply want to
              connect. Hope you enjoy! :D
            </p>
          </div>
        </div>
      </div>
      <Portfolio />
    </main>
  );
};

export default Homepage;
