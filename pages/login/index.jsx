import React, { useState, useContext, useEffect } from "react";
import * as pino from "pino";

import { Checkbox } from "antd";
import Input from "../../components/Common/Input/Input";
import Button from "../../components/Common/Button/Button";
import AuthContext from "../../store/auth-context";

import styles from "../../components/Login/Login.module.scss";

export default function LoginPage() {
    const logger = pino({
        prettyPrint: true,
    });

    const [reg, setReg] = useState(false);

    const [enteredLogin, setEnteredLogin] = useState("");
    const [enteredPassword, setEnteredPassword] = useState("");
    const [enteredName, setEnteredName] = useState("");
    const [enteredSurname, setEnteredSurname] = useState("");
    const [enteredBirthday, setEnteredBirthday] = useState("");
    const [enteredNumber, setEnteredNumber] = useState("");
    const [enteredEmail, setEnteredEmail] = useState("");
    const [enteredEducation, setEnteredEducation] = useState("");

    const [loading, setLoading] = useState("");
    const [error, setError] = useState(null);

    const [inputType, setInputType] = useState("password");

    const authCtx = useContext(AuthContext);

    useEffect(() => {
        setLoading(false);
    }, [enteredLogin, enteredPassword]);

    const toggleReg = () => {
        setReg(!reg);
    };

    const enteredLoginHandler = (event) => {
        setEnteredLogin(event.target.value);
    };

    const enteredPasswordHandler = (event) => {
        setEnteredPassword(event.target.value);
    };

    const enteredNameHandler = (event) => {
        setEnteredName(event.target.value);
    };

    const enteredSurnameHandler = (event) => {
        setEnteredSurname(event.target.value);
    };

    const enteredBirthdayHandler = (date, dateString) => {
        console.log(date, dateString);
        setEnteredBirthday(dateString);
    };

    const enteredNumberHandler = (event) => {
        setEnteredNumber(event.target.value);
    };

    const enteredEmailHandler = (event) => {
        setEnteredEmail(event.target.value);
    };

    const enteredEduHandler = (event) => {
        setEnteredEducation(event.target.value);
    };

    const onShowPassword = () => {
        setInputType(inputType === "text" ? "password" : "text");
    };

    const onFinish = async () => {
        if (enteredLogin && enteredPassword) {
            setLoading(true);
            logger.info("start getting user data");
            // get user data
            authCtx.onLogin(enteredLogin, enteredPassword);
        } else {
            setError("Заполните поля");
        }
    };

    const onRegister = () => {
        console.group("mainUserData");
        console.log("name:", enteredName);
        console.log("surname:", enteredSurname);
        console.log("password:", enteredPassword);
        console.group("secondaryUserData");
        console.log("birthday:", enteredBirthday);
        console.log("phoneNumber:", enteredNumber);
        console.log("email:", enteredEmail);
        console.log("education:", enteredEducation);
    };

    return (
        <div className={styles.background}>
            {reg ? (
                <form className={styles.login}>
                    <div className={styles.header}>
                        <h1>Регистрация на сайте</h1>
                        <span>Production Practice</span>
                    </div>
                    <Input
                        required
                        name="Имя"
                        type="text"
                        placeholder="Введите свое имя"
                        onChange={enteredNameHandler}
                        value={enteredName}
                        className={styles.input}
                    />
                    <Input
                        required
                        name="Фамилия"
                        type="text"
                        placeholder="Введите свою фамилию"
                        onChange={enteredSurnameHandler}
                        value={enteredSurname}
                        className={styles.input}
                    />
                    <Input
                        required
                        name="Дата рождения"
                        type="date"
                        placeholder="06.12.2000"
                        onChange={enteredBirthdayHandler}
                        value={enteredBirthday}
                        className={styles.input}
                    />

                    <Input
                        required
                        name="Номер телефона"
                        type="number"
                        placeholder="965-748-89-90"
                        onChange={enteredNumberHandler}
                        value={enteredNumber}
                        endlessType="phoneNumber"
                        className={styles.input}
                    />
                    <Input
                        required
                        name="Учебное заведение"
                        type="text"
                        placeholder="Введите название вашего учебного заведения"
                        onChange={enteredEduHandler}
                        value={enteredEducation}
                        className={styles.input}
                    />
                    <Input
                        required
                        name="Адрес электронной почты"
                        type="email"
                        placeholder="Введите ваш e-mail"
                        onChange={enteredEmailHandler}
                        value={enteredEmail}
                        className={styles.input}
                    />
                    <Input
                        required
                        name="Пароль"
                        type={inputType}
                        placeholder="********"
                        onChange={enteredPasswordHandler}
                        value={enteredPassword}
                        onClick={onShowPassword}
                        endlessType="password"
                        className={styles.input}
                    />
                    <p className={styles.error}>{error}</p>
                    <div className={styles.checkboxPassword}>
                        <label className={styles.checkText}>
                            <Checkbox />
                            <span>
                                Даю согласие на обработку персональных данных
                            </span>
                        </label>
                    </div>
                    <div className={styles.checkboxPassword}>
                        <label className={styles.checkText}>
                            <Checkbox />
                            <span>
                                Принимаю Пользовательское соглашение и Политику
                                конфиденциальности
                            </span>
                        </label>
                    </div>
                    <Button disabled={loading} onClick={onRegister}>
                        Регистрация
                    </Button>
                    <p className={styles.footer}>
                        Есть аккаунт?
                        <button
                            className={styles.link}
                            type="button"
                            onClick={toggleReg}
                        >
                            Войти
                        </button>
                    </p>
                </form>
            ) : (
                <form className={styles.login}>
                    <div className={styles.header}>
                        <h1>Добро пожаловать на сайт</h1>
                        <span>Production Practice</span>
                    </div>
                    <Input
                        required
                        name="Логин"
                        type="text"
                        placeholder="Введите ваш e-mail"
                        onChange={enteredLoginHandler}
                        value={enteredLogin}
                        className={styles.input}
                    />
                    <Input
                        required
                        name="Пароль"
                        type={inputType}
                        placeholder="********"
                        onChange={enteredPasswordHandler}
                        value={enteredPassword}
                        onClick={onShowPassword}
                        endlessType="password"
                        className={styles.input}
                    />
                    <p className={styles.error}>{error}</p>
                    <div className={styles.checkboxPassword}>
                        <label>
                            <input type="checkbox" />
                            Запомнить меня
                        </label>
                        <a href="/profile">Забыли пароль?</a>
                    </div>
                    <Button disabled={loading} onClick={onFinish}>
                        Войти
                    </Button>
                    <p className={styles.footer}>
                        Нет аккаунта?
                        <button
                            className={styles.link}
                            type="button"
                            onClick={toggleReg}
                        >
                            Регистрация
                        </button>
                    </p>
                </form>
            )}
        </div>
    );
}
