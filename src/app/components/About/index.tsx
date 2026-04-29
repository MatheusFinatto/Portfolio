'use client';

import { useApp } from '../../context/AppContext';
import { t } from '../../translations';
import styles from './about.module.scss';

export default function About() {
  const { lang } = useApp();
  const copy = t[lang].about;

  return (
    <section id="about" className="section-wrap">
      <div className="section-label">{copy.label}</div>
      <h2 className="section-title">{copy.title}</h2>

      <div className={styles.grid}>
        <div className={styles.text}>
          <p dangerouslySetInnerHTML={{ __html: copy.p1 }} />
          <p dangerouslySetInnerHTML={{ __html: copy.p2 }} />
        </div>

        <div className={styles.aside}>
          {[
            [copy.locLabel,    copy.loc,    null,       false],
            [copy.eduLabel,    copy.edu,    null,       true],
            [copy.langLabel,   copy.lang,   null,       false],
            [copy.statusLabel, copy.status, '#34d399',  false],
          ].map(([k, v, c, html]) => (
            <div className={styles.row} key={k as string}>
              <span className={styles.key}>{k}</span>
              {html
                ? <span className={styles.val} dangerouslySetInnerHTML={{ __html: v as string }} />
                : <span className={styles.val} style={c ? { color: c as string } : {}}>{v}</span>
              }
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
