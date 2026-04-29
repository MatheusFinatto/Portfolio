'use client';

import { useApp } from '../../context/AppContext';
import { t } from '../../translations';
import styles from './footer.module.scss';

export default function Footer() {
  const { lang } = useApp();
  const copy = t[lang];

  return (
    <footer className={styles.footer}>
      <span className={styles.text}>Matheus Finatto © {new Date().getFullYear()}</span>
      <span className={styles.text}>{copy.footer}</span>
    </footer>
  );
}
