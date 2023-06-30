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
    try {
      const cachedRepos = localStorage.getItem("cachedRepos");

      if (cachedRepos) {
        const parsedRepos = JSON.parse(cachedRepos);
        setRepos(parsedRepos);
        setLoading(false);
        return;
      } else {
        console.log("fetching repos...");
        const response = await fetch(
          `https://api.github.com/users/MatheusFinatto/starred`
        );
        const fetchedRepos = await response.json();
        if (fetchedRepos.length) {
          fetchedRepos.sort((a: RepoType, b: RepoType) =>
            b.created_at.localeCompare(a.created_at)
          );
        }
        setRepos(fetchedRepos);
        localStorage.setItem("cachedRepos", JSON.stringify(fetchedRepos));
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRepos();
  }, []);

  if (loading) {
    return (
      <section id="projects" className={styles.projects}>
        <div>
          <h1>Projects</h1>
          <h2>
            Here are displayed my GitHub projects. Some of them are deployed on
            hosting sites, and can be accessed through the button &#34;See the
            deployed app&#34;.
          </h2>
          <p>Loading...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className={styles.projects}>
      <div>
        <h1>Projects</h1>
        <h2>
          Here are displayed my GitHub projects. Some of them are deployed on
          hosting sites, and can be accessed through the button &#34;See the
          deployed app&#34;.
        </h2>
      </div>
      <ul className={styles.repoList}>
        {repos.map((repo: RepoType) => {
          const { id, name, homepage, description, html_url, created_at } =
            repo;
          return (
            <li key={id}>
              <h3>
                <a href={html_url} target="_blank">
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
        })}
      </ul>
      {!repos.length && (
        <div>
          <span>
            Error loading repos. This is probably due to GitHub&apos;s API rate
            limit
            <br />
            <br />
            Access{" "}
            <a href="https://github.com/MatheusFinatto" target="_blank">
              github.com/MatheusFinatto
            </a>{" "}
            to see them
          </span>
          <br />
          <br />
          <p>And please report this error to me if you see it :)</p>
          <br />
          <a>
            <button onClick={() => alert("Thank you for reporting")}>
              Report error
            </button>
          </a>
        </div>
      )}
    </section>
  );
};

export default Projects;
