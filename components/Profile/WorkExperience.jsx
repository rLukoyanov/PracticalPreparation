import React, { useState } from "react";

import styles from "./profile.module.scss";

export default function WorkExperience() {
    return (
        <div className={styles.work}>
            <div className={styles.exp}>
                <div className={styles.content}>
                    <div className={styles.header}>
                        <h3 className={styles.blue}>React developer</h3>
                        <h3 className={styles.white}>Volonteria (Казань)</h3>
                    </div>

                    <pre
                        className={styles.text}
                        dangerouslySetInnerHTML={{
                            __html: `
    Полная реализация сайта и сайта администраторов.
    - Адаптивная верстка. 
    - Работа c WordPress
    - Работа c RestAPI
    - Реализация ssr на Next.js
    - Реализация проксирования

    Стек:
    - ReactJS
    - Next.js
    - Axios
    - date-fns
    - antd
    - sass
                    `,
                        }}
                    ></pre>
                </div>
            </div>
        </div>
    );
}
