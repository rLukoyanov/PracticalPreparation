import React from "react";

import Rating from "../components/Main/Rating";

import styles from "../components/Main/Main.module.scss";

export default function Home({ host = "" }) {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <p>
                    <b>Производственная практика</b> — практическая часть
                    учебного процесса подготовки квалифицированных рабочих и
                    специалистов, проходящая, как правило, на различных
                    предприятиях в условиях реального производства.
                    Трансформация практики, максимально приближенной к будущей
                    профессиональной деятельности, в учебный процесс — явление
                    закономерное, обусловленное требованиями Государственных
                    образовательных стандартов РФ.
                </p>
                <Rating host={host} />
            </div>
        </div>
    );
}

export const getServerSideProps = async (context) => {
    const { req } = context;

    return {
        props: { host: req.headers.host },
    };
};
