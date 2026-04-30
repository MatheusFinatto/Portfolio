'use client';

import { useEffect, useState } from 'react';
import styles from './backToTop.module.scss';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.9);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <button
      type="button"
      onClick={toTop}
      className={`${styles.btn} ${visible ? styles.visible : ''}`}
      aria-label="Back to top"
    >
      <span className={styles.arrow} aria-hidden>↑</span>
    </button>
  );
}
