import React, { useEffect, useState } from "react";

import axios from "axios";
import Companies from "./Companies";

import styles from "./Rating.module.scss";

import protocol from "../../protocol";

export default function Rating({ host = "" }) {
  const [companies, setCompanies] = useState([
    {
      imagePath: "",
      name: "Татнефть",
    },
    {
      imagePath: "",
      name: "Татнефть",
    },
    {
      imagePath: "",
      name: "Татнефть",
    },
    {
      imagePath: "",
      name: "Татнефть",
    },
    {
      imagePath: "",
      name: "Татнефть",
    },
    {
      imagePath: "",
      name: "Татнефть",
    },
    {
      imagePath: "",
      name: "Татнефть",
    },
    {
      imagePath: "",
      name: "Татнефть",
    },
    {
      imagePath: "",
      name: "Татнефть",
    },
    {
      imagePath: "",
      name: "Татнефть",
    },
    {
      imagePath: "",
      name: "Татнефть",
    },
    {
      imagePath: "",
      name: "Татнефть",
    },
    {
      imagePath: "",
      name: "Татнефть",
    },
    {
      imagePath: "",
      name: "Татнефть",
    },
  ]);

  return (
    <div className={styles.rating}>
      <div className={styles.container}>
        <p className={styles.title}>
          Рейтинг компаний, принимающих студентов на производственную практику
        </p>
        <ul>
          {companies.length > 0 ? (
            <Companies companies={companies} />
          ) : (
            <p>Компаний нет</p>
          )}
        </ul>
      </div>
    </div>
  );
}
