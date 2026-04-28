"use client";
import { TypeAnimation } from "react-type-animation";
import styles from "./typewriter.module.scss";

const TypeWritter = () => {
  const sequence = [
    "React + Node developer",
    1600,
    "Building internal tools at scale",
    1600,
    "Open to remote roles (Europe / NA)",
    1600,
    "TypeScript · GraphQL · NestJS",
    1600,
  ];

  return (
    <div className={styles.typewriterWrapper}>
      <TypeAnimation
        sequence={sequence}
        wrapper="span"
        speed={65}
        className={styles.typewriterText}
        repeat={Infinity}
        preRenderFirstString
      />
    </div>
  );
};

export default TypeWritter;
