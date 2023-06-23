"use client";

import React, { useEffect, useState } from "react";
import styles from "./portfolio.module.scss";

const Portfolio = () => {
  const [repos, setRepos] = useState([{ id: 1, name: "", html_url: "" }]);
  const fetchRepos = async () => {
    const response = await fetch(
      "https://api.github.com/users/MatheusFinatto/repos",
      {
        headers: {
          Authorization: "Bearer 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",
        },
      }
    );
    const fetchedRepos = await response.json();
    setRepos(fetchedRepos);
  };

  useEffect(() => {
    fetchRepos();
  }, []);

  return (
    <section className={styles.portfolio}>
      <h1>Projects</h1>
      <ul className={styles.repoList}>
        {/* TODO: Make the repos appear in cards with css */}
        {repos.length ? (
          repos.map(({ id, name, html_url }) => (
            <li key={id}>
              <a href={html_url}>{name}</a>
            </li>
          ))
        ) : (
          <div>
            <span>
              Error loading repos. Access github.com/MatheusFinatto to see them
            </span>
            <p>And please report this error to me if you see it :)</p>
          </div>
        )}
      </ul>
    </section>
  );
};

export default Portfolio;
