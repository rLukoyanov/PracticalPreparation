import React, { useContext, useState } from "react";

import axios from "axios";
import AuthContext from "../../store/auth-context";

import Input from "../Common/Input/Input";
import Button from "../Common/Button/Button";

import styles from "./profile.module.scss";

export default function AddWorkExp({ onClose, refreshWorkExp }) {
    const authCtx = useContext(AuthContext);
    const { userId } = authCtx.userData;

    const [title, setTitle] = useState("");
    const [place, setPlace] = useState("");
    const [details, setDetails] = useState("");

    const handleChangeTitle = (event) => {
        setTitle(event.target.value);
    };

    const handleChangePlace = (event) => {
        setPlace(event.target.value);
    };

    const handleChangeDetails = (event) => {
        setDetails(event.target.value);
    };

    const onAddExperience = async () => {
        console.log(userId, title, place, details);
        const { data } = await axios.post("/api/user/createExperience", {
            userId,
            title,
            place,
            details,
        });
        onClose();
        refreshWorkExp();
    };

    return (
        <div className={styles.addWorkExp}>
            <div className={styles.card}>
                <button onClick={onClose}>Закрыть</button>
                <div>
                    <Input
                        value={title}
                        name="Должность"
                        className={styles.input}
                        onChange={handleChangeTitle}
                    />
                </div>
                <div>
                    <Input
                        value={place}
                        name="Место Работы"
                        className={styles.input}
                        onChange={handleChangePlace}
                    />
                </div>
                <div>
                    <h2>Детали</h2>
                    <textarea
                        value={details}
                        className={styles.textarea}
                        onChange={handleChangeDetails}
                    />
                </div>
                <Button onClick={onAddExperience} className={styles.btn}>
                    Разместить
                </Button>
            </div>
        </div>
    );
}
