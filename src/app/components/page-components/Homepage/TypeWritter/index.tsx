"use client";
import { TypeAnimation } from "react-type-animation";

const TypeWritter = () => {
  return (
    <TypeAnimation
      sequence={[
        "I am a web developer 💻;",
        2000,
        "I hold a Bachelor's in Computer Science 🎓;",
        1400,
        "Also, I have a Bachelor's in Business Administration 🏢;",
        1400,
        "I am passionate about learning new things 📚;",
        1400,
        "And I'm terrible at taking selfies 🤣;",
        1400,
      ]}
      wrapper="span"
      speed={70}
      style={{ fontSize: "1rem", display: "inline-block" }}
      repeat={Infinity}
    />
  );
};

export default TypeWritter;
