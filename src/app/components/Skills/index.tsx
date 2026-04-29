'use client';

import { useApp } from '../../context/AppContext';
import { t } from '../../translations';
import styles from './skills.module.scss';

const GROUPS = [
  { key: 'lang',  label: { en: 'Languages',     pt: 'Linguagens'      }, tags: ['TypeScript','JavaScript','Python','SQL'],                              hl: ['TypeScript','JavaScript'] },
  { key: 'fe',    label: { en: 'Frontend',       pt: 'Frontend'        }, tags: ['React','Next.js','Redux','TailwindCSS','SCSS','Styled Components'],    hl: ['React','Next.js'] },
  { key: 'be',    label: { en: 'Backend',        pt: 'Backend'         }, tags: ['NestJS','Node.js','Express','REST','GraphQL'],                         hl: ['NestJS','Node.js'] },
  { key: 'db',    label: { en: 'Databases',      pt: 'Bancos de Dados' }, tags: ['PostgreSQL','MongoDB','MySQL'],                                        hl: ['PostgreSQL'] },
  { key: 'infra', label: { en: 'Infra & DevOps', pt: 'Infra & DevOps'  }, tags: ['Docker','Redis','BullMQ','AWS','GCP','GitHub Actions'],               hl: ['Docker','Redis'] },
  { key: 'test',  label: { en: 'Testing',        pt: 'Testes'          }, tags: ['Vitest','React Testing Library'],                                      hl: [] },
] as const;

export default function Skills() {
  const { lang } = useApp();
  const copy = t[lang].skills;

  return (
    <section id="skills" className="section-wrap">
      <div className="section-label">{copy.label}</div>
      <h2 className="section-title">{copy.title}</h2>
      <div className={styles.grid}>
        {GROUPS.map((g) => (
          <div className={styles.group} key={g.key}>
            <div className={styles.groupLabel}>{g.label[lang]}</div>
            <div className={styles.tags}>
              {g.tags.map((tag) => (
                <span
                  key={tag}
                  className={`${styles.tag} ${(g.hl as readonly string[]).includes(tag) ? styles.tagHl : ''}`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
