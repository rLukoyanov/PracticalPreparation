import React, { useState } from "react";

import Image from "next/image";
import AddWorkExp from "./AddWorkExp";

import styles from "./profile.module.scss";

export default function UserAchieves() {
    const [isOpen, setIsOpen] = useState(false);
    const onClose = () => {
        setIsOpen(false);
    };
    const onOpen = () => {
        setIsOpen(true);
    };
    return (
        <div className={styles.work}>
            <div className={styles.exp}>
                <div className={styles.content}>
                    <pre className={styles.text}>
                        Диплом призера муниципального этапа всероссийской
                        олимпида школьников по оществознанию среди 8 классов
                        2019 года.
                    </pre>
                </div>
            </div>
            {isOpen ? <AddWorkExp onClose={onClose} /> : <></>}
        </div>
    );
}
