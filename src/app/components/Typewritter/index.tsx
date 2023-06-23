"use client";
import { TypeAnimation } from "react-type-animation";

const Typerwritter = ({ fullText }: { fullText: string }) => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "I am a web developer;",
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        "I am a Computer Science student;",
        1000,
        "I am a holder of a business administration degree;",
        1000,
        "I am a lover of learning new things;",
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: "1rem", display: "inline-block" }}
      repeat={Infinity}
    />
  );
};

export default Typerwritter;
