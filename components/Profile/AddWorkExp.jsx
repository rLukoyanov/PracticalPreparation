import React from "react";

import Input from "../Common/Input/Input";

import styles from "./profile.module.scss";

export default function AddWorkExp({ onClose }) {
    return (
        <div className={styles.addWorkExp}>
            <button onClick={onClose}>Закрыть</button>
            <div>
                <Input name="Должность" className={styles.input} />
            </div>
            <div>
                <Input name="Место Работы" className={styles.input} />
            </div>
            <div>
                <h2>Детали</h2>
                <textarea className={styles.textarea} />
            </div>
        </div>
    );
}
