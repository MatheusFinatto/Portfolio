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
    console.log(
      "🚀 ~ file: index.tsx:17 ~ fetchRepos ~ fetchedRepos:",
      fetchedRepos
    );
    setRepos(fetchedRepos);
  };

  useEffect(() => {
    fetchRepos();
  }, []);

  return (
    <section>
      <h1>Projects</h1>
      <ul className={styles.repoList}>
        {repos.map(({ id, name, html_url }) => (
          <li key={id}>
            <a href={html_url}>{name}</a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Portfolio;
