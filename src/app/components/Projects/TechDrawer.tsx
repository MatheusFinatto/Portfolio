'use client';

import { useEffect, useState } from 'react';
import { Drawer } from 'vaul';
import type { Decision, Project } from '../../data/projects';
import { t, type Lang } from '../../translations';
import styles from './TechDrawer.module.scss';

interface Props {
  project: Project;
  lang: Lang;
  onClose: () => void;
}

export default function TechDrawer({ project, lang, onClose }: Props) {
  const [open, setOpen] = useState(true);
  const [direction, setDirection] = useState<'right' | 'bottom'>('right');

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 600px)');
    const apply = () => setDirection(mq.matches ? 'bottom' : 'right');
    apply();
    mq.addEventListener('change', apply);
    return () => mq.removeEventListener('change', apply);
  }, []);

  const copy = t[lang].projects;
  const decisions: Decision[] = project.techDecisions?.[lang] ?? [];

  return (
    <Drawer.Root
      open={open}
      onOpenChange={(o) => {
        setOpen(o);
        if (!o) onClose();
      }}
      direction={direction}
      handleOnly={direction === 'bottom'}
    >
      <Drawer.Portal>
        <Drawer.Overlay className={styles.overlay} />
        <Drawer.Content className={styles.panel} aria-describedby={undefined}>
          {direction === 'bottom' && (
            <div className={styles.grabHandleWrap}>
              <Drawer.Handle className={styles.grabHandle} />
            </div>
          )}
          <div className={styles.header}>
            <div className={styles.headerMain}>
              <div className={styles.projectNum}>{project.year}</div>
              <Drawer.Title className={styles.projectName}>{project.name[lang]}</Drawer.Title>
              <div className={styles.links}>
                {project.github ? (
                  <a href={project.github} className={styles.link} target="_blank" rel="noopener noreferrer">
                    ↗ {copy.github}
                  </a>
                ) : (
                  <span className={styles.linkDisabled}>⟳ {copy.soon}</span>
                )}
                {project.demo && (
                  <a href={project.demo} className={styles.link} target="_blank" rel="noopener noreferrer">
                    ↗ {copy.demo}
                  </a>
                )}
              </div>
            </div>
            <button className={styles.close} onClick={() => setOpen(false)} aria-label="Close">✕</button>
          </div>

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
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
