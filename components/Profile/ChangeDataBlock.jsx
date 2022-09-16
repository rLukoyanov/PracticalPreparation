import React, { useState, useEffect } from "react";
import getMonth from "date-fns/getMonth";
import getDaysInMonth from "date-fns/getDaysInMonth";

import Button from "../Common/Button/Button";
import ProfileSelect from "./ProfileSelect";

import styles from "./profile.module.scss";

export default function ChangeDataBlock({
    name = "userName",
    lastName = "userSurname",
    email = "test@mail.ru",
    birthday = "111111111",
    ed = "Среднее образование",
    lang = ["Родной язык(родной)"],
}) {
    const [year] = useState(
        birthday[6] + birthday[7] + birthday[8] + birthday[9]
    );

    console.log(birthday[3] + birthday[4]);
    const [month, setMonth] = useState(
        getMonth(
            new Date(
                year,
                Number(birthday[3] + birthday[4] - 1),
                birthday[0] + birthday[1]
            )
        )
    );
    const [day] = useState(birthday[0] + birthday[1]);

    let days = [];

    let maxDayInMonth = getDaysInMonth(month);
    for (let i = 1; i <= maxDayInMonth; i++) {
        days.push(i);
    }

    useEffect(() => {
        maxDayInMonth = getDaysInMonth(month);
        days = [];
        for (let i = 1; i <= maxDayInMonth; i++) {
            days.push(i);
        }
    }, [month, year]);

    const months = [
        "января",
        "февраля",
        "марта",
        "апреля",
        "мая",
        "июня",
        "июля",
        "августа",
        "сентября",
        "октября",
        "ноября",
        "декабря",
    ];

    const DATE = new Date();

    const years = [];
    for (let i = 1980; i <= DATE.getFullYear() - 18; i++) {
        years.push(i);
    }

    const onMonthChange = (value) => {
        setMonth(new Date(year, months.indexOf(value), day));
    };

    const onDayChange = (value) => {
        setMonth(new Date(year, month, value));
    };

    const onYearChange = (value) => {
        setMonth(new Date(year, month, value));
    };

    return (
        <div className={styles.inputBlock}>
            <label>
                <span>Имя</span>
                <input value={name} />
            </label>
            <label>
                <span>Фамилия</span>
                <input value={lastName} />
            </label>
            <label>
                <span>E-mail</span>
                <input value={email} />
            </label>
            <label>
                <span>Дата рождения</span>
                <div>
                    <ProfileSelect
                        className={`${styles.customSelect} ${styles.day}`}
                        defaultValue={day}
                        values={days}
                        onChange={onDayChange}
                        disabled
                    />
                    <ProfileSelect
                        className={`${styles.customSelect} ${styles.birth}`}
                        defaultValue={months[month]}
                        values={months}
                        onChange={onMonthChange}
                        disabled
                    />
                    <ProfileSelect
                        className={`${styles.customSelect} ${styles.birth}`}
                        defaultValue={year}
                        values={years}
                        onChange={onYearChange}
                        disabled
                    />
                </div>
            </label>
            <label>
                <span>Образование</span>
                <input value={ed} />
            </label>
            <label>
                <span>Знание языков</span>
                <div className={styles.column}>
                    {lang.map((item, index) => (
                        <input value={lang[index]} />
                    ))}
                </div>
            </label>
            <Button className={styles.saveBtn} disabled>
                Сохранить
            </Button>
        </div>
    );
}
