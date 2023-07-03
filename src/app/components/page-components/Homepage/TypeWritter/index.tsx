"use client";
import { TypeAnimation } from "react-type-animation";

const TypeWritter = () => {
  return (
    <TypeAnimation
      sequence={[
        "And I am a web developer 💻;",
        1400,
        "And I am a Computer Science student 🎓;",
        1400,
        "And I am a Bachelor in Business Administration 🏢;",
        1400,
        "And I am a lover of learning new things 📚;",
        1400,
        "And I am terrible at taking selfies 🤣;",
        2000,
      ]}
      wrapper="span"
      speed={60}
      style={{ fontSize: "1rem", display: "inline-block" }}
      repeat={Infinity}
    />
  );
};

export default TypeWritter;
