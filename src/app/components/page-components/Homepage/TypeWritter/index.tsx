"use client";
import { TypeAnimation } from "react-type-animation";
import styles from "./typewriter.module.scss";

const TypeWritter = () => {
  // Breaking longer phrases into two lines for better presentation
  const sequence = [
    "And I am a web developer 💻",
    1400,
    "And I hold a Bachelor's in\nComputer Science 🎓",
    1400,
    "And I hold a Bachelor's in\nBusiness Administration 🏢",
    1400,
  ];

  return (
    <div className={styles.typewriterWrapper}>
      <TypeAnimation
        sequence={sequence}
        wrapper="span"
        speed={70}
        className={styles.typewriterText}
        repeat={Infinity}
      />
    </div>
  );
};

export default TypeWritter;
