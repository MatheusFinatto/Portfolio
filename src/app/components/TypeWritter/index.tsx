"use client";
import { TypeAnimation } from "react-type-animation";

const TypeWritter = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "And I am a web developer;",
        1000,
        "And I am a Computer Science student;",
        1000,
        "And I am a Bachelor in Business Administration;",
        1000,
        "And I am a lover of learning new things;",
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: "1rem", display: "inline-block" }}
      repeat={Infinity}
    />
  );
};

export default TypeWritter;
