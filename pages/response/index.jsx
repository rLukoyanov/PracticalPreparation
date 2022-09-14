import React, { useContext, useEffect, useState } from "react";

import styles from "../../components/News/News.module.scss";
import Vacancy from "../../components/vacancies/Vacancia";

import protocol from "../../protocol";
import axios from "axios";
import AuthContext from "../../store/auth-context";

export default function NewsPage() {
    const [responses, setResponses] = useState([]);
    const AuthCtx = useContext(AuthContext);
    const { userId } = AuthCtx.userData;

    useEffect(() => {
        const fetchResponse = async () => {
            const { data } = await axios.post("/api/vacancy/response", {
                userId,
            });
            console.log(data);
            setResponses(data);
        };
        fetchResponse();
    }, []);

    return (
        <div className={styles.news}>
            {responses.length === 0 ? "Подождите..." : <></>}
            {responses.map((response) => (
                <Vacancy
                    isResponse
                    text={response.vacancy_info.description}
                    title={response.vacancy_name}
                    advantages={[]}
                    price={response.vacancy_info.salary}
                />
            ))}
        </div>
    );
}

export const getServerSideProps = async (context) => {
    const { req } = context;

    return {
        props: { host: req.headers.host },
    };
};
