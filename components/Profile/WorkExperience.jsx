import React, { useContext, useEffect, useState } from "react";

import styles from "./profile.module.scss";
import authContext from "../../store/auth-context";
import axios from "axios";

export default function WorkExperience() {
    const authCtx = useContext(authContext);
    const { userId } = authCtx.userData;

    const [expirience, setExpirience] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            const { data } = await axios.post("api/user/expirience", {
                userId: userId,
            });
            setExpirience(await data);

            console.log(data);
        };
        fetch();
    }, []);
    return (
        <div className={styles.work}>
            {expirience.length === 0 ? (
                <span style={{ marginLeft: "30px" }}>Подождите...</span>
            ) : (
                <></>
            )}
            {expirience.map((item) => (
                <div className={styles.exp}>
                    <div className={styles.content}>
                        <div className={styles.header}>
                            <h3 className={styles.blue}>{item.position}</h3>
                            <h3 className={styles.white}>{item.company}</h3>
                        </div>

                        <pre
                            className={styles.text}
                            dangerouslySetInnerHTML={{
                                __html: item.description,
                            }}
                        ></pre>
                    </div>
                </div>
            ))}
        </div>
    );
}
