import React from "react";
import styles from "./header.module.scss";
import Nav from "../Nav";
import Image from "next/image";
import TypeWritter from "../Homepage/TypeWritter";

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <div className={styles.profileContainer}>
          <Image
            src="/images/Matheus Finatto.jpeg"
            alt="Picture of Matheus Finatto"
            width={120}
            height={120}
            priority
          />
        </div>
        <h1>Hi, my name is Matheus Finatto :)</h1>
        <div className={styles.typewriterWrapper}>
          <TypeWritter />
        </div>
        <h2>And this is my portfolio showcase</h2>
        <Nav />
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 160">
        <path
          fill="#111827"
          d="M0,64L40,74.7C80,85,160,107,240,117.3C320,128,400,128,480,122.7C560,117,640,107,720,96C800,85,880,75,960,90.7C1040,107,1120,149,1200,154.7C1280,160,1360,128,1400,112L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
    </header>
  );
};

export default Header;
