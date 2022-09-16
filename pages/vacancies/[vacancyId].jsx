import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

import AuthContext from "../../store/auth-context";
import Button from "../../components/Common/Button/Button";

import styles from "../../components/News/Event.module.scss";

import protocol from "../../protocol";

export default function NewsItemPage({
    volCount = 0,
    place = " ",
    tgId = "",
    err = "",
    name = "",
    vacancyId = 1,
}) {
    const router = useRouter();
    const [alert, setAlert] = useState(false);
    const [alertText, setAlertText] = useState("Вы успешно отправили отклик!");
    const [isActive, setIsActive] = useState(false);
    const authCtx = useContext(AuthContext);
    const userId = authCtx.userData.id;

    const [vacancy, setVacancy] = useState({
        address: "ул. Юности, 14-б",
        contacts: "",
        description: "",
        title: "",
        salary: "",
    });

    useEffect(() => {
        const fetchVacancy = async () => {
            const { data } = await axios.post("/api/vacancy/getVacancyById", {
                vacancyId,
            });
            console.log(data);
            setVacancy(data);
        };

        fetchVacancy();
    }, []);

    const closeAlert = () => {
        setAlert(false);
    };

    const returnBack = () => {
        router.push("/vacancies");
    };

    console.log(err);

    const onRegOnIvent = async () => {
        setIsActive(true);

        try {
            setAlert(true);
        } catch (err1) {
            console.log("fail to registration on event", err1);
        }
    };

    const PLACE = place.slice(0);

    return (
        <div className={styles.event}>
            <div className={styles.leftBlock}>
                <h2>{vacancy.title}</h2>
                <div className={styles.card}>
                    Требуемый опыт работы: {vacancy.expTime} <br />
                    Полная занятость, полный день <br />
                    <br />
                    {vacancy.description}
                    <h2>Обязанности:</h2>
                    <ul>
                        <li>Контроль работы курьеров</li>
                        <li>Прием и отправка грузов на складе</li>
                        <li>Замена курьеров в отпуске по маршруту</li>
                        <li>
                            Доставка и сбор экспресс почты (корреспонденции,
                            посылок) по городу, области
                        </li>
                        <li>
                            Работа с документацией и с ПО Компании (на базе 1С)
                        </li>
                    </ul>
                    <h2>Требования:</h2>
                    <ul>
                        <li>Умение вести документацию</li>
                        <li>Ответственность, пунктуальность, аккуратность.</li>
                    </ul>
                    <h2>Условия:</h2>
                    <ul>
                        <li>Работа разъездная, а также на складе и офисе.</li>
                        <li>
                            Оплата ГСМ, амортизация автомобиля, служебная
                            мобильная связь
                        </li>
                        <li>Официальное трудоустройство по ТК РФ</li>
                        <li>Пятидневная рабочая неделя 5/2</li>
                        <li>Рабочий день с 8.00 до 17.00</li>
                    </ul>
                    <h2>Ключевые навыки:</h2>
                    <ul>
                        <li>Умение работать в команде</li>
                        <li>Мобильность</li>
                        <li>Опытный пользователь ПК</li>

                        <li>Знание офисных программ</li>
                        <li>Навыки работы с оргтехникой</li>
                        <li>Электронная почта</li>
                        <li>Управление курьерской службой</li>
                    </ul>
                </div>
            </div>

            <div className={styles.registrationBlock}>
                <div className={styles.event_name}>{name}</div>
                <ul>
                    <p>
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M7.57143 1C10.6486 1 13.1429 3.49429 13.1429 6.57143C13.1429 8.92571 11.4886 11.4914 8.22286 14.296C8.04127 14.452 7.80975 14.5377 7.57036 14.5375C7.33097 14.5372 7.0996 14.4512 6.91829 14.2949L6.70229 14.1074C3.58114 11.376 2 8.87314 2 6.57143C2 3.49429 4.49429 1 7.57143 1ZM7.57143 1.85714C6.32112 1.85714 5.12203 2.35383 4.23793 3.23793C3.35383 4.12203 2.85714 5.32112 2.85714 6.57143C2.85714 8.57257 4.31314 10.8783 7.26514 13.4611L7.47829 13.6457C7.5042 13.668 7.53725 13.6803 7.57143 13.6803C7.60561 13.6803 7.63866 13.668 7.66457 13.6457C10.7594 10.9874 12.2857 8.62 12.2857 6.57143C12.2857 5.95234 12.1638 5.33931 11.9269 4.76735C11.6899 4.19539 11.3427 3.67569 10.9049 3.23793C10.4672 2.80016 9.94747 2.45291 9.37551 2.216C8.80354 1.97908 8.19052 1.85714 7.57143 1.85714ZM7.57143 4.42857C8.13975 4.42857 8.68479 4.65434 9.08666 5.0562C9.48852 5.45806 9.71429 6.00311 9.71429 6.57143C9.71429 7.13975 9.48852 7.68479 9.08666 8.08666C8.68479 8.48852 8.13975 8.71429 7.57143 8.71429C7.00311 8.71429 6.45806 8.48852 6.0562 8.08666C5.65434 7.68479 5.42857 7.13975 5.42857 6.57143C5.42857 6.00311 5.65434 5.45806 6.0562 5.0562C6.45806 4.65434 7.00311 4.42857 7.57143 4.42857ZM7.57143 5.28571C7.23044 5.28571 6.90341 5.42117 6.66229 5.66229C6.42117 5.90341 6.28571 6.23044 6.28571 6.57143C6.28571 6.91242 6.42117 7.23945 6.66229 7.48057C6.90341 7.72168 7.23044 7.85714 7.57143 7.85714C7.91242 7.85714 8.23945 7.72168 8.48057 7.48057C8.72168 7.23945 8.85714 6.91242 8.85714 6.57143C8.85714 6.23044 8.72168 5.90341 8.48057 5.66229C8.23945 5.42117 7.91242 5.28571 7.57143 5.28571Z"
                                fill="#6495ED"
                            />
                        </svg>
                        {vacancy.address}
                        {place.substring(0, 16)}
                        {PLACE.length >= 16 ? "..." : ""}
                    </p>
                    <p>
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M7.99935 8.00004C9.8403 8.00004 11.3327 6.50766 11.3327 4.66671C11.3327 2.82576 9.8403 1.33337 7.99935 1.33337C6.1584 1.33337 4.66602 2.82576 4.66602 4.66671C4.66602 6.50766 6.1584 8.00004 7.99935 8.00004Z"
                                stroke="#6495ED"
                            />
                            <path
                                d="M11.333 9.33337H11.5677C12.0551 9.33351 12.5257 9.51162 12.891 9.83423C13.2563 10.1568 13.4913 10.6018 13.5517 11.0854L13.8124 13.168C13.8358 13.3557 13.8191 13.5461 13.7633 13.7268C13.7075 13.9074 13.6139 14.0742 13.4888 14.2159C13.3636 14.3576 13.2098 14.4711 13.0374 14.5489C12.8651 14.6266 12.6781 14.6667 12.489 14.6667H3.51038C3.3213 14.6667 3.13438 14.6266 2.96201 14.5489C2.78965 14.4711 2.63578 14.3576 2.51063 14.2159C2.38548 14.0742 2.29191 13.9074 2.23612 13.7268C2.18033 13.5461 2.1636 13.3557 2.18705 13.168L2.44705 11.0854C2.50751 10.6015 2.74266 10.1564 3.10827 9.83379C3.47388 9.51115 3.94477 9.33319 4.43238 9.33337H4.66638"
                                stroke="#6495ED"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                        <span>{Number(vacancy.contacts)}</span>
                    </p>
                </ul>
                <Button
                    disabled={isActive}
                    type="button"
                    onClick={onRegOnIvent}
                    className={styles.regBtn}
                >
                    Откликнуться
                </Button>
            </div>
            {alert ? (
                <div className={styles.alertBG}>
                    <div className={styles.alert}>
                        <h1>Благодарим!</h1>
                        <p>
                            {alertText}
                            <br />
                            <a href={tgId}>{tgId}</a>
                        </p>
                        <div className={styles.buttons}>
                            <Button
                                className={styles.alertButton}
                                onClick={returnBack}
                            >
                                К вакансиям
                            </Button>
                            <Button
                                className={styles.alertButton}
                                onClick={closeAlert}
                            >
                                Хорошо
                            </Button>
                        </div>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </div>
    );
}

export const getServerSideProps = async (context) => {
    const { vacancyId } = context.params;
    const { req } = context;
    try {
        return {
            props: {
                vacancyId: vacancyId,
                hostName: req.headers.host,
            },
        };
    } catch (err) {
        return {
            props: {
                err: JSON.stringify(err),
            },
        };
    }
};
