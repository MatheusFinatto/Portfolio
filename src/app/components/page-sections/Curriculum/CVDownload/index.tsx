import React from "react";
import styles from "./CVDownload.module.scss";

const CVDownload = () => {
  return (
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
  );
};

export default CVDownload;
