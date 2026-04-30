'use client';

import { useEffect, useRef, useState } from 'react';
import { useApp } from '../../context/AppContext';
import { t } from '../../translations';
import { featuredProjects, type Project } from '../../data/projects';
import TechDrawer from './TechDrawer';
import styles from './projects.module.scss';

export default function Projects() {
  const { lang } = useApp();
  const copy = t[lang].projects;
  const gridRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  useEffect(() => {
    if (!gridRef.current) return;
    const cards = gridRef.current.querySelectorAll<HTMLElement>('.' + styles.card);
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) (e.target as HTMLElement).classList.add(styles.visible);
        });
      },
      { threshold: 0.1 }
    );
    cards.forEach((c) => obs.observe(c));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="projects" className="section-wrap">
      <div className="section-label">{copy.label}</div>
      <h2 className="section-title">{copy.title}</h2>

      <div className={styles.grid} ref={gridRef}>
        {featuredProjects.map((p, idx) => (
          <div
            className={styles.card}
            key={p.id}
            style={{ transitionDelay: `${idx * 0.08}s` }}
          >
            <div className={styles.cardNum}>{p.id} / {p.year}</div>

            {(p.featured || p.isNew) && (
              <div className={styles.badges}>
                {p.featured && <span className={styles.badgeFeatured}>Featured</span>}
                {p.isNew && <span className={styles.badgeNew}>New</span>}
              </div>
            )}

            <h3 className={styles.cardName}>{p.name[lang]}</h3>
            <p className={styles.cardDesc}>{p.desc[lang]}</p>

            <div className={styles.stack}>
              {p.stack.map((s) => (
                <span className="stack-tag" key={s}>{s}</span>
              ))}
            </div>

            <div className={styles.links}>
              {p.github ? (
                <a href={p.github} className={styles.link} target="_blank" rel="noopener noreferrer">
                  ↗ {copy.github}
                </a>
              ) : (
                <span className={styles.linkDisabled}>⟳ {copy.soon}</span>
              )}
              {p.demo && (
                <a href={p.demo} className={styles.link} target="_blank" rel="noopener noreferrer">
                  ↗ {copy.demo}
                </a>
              )}
            </div>

            {p.techDecisions && (
              <button
                className={styles.decisionsBtn}
                onClick={() => setActiveProject(p)}
              >
                + {copy.decisions}
              </button>
            )}
          </div>
        ))}
      </div>

      {activeProject && (
        <TechDrawer
          project={activeProject}
          lang={lang}
          narrativeLabel={copy.decisionsNarrative}
          technicalLabel={copy.decisionsTechnical}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  );
}
