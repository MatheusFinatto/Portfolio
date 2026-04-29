"use client";

import Image from "next/image";
import { useApp } from "../../context/AppContext";
import { t } from "../../translations";
import styles from "./hero.module.scss";

export default function Hero() {
  const { lang } = useApp();
  const copy = t[lang].hero;

  return (
    <section className={styles.hero}>
      <div className={styles.left}>
        <div className={styles.eyebrow}>{copy.eyebrow}</div>

        <h1 className={styles.name}>
          Matheus
          <br />
          <span>Finatto</span>
        </h1>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNum}>{copy.exp}</span>
            <span className={styles.statLabel}>{copy.expLabel}</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNum}>{copy.clients}</span>
            <span className={styles.statLabel}>{copy.clientsLabel}</span>
          </div>
        </div>

        <p
          className={styles.tagline}
          dangerouslySetInnerHTML={{ __html: copy.tagline }}
        />

        <div className={styles.ctas}>
          <a href="#projects" className="btn-primary">
            {copy.cta1}
          </a>
          <a href="#contact" className="btn-ghost">
            {copy.cta2}
          </a>
        </div>

        <div className={styles.meta}>
          <div className={styles.metaItem}>
            <span>{copy.exp} years</span>
            Wonder Sistemas
          </div>
          <div className={styles.metaItem}>
            <span>{copy.loc}</span>
            {copy.remote}
          </div>
        </div>
      </div>

      <div className={styles.right}>
        <Image
          src="/photo.png"
          alt="Matheus Finatto"
          fill
          style={{ objectFit: "cover", objectPosition: "center top" }}
          sizes="420px"
          priority
          className={styles.photo}
        />
        <div className={styles.photoTag}>matheusfinatto.dev</div>
      </div>
    </section>
  );
}
