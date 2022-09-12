import React from "react";

import styles from "./profile.module.scss";

export default function WorkExperience({ experience = [] }) {
    return (
        <div className={styles.work}>
            {experience.length === 0 ? (
                <span style={{ marginLeft: "30px" }}>Подождите...</span>
            ) : (
                <></>
            )}
            {experience.map((item) => (
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
