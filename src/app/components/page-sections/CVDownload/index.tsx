import React from "react";
import styles from "./CVDownload.module.scss";

const CVDownload = () => {
  return (
    <section id="CVDownload">
      <div>
        <h1>Download my CV</h1>
        <h2>
          If you are interested, you can take a look on my CV in english or
          Brazilian portuguese :D
        </h2>
      </div>
      <div className={styles.buttonsContainer}>
        <a
          href="/Resume-Matheus-Finatto-en-us.pdf"
          download="CV-Matheus-Finatto-en-us.pdf"
        >
          <button>Download CV (en-us)</button>
        </a>
        <a
          href="/Resume-Matheus-Finatto-pt-br.pdf"
          download="CV-Matheus-Finatto-pt-br.pdf"
        >
          <button>Download CV (pt-br)</button>
        </a>
      </div>
    </section>
  );
};

export default CVDownload;
