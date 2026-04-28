import React from "react";
import styles from "./nav.module.scss";

const navLinks = [
  { label: "About me", href: "#about" },
  { label: "Experience", href: "#CVDownload" },
  { label: "Projects", href: "#projects" },
];

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        {navLinks.map(({ label, href }) => (
          <li key={href}>
            <a href={href}>{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
