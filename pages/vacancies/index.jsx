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

    const vacanciesArray = [
        {
            text: 'В фитнес бар "Мандарин" требуется бармен. Нижнекамск, пр. Шинников, 37 Orange Fitness. Тел. +7 (913) 772-16-07 Артём',
            title: "Бармен",
            advantages: ["Без опыта", "Полная занятость", "Сменный график"],
            price: "от 22 000 руб",
            image: "https://sun9-8.userapi.com/impg/sTJ5sw3Wle8z4RNuR7hhwjf86lCWr27L8BRKIQ/0l02DRLY_Rs.jpg?size=1280x881&quality=95&sign=93d17be63082dcf011d1d877ebe9f9ff&type=album",
        },
    ];

    return (
        <div className={styles.vacancies}>
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
