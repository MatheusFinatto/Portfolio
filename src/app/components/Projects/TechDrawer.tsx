'use client';

import { useEffect, useRef, useState } from 'react';
import type { Decision, Project } from '../../data/projects';
import { t, type Lang } from '../../translations';
import styles from './TechDrawer.module.scss';

interface Props {
  project: Project;
  lang: Lang;
  onClose: () => void;
}

const CLOSE_THRESHOLD_PX = 120;
const CLOSE_VELOCITY = 0.5; // px/ms

export default function TechDrawer({ project, lang, onClose }: Props) {
  const panelRef = useRef<HTMLDivElement>(null);
  const decisionsRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<{
    startY: number;
    startT: number;
    lastY: number;
    lastT: number;
    active: boolean;
    fromScroll: boolean;
  } | null>(null);
  const [dragY, setDragY] = useState(0);
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const isMobile = () => typeof window !== 'undefined' && window.matchMedia('(max-width: 600px)').matches;

  const onTouchStart = (e: React.TouchEvent) => {
    if (!isMobile()) return;
    const target = e.target as HTMLElement;
    const fromScroll = !!decisionsRef.current?.contains(target);
    // if touch starts inside scroll area but not at top, let native scroll handle it
    if (fromScroll && (decisionsRef.current?.scrollTop ?? 0) > 0) return;
    const tch = e.touches[0];
    dragRef.current = {
      startY: tch.clientY,
      startT: performance.now(),
      lastY: tch.clientY,
      lastT: performance.now(),
      active: true,
      fromScroll,
    };
  };

  const onTouchMove = (e: React.TouchEvent) => {
    const d = dragRef.current;
    if (!d || !d.active) return;
    const tch = e.touches[0];
    const dy = tch.clientY - d.startY;
    if (dy <= 0) {
      // upward — if from scroll area, abort drag, let native scroll work
      if (d.fromScroll) {
        dragRef.current = null;
        setDragY(0);
        setDragging(false);
        return;
      }
      setDragY(0);
      d.lastY = tch.clientY;
      d.lastT = performance.now();
      return;
    }
    if (!dragging) setDragging(true);
    setDragY(dy);
    d.lastY = tch.clientY;
    d.lastT = performance.now();
  };

  const onTouchEnd = () => {
    const d = dragRef.current;
    if (!d) return;
    const dy = d.lastY - d.startY;
    const dt = Math.max(1, d.lastT - d.startT);
    const v = dy / dt;
    dragRef.current = null;
    setDragging(false);
    if (dy > CLOSE_THRESHOLD_PX || v > CLOSE_VELOCITY) {
      onClose();
    } else {
      setDragY(0);
    }
  };

  const copy = t[lang].projects;
  const decisions: Decision[] = project.techDecisions?.[lang] ?? [];

  const panelStyle = dragY
    ? { transform: `translateY(${dragY}px)`, transition: dragging ? 'none' : 'transform 0.2s ease' }
    : undefined;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        ref={panelRef}
        className={styles.panel}
        style={panelStyle}
        onClick={(e) => e.stopPropagation()}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onTouchCancel={onTouchEnd}
      >
        <div className={styles.grabHandle} aria-hidden="true" />
        <div className={styles.header}>
          <div className={styles.headerMain}>
            <div className={styles.projectNum}>{project.id} / {project.year}</div>
            <div className={styles.projectName}>{project.name[lang]}</div>
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
          <button className={styles.close} onClick={onClose} aria-label="Close">✕</button>
        </div>

        <div ref={decisionsRef} className={styles.decisions}>
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
