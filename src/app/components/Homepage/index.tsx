/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styles from "./homepage.module.scss";
import Image from "next/image";
import TypeWritter from "../TypeWritter";
import Portfolio from "../Portfolio";

const Homepage = () => {
  return (
    <main className={styles.main}>
      <section className={styles.splitScreen}>
        <div className={styles.heading}>
          <div className={styles.profileImageContainer}>
            <Image
              className={styles.profileImage}
              src="/images/profile.jpg"
              alt="Picture of Matheus Finatto"
              width={100}
              height={100}
            />
          </div>
          <div className={styles.headingText}>
            <h1>I'm Matheus Finatto. </h1>
            <TypeWritter fullText="A  web developer with a passion for programming. " />
          </div>
        </div>
        <div className={styles.profileInfo}>
          <h1>This is my showcase.</h1>
          <p>
            Here, you will be able to see my portfolio, projects, and
            achievements.
          </p>
          <p>Hope you enjoy! :D</p>
        </div>

        {/* <div className={styles.splitScreen}>
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
        </div> */}
      </section>
      <Portfolio />
    </main>
  );
};

export default Homepage;
