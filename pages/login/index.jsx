import React, { useState, useContext, useEffect } from "react";
import * as pino from "pino";

import { Checkbox } from "antd";
import Input from "../../components/Common/Input/Input";
import Button from "../../components/Common/Button/Button";
import AuthContext from "../../store/auth-context";

import styles from "../../components/Login/Login.module.scss";
import axios from "axios";

export default function LoginPage() {
    const logger = pino({
        prettyPrint: true,
    });

    const [reg, setReg] = useState(false);
    const [isReg, setIsReg] = useState(false);

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
    }, [
        enteredLogin,
        enteredPassword,
        enteredEducation,
        enteredEmail,
        enteredNumber,
        enteredBirthday,
        enteredName,
        enteredSurname,
    ]);

    const toggleReg = () => {
        setReg(!reg);
        setLoading(false);
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
            logger.info("start getting user data");
            setLoading(true);

            const answ = await authCtx.onLogin(enteredLogin, enteredPassword);
            setError(await answ);
        } else {
            setError("?????????????????? ????????");
        }
    };

    const onRegister = async () => {
        const year =
            enteredBirthday[0] +
            enteredBirthday[1] +
            enteredBirthday[2] +
            enteredBirthday[3];
        const mounth = enteredBirthday[5] + enteredBirthday[6];
        const day = enteredBirthday[8] + enteredBirthday[9];
        const refactoringDate = `${day}/${mounth}/${year}`;
        try {
            const { data } = await axios.post("/api/user/createUser", {
                enteredName,
                enteredSurname,
                enteredPassword,
                enteredNumber,
                enteredBirthday: refactoringDate,
                enteredEmail,
                enteredEducation,
            });
            if (data === "?????????????? ???????????? ???????? ??????????????") {
                setIsReg(true);
            }
        } catch (err) {
            setError(err);
        }
        setLoading(true);
    };

    return (
        <div className={styles.background}>
            {reg ? (
                <form className={styles.login}>
                    <div className={styles.header}>
                        <h1>?????????????????????? ???? ??????????</h1>
                        <span>Production Practice</span>
                    </div>
                    <Input
                        required
                        name="??????"
                        type="text"
                        placeholder="?????????????? ???????? ??????"
                        onChange={enteredNameHandler}
                        value={enteredName}
                        className={styles.input}
                    />
                    <Input
                        required
                        name="??????????????"
                        type="text"
                        placeholder="?????????????? ???????? ??????????????"
                        onChange={enteredSurnameHandler}
                        value={enteredSurname}
                        className={styles.input}
                    />
                    <Input
                        required
                        name="???????? ????????????????"
                        type="date"
                        placeholder="06.12.2000"
                        onChange={enteredBirthdayHandler}
                        value={enteredBirthday}
                        className={styles.input}
                    />

                    <Input
                        required
                        name="?????????? ????????????????"
                        type="number"
                        placeholder="965-748-89-90"
                        onChange={enteredNumberHandler}
                        value={enteredNumber}
                        endlessType="phoneNumber"
                        className={styles.input}
                    />
                    <Input
                        required
                        name="?????????????? ??????????????????"
                        type="text"
                        placeholder="?????????????? ???????????????? ???????????? ???????????????? ??????????????????"
                        onChange={enteredEduHandler}
                        value={enteredEducation}
                        className={styles.input}
                    />
                    <Input
                        required
                        name="?????????? ?????????????????????? ??????????"
                        type="email"
                        placeholder="?????????????? ?????? e-mail"
                        onChange={enteredEmailHandler}
                        value={enteredEmail}
                        className={styles.input}
                    />
                    <Input
                        required
                        name="????????????"
                        type={inputType}
                        placeholder="********"
                        onChange={enteredPasswordHandler}
                        value={enteredPassword}
                        onClick={onShowPassword}
                        endlessType="password"
                        className={styles.input}
                    />
                    {reg ?? <p className={styles.error}>{error}</p>}
                    {isReg ? (
                        <p style={{ color: "green" }}>
                            ???? ?????????????? ????????????????????????????????????
                        </p>
                    ) : (
                        <></>
                    )}
                    <div className={styles.checkboxPassword}>
                        <label className={styles.checkText}>
                            <Checkbox />
                            <span className={styles.check}>
                                ?????? ???????????????? ???? ?????????????????? ???????????????????????? ????????????
                            </span>
                        </label>
                    </div>
                    <div className={styles.checkboxPassword}>
                        <label className={styles.checkText}>
                            <Checkbox />
                            <span className={styles.check}>
                                ???????????????? ???????????????????????????????? ???????????????????? ?? ????????????????
                                ????????????????????????????????????
                            </span>
                        </label>
                    </div>
                    <Button disabled={loading} onClick={onRegister}>
                        ??????????????????????
                    </Button>
                    <p className={styles.footer}>
                        ???????? ???????????????
                        <button
                            className={styles.link}
                            type="button"
                            onClick={toggleReg}
                        >
                            ??????????
                        </button>
                    </p>
                </form>
            ) : (
                <form className={styles.login}>
                    <div className={styles.header}>
                        <h1>?????????? ???????????????????? ???? ????????</h1>
                        <span>Production Practice</span>
                    </div>
                    <Input
                        required
                        name="??????????"
                        type="text"
                        placeholder="?????????????? ?????? e-mail"
                        onChange={enteredLoginHandler}
                        value={enteredLogin}
                        className={styles.input}
                    />
                    <Input
                        required
                        name="????????????"
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
                            <Checkbox />
                            <span className={styles.remember}>
                                ?????????????????? ????????
                            </span>
                        </label>
                        <a href="/profile">???????????? ?????????????</a>
                    </div>
                    <Button disabled={loading} onClick={onFinish}>
                        ??????????
                    </Button>
                    <p className={styles.footer}>
                        ?????? ?????????????????
                        <button
                            className={styles.link}
                            type="button"
                            onClick={toggleReg}
                        >
                            ??????????????????????
                        </button>
                    </p>
                </form>
            )}
        </div>
    );
}
