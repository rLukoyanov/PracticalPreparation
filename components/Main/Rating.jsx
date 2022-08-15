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
            <p className={styles.title}>
                Рейтинг компаний, принимающих студентов на производственную
                практику
            </p>
            <div className={styles.container}>
                {companies.length > 0 ? (
                    <Companies companies={companies} />
                ) : (
                    <p>Компаний нет</p>
                )}
            </div>
        </div>
    );
}
