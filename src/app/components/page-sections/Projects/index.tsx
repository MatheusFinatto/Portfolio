"use client";

import React, { useEffect, useState } from "react";
import styles from "./projects.module.scss";
import Image from "next/image";

if (
  process.env.NODE_ENV === "development" &&
  !process.env.NEXT_PUBLIC_GITHUB_TOKEN
) {
  console.warn("Access token not found");
}

type RepoType = {
  id: number;
  name: string;
  html_url: string;
  homepage: string | null;
  description: string | null;
  languages_url: string;
  created_at: string;
};

const Projects = () => {
  const [repos, setRepos] = useState<RepoType[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchRepos = async () => {
    const headers = {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
    };

    try {
      const response = await fetch(
        `https://api.github.com/users/MatheusFinatto/starred`,
        { headers }
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const fetchedRepos = await response.json();

      if (Array.isArray(fetchedRepos) && fetchedRepos.length > 0) {
        const sortedRepos = fetchedRepos.sort((a: RepoType, b: RepoType) =>
          b.created_at.localeCompare(a.created_at)
        );
        setRepos(sortedRepos);
      } else {
        throw new Error("No repositories found or fetched data is invalid.");
      }
    } catch (err) {
      console.error("Failed to fetch repositories:", err);
      setRepos([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRepos();
  }, []);

  const deployedAppButtonConditionalRender = (
    name: string,
    homepage: string | null
  ) => {
    if (name !== "Portfolio") {
      if (homepage) {
        return (
          <a href={homepage!} target="_blank">
            <button className={styles.deployedAppButton}>Live demo</button>
          </a>
        );
      }
    } else {
      return (
        <a>
          <button
            className={styles.disabled}
            onClick={() => alert("You already are on my portfolio ;)")}
          >
            Live demo
          </button>
        </a>
      );
    }
  };

  if (loading) {
    return (
      <section id="projects" className={styles.projects}>
        <div className={styles.projectsHeader}>
          <h1>Projects</h1>
          <h2>
            Here are displayed my GitHub projects. Most of them are deployed on
            hosting sites, and can be accessed through the button &#34;See the
            deployed app&#34;.
          </h2>
          <div className="loading-spinner">
            <p>Loading projects...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.projectsHeader}>
        <h1>Projects</h1>
        <h2>
          Here are displayed my GitHub projects. Most of them are deployed on
          hosting sites, and can be accessed through the button &#34;See the
          deployed app&#34;.
        </h2>
      </div>
      <ul className={styles.repoList}>
        {repos?.map((repo: RepoType) => {
          const { id, name, homepage, description, html_url, created_at } =
            repo;
          const imageUrl = `https://raw.githubusercontent.com/MatheusFinatto/${name}/main/public/images/Screenshot.png`;

          return (
            <li key={id}>
              <h3>
                <a href={html_url} target="_blank">
                  {name}
                </a>
              </h3>
              <Image
                src={imageUrl}
                alt={`${name} screenshot`}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
                priority={false}
              />
              <p className={styles.description}>{description}</p>
              <p>
                Created at {new Date(created_at).toLocaleDateString("pt-BR")}
              </p>
              <div className={styles.repoButtons}>
                <a href={html_url} target="_blank">
                  <button>See on GitHub</button>
                </a>
                {deployedAppButtonConditionalRender(name, homepage)}
              </div>
            </li>
          );
        })}
      </ul>
      {!repos.length && (
        <div className={styles.errorMessage}>
          <span>
            Error loading repos. This is probably due to GitHub&apos;s API rate
            limit.
            <br />
            <br />
            Access{" "}
            <a href="https://github.com/MatheusFinatto" target="_blank">
              github.com/MatheusFinatto
            </a>{" "}
            to see them
          </span>
        </div>
      )}
    </section>
  );
};

export default Projects;
