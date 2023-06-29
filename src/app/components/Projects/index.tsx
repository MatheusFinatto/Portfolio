"use client";

import React, { useEffect, useState } from "react";
import styles from "./projects.module.scss";
import { config } from "dotenv";
config();

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
    setLoading(true);
    const authToken = process.env.AUTH_TOKEN || "";
    const response = await fetch(
      "https://api.GitHub.com/users/MatheusFinatto/starred",
      {
        headers: {
          Authorization: authToken,
        },
      }
    );
    const fetchedRepos: RepoType[] = await response.json();
    fetchedRepos.sort((a, b) => b.created_at.localeCompare(a.created_at));
    console.log(
      "🚀 ~ file: index.tsx:21 ~ fetchRepos ~ fetchedRepos:",
      fetchedRepos
    );
    setRepos(fetchedRepos);
    setLoading(false);
  };

  useEffect(() => {
    fetchRepos();
  }, []);

  if (loading) {
    return (
      <section className={styles.projects}>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section className={styles.projects}>
      <h1>Projects</h1>
      <h2>
        Here are displayed my GitHub projects. Some of them are deployed on
        hosting sites, and can be acessed through the button &#34;See the
        deployed app&#34;.
      </h2>
      <ul className={styles.repoList}>
        {/* TODO: Make the repos appear in cards with css */}
        {repos.length ? (
          repos.map((repo: RepoType) => {
            const { id, name, homepage, description, html_url, created_at } =
              repo;
            return (
              <li key={id}>
                <h3>
                  <a
                    href={html_url}
                    target="_blank"
                    style={{ textDecoration: "none" }}
                  >
                    {name}
                  </a>
                </h3>
                <p className={styles.description}>{description}</p>
                <p>
                  Created at {new Date(created_at).toLocaleDateString("pt-BR")}
                </p>
                <div className={styles.repoButtons}>
                  <a href={html_url} target="_blank">
                    <button>See on GitHub</button>
                  </a>
                  {homepage && (
                    <a href={homepage} target="_blank">
                      <button>See the deployed app</button>
                    </a>
                  )}
                </div>
              </li>
            );
          })
        ) : (
          <div>
            <span>
              Error loading repos. Access GitHub.com/MatheusFinatto to see them
            </span>
            <p>And please report this error to me if you see it :)</p>
          </div>
        )}
      </ul>
    </section>
  );
};

export default Projects;
