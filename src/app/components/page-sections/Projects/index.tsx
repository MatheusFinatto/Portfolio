import React from "react";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import styles from "./projects.module.scss";
import { featuredProjects } from "@/app/data/projects";

const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.projectsHeader}>
        <h1>Projects</h1>
        <p>
          A curated selection of personal and open-source projects. Most of my
          production work lives in private repos at Wonder Sistemas — these
          represent side projects and experiments.
        </p>
      </div>

      <ul className={styles.projectList}>
        {featuredProjects.map((project) => (
          <li key={project.id} className={styles.projectCard}>
            <div className={styles.imageWrapper}>
              {project.imageUrl ? (
                <Image
                  src={project.imageUrl}
                  alt={`${project.name} screenshot`}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              ) : (
                <div className={styles.imagePlaceholder} aria-hidden="true" />
              )}
            </div>

            <div className={styles.cardBody}>
              <h3 className={styles.projectName}>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.name}
                </a>
              </h3>

              <p className={styles.description}>{project.description}</p>

              <div className={styles.techTags}>
                {project.techStack.map((tech) => (
                  <span key={tech} className={styles.tag}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className={styles.cardActions}>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnOutline}
                aria-label={`View ${project.name} on GitHub`}
              >
                <FaGithub aria-hidden="true" />
                GitHub
              </a>

              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.btnPrimary}
                  aria-label={`Live demo for ${project.name}`}
                >
                  <FaExternalLinkAlt aria-hidden="true" />
                  Live demo
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
