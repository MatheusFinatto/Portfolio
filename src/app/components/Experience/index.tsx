'use client';

import { useApp } from '../../context/AppContext';
import { t } from '../../translations';
import styles from './experience.module.scss';

export default function Experience() {
  const { lang } = useApp();
  const copy = t[lang].experience;

  return (
    <section id="experience" className="section-wrap">
      <div className="section-label">{copy.label}</div>
      <h2 className="section-title">{copy.title}</h2>

      {copy.jobs.map((job, i) => (
        <div key={i} className={styles.entry}>
          <div className={styles.meta}>
            <div className={styles.company}>{job.company}</div>
            <div className={styles.period}>{job.period}</div>
            <div className={styles.location}>{job.location}</div>
          </div>

          <div className={styles.content}>
            <div className={styles.role}>{job.role}</div>
            <div className={styles.sub}>{job.sub}</div>

            <ul className={styles.bullets}>
              {job.bullets.map((b, j) => (
                <li key={j} dangerouslySetInnerHTML={{ __html: b }} />
              ))}
            </ul>

            <div className={styles.stack}>
              {job.stack.map((s) => (
                <span className="stack-tag" key={s}>{s}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
