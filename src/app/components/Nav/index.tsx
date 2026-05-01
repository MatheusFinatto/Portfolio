"use client";

import { useState, useEffect, useRef } from "react";
import { FiDownload } from "react-icons/fi";
import { useApp } from "../../context/AppContext";
import { t } from "../../translations";
import styles from "./nav.module.scss";

const SECTIONS = [
  "projects",
  "skills",
  "experience",
  "about",
  "contact",
] as const;

function SunIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

function FlagUS() {
  return (
    <svg width="20" height="14" viewBox="0 0 20 14" aria-hidden="true">
      <rect width="20" height="14" fill="#B22234" />
      <rect y="1.077" width="20" height="1.077" fill="#fff" />
      <rect y="3.231" width="20" height="1.077" fill="#fff" />
      <rect y="5.385" width="20" height="1.077" fill="#fff" />
      <rect y="7.538" width="20" height="1.077" fill="#fff" />
      <rect y="9.692" width="20" height="1.077" fill="#fff" />
      <rect y="11.846" width="20" height="1.077" fill="#fff" />
      <rect width="8" height="7.538" fill="#3C3B6E" />
    </svg>
  );
}

function FlagBR() {
  return (
    <svg width="20" height="14" viewBox="0 0 20 14" aria-hidden="true">
      <rect width="20" height="14" fill="#009C3B" />
      <polygon points="10,1 19,7 10,13 1,7" fill="#FEDF00" />
      <circle cx="10" cy="7" r="2.8" fill="#002776" />
    </svg>
  );
}

export default function Nav() {
  const { lang, setLang, theme, toggleTheme } = useApp();
  const copy = t[lang].nav;
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const cvFile =
    lang === "pt"
      ? "/Resume-Matheus-Finatto-pt-br.pdf"
      : "/Resume-Matheus-Finatto-en-us.pdf";

  // Scroll-spy
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" },
    );
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  // Close menu on scroll
  useEffect(() => {
    const close = () => setMenuOpen(false);
    if (menuOpen) window.addEventListener("scroll", close, { passive: true });
    return () => window.removeEventListener("scroll", close);
  }, [menuOpen]);

  return (
    <>
      <nav className={styles.nav}>
        <a className={styles.logo} href="#">
          mf.dev
        </a>

        {/* Desktop links */}
        <ul className={styles.links}>
          {SECTIONS.map((s) => (
            <li key={s}>
              <a
                href={`#${s}`}
                className={activeSection === s ? styles.active : ""}
              >
                {copy[s as keyof typeof copy]}
              </a>
            </li>
          ))}
          <li>
            <a href={cvFile} download className={styles.cvBtn}>
              <FiDownload size={10} /> {copy.resume}
            </a>
          </li>
          <li>
            <div className={styles.langToggle}>
              <button
                className={`${styles.langBtn} ${lang === "en" ? styles.langActive : ""}`}
                onClick={() => setLang("en")}
                title="English"
              >
                <FlagUS />
              </button>
              <button
                className={`${styles.langBtn} ${lang === "pt" ? styles.langActive : ""}`}
                onClick={() => setLang("pt")}
                title="Português (BR)"
              >
                <FlagBR />
              </button>
            </div>
          </li>
          <li>
            <button
              className={styles.themeBtn}
              onClick={toggleTheme}
              title="Toggle theme"
            >
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>
          </li>
        </ul>

        {/* Mobile right group */}
        <div className={styles.mobileRight}>
          <div className={styles.mobileControls}>
            <div className={styles.langToggle}>
              <button
                className={`${styles.langBtn} ${lang === "en" ? styles.langActive : ""}`}
                onClick={() => setLang("en")}
                title="English"
              >
                <FlagUS />
              </button>
              <button
                className={`${styles.langBtn} ${lang === "pt" ? styles.langActive : ""}`}
                onClick={() => setLang("pt")}
                title="Português (BR)"
              >
                <FlagBR />
              </button>
            </div>
            <button
              className={styles.themeBtn}
              onClick={toggleTheme}
              title="Toggle theme"
            >
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>
          </div>

          <button
            className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          {SECTIONS.map((s) => (
            <a
              key={s}
              href={`#${s}`}
              className={styles.mobileLink}
              onClick={() => setMenuOpen(false)}
            >
              {copy[s as keyof typeof copy]}
            </a>
          ))}
          <a
            href={cvFile}
            download
            className={styles.mobileLink}
            onClick={() => setMenuOpen(false)}
          >
            <FiDownload size={10} /> {copy.resume}
          </a>
        </div>
      )}
    </>
  );
}
