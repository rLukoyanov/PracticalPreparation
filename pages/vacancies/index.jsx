import React, { useEffect, useState } from "react";

import Vacancia from "../../components/vacancies/Vacancia";

import styles from "../../components/vacancies/vacancies.module.scss";
import axios from "axios";

export default function Vacancies() {
    const [vacancies, setVacancies] = useState([]);

    useEffect(async () => {
        const fetchVacancies = async () => {
            const { data } = await axios.get("/api/vacancy/allVacancies");

            setVacancies(data);
        };

        fetchVacancies();
    }, []);

    return (
        <div className={styles.vacancies}>
            {vacancies.length === 0 ? "Подождите..." : <></>}
            {vacancies.map((vacancyItem) => (
                <Vacancia
                    text={vacancyItem.description}
                    title={vacancyItem.vacancy_name}
                    advantages={vacancyItem.advantages}
                    price={vacancyItem.salary}
                    image={vacancyItem.image}
                />
            ))}
        </div>
    );
}
