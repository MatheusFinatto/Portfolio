'use client';

import { useEffect } from 'react';
import type { Project } from '../../data/projects';
import type { Lang } from '../../translations';
import styles from './TechDrawer.module.scss';

interface Props {
  project: Project;
  lang: Lang;
  label: string;
  onClose: () => void;
}

export default function TechDrawer({ project, lang, label, onClose }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const decisions = project.techDecisions?.[lang] ?? [];

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.panel} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <div>
            <div className={styles.projectNum}>{project.id} / {project.year}</div>
            <div className={styles.projectName}>{project.name[lang]}</div>
          </div>
          <button className={styles.close} onClick={onClose} aria-label="Close">✕</button>
        </div>

        <div className={styles.drawerLabel}>{label}</div>

        <div className={styles.decisions}>
          {decisions.map((d, i) => (
            <div key={i} className={styles.decision}>
              <div className={styles.decisionTitle}>{d.title}</div>
              <p
                className={styles.decisionBody}
                dangerouslySetInnerHTML={{ __html: d.body }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
