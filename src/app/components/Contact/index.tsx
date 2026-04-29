'use client';

import { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { t } from '../../translations';
import styles from './contact.module.scss';

export default function Contact() {
  const { lang } = useApp();
  const copy = t[lang].contact;
  const [toast, setToast] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('matheusfinatto2@gmail.com').then(() => {
      setToast(true);
      setTimeout(() => setToast(false), 2200);
    });
  };

  return (
    <>
      <section id="contact" className="section-wrap">
        <div className="section-label">{copy.label}</div>
        <h2 className="section-title">{copy.title}</h2>

        <div className={styles.links}>
          <button onClick={copyEmail} className={styles.link}>
            ✉ matheusfinatto2@gmail.com
          </button>
          <a
            href="https://linkedin.com/in/matheusfinatto"
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            ↗ linkedin.com/in/matheusfinatto
          </a>
          <a
            href="https://github.com/matheusfinatto"
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            ↗ github.com/matheusfinatto
          </a>
        </div>
      </section>

      <div className={`toast ${toast ? 'show' : ''}`}>
        {copy.copied}
      </div>
    </>
  );
}
