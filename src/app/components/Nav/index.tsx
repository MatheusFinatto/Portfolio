'use client';

import { useState, useEffect, useRef } from 'react';
import { useApp } from '../../context/AppContext';
import { t } from '../../translations';
import styles from './nav.module.scss';

const SECTIONS = ['projects', 'skills', 'experience', 'about', 'contact'] as const;

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export default function Nav() {
  const { lang, setLang, theme, toggleTheme } = useApp();
  const copy = t[lang].nav;
  const [activeSection, setActiveSection] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const cvFile = lang === 'pt'
    ? '/Resume-Matheus-Finatto-pt-br.pdf'
    : '/Resume-Matheus-Finatto-en-us.pdf';

  // Scroll-spy
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); });
      },
      { rootMargin: '-40% 0px -50% 0px' }
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
    if (menuOpen) window.addEventListener('scroll', close, { passive: true });
    return () => window.removeEventListener('scroll', close);
  }, [menuOpen]);

  return (
    <>
      <nav className={styles.nav}>
        <a className={styles.logo} href="#">mf.dev</a>

        {/* Desktop links */}
        <ul className={styles.links}>
          {SECTIONS.map((s) => (
            <li key={s}>
              <a
                href={`#${s}`}
                className={activeSection === s ? styles.active : ''}
              >
                {copy[s as keyof typeof copy]}
              </a>
            </li>
          ))}
          <li>
            <a href={cvFile} download className={styles.cvBtn}>
              ↓ {copy.resume}
            </a>
          </li>
          <li>
            <div className={styles.langToggle}>
              <button
                className={`${styles.langBtn} ${lang === 'en' ? styles.langActive : ''}`}
                onClick={() => setLang('en')}
              >EN</button>
              <button
                className={`${styles.langBtn} ${lang === 'pt' ? styles.langActive : ''}`}
                onClick={() => setLang('pt')}
              >PT</button>
            </div>
          </li>
          <li>
            <button className={styles.themeBtn} onClick={toggleTheme} title="Toggle theme">
              {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            </button>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
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
          <a href={cvFile} download className={styles.mobileLink} onClick={() => setMenuOpen(false)}>
            ↓ {copy.resume}
          </a>
          <div className={styles.mobileUtils}>
            <div className={styles.langToggle}>
              <button className={`${styles.langBtn} ${lang === 'en' ? styles.langActive : ''}`} onClick={() => setLang('en')}>EN</button>
              <button className={`${styles.langBtn} ${lang === 'pt' ? styles.langActive : ''}`} onClick={() => setLang('pt')}>PT</button>
            </div>
            <button className={styles.themeBtn} onClick={toggleTheme} title="Toggle theme">
              {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
