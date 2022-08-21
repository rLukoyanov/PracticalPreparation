import React from "react";

import styles from "./profile.module.scss";

export default function WorkExperience() {
    return (
        <div className={styles.work}>
            <div className={styles.header}>
                <h3>Опыт Работы</h3>
                <button>
                    <svg
                        width="31"
                        height="31"
                        viewBox="0 0 31 31"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect width="31" height="31" rx="8" fill="#6495ED" />
                        <path
                            d="M24.9513 16.256C24.9513 17.0017 24.3468 17.6062 23.6011 17.6062H18.8502C17.7457 17.6062 16.8502 18.5016 16.8502 19.6062V24.3571C16.8502 25.1028 16.2457 25.7072 15.5 25.7072C14.7544 25.7072 14.1499 25.1028 14.1499 24.3571V19.6062C14.1499 18.5016 13.2544 17.6062 12.1499 17.6062H7.399C6.65332 17.6062 6.04883 17.0017 6.04883 16.256C6.04883 15.5103 6.65332 14.9059 7.399 14.9059H12.1499C13.2544 14.9059 14.1499 14.0104 14.1499 12.9059V8.15498C14.1499 7.4093 14.7544 6.80481 15.5 6.80481C16.2457 6.80481 16.8502 7.4093 16.8502 8.15498V12.9059C16.8502 14.0104 17.7457 14.9059 18.8502 14.9059H23.6011C24.3468 14.9059 24.9513 15.5103 24.9513 16.256Z"
                            fill="white"
                        />
                    </svg>
                </button>
            </div>
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
