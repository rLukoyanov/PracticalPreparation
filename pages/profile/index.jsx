import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

import ContactsBlock from "../../components/Profile/ContactsBlock";
import ChangeDataBlock from "../../components/Profile/ChangeDataBlock";
import AchievesBlock from "../../components/Profile/AchievesBlock";
import WorkExperience from "../../components/Profile/WorkExperience";
import AddWorkExp from "../../components/Profile/AddWorkExp";
import AuthContext from "../../store/auth-context";
import UserAchieves from "../../components/Profile/UserAchieves";

import styles from "../../components/Profile/profile.module.scss";

export default function ProfilePage() {
    const authCtx = useContext(AuthContext);
    const [userData, setUserData] = useState({
        name: "userName",
        lastname: "userLastname",
        surname: "userSurname",
    });

    const { userId, firstName, lastName, email, birthday, edu, phone, avatar } =
        authCtx.userData;

    const [isOpen, setIsOpen] = useState(false);
    const [tabs, setTabs] = useState("exp");

    const [experience, setExperience] = useState([]);

    const [counter, setCounter] = useState(0);

    const refreshWorkExp = () => {
        setCounter(counter + 1);
    };

    useEffect(() => {
        const getWorkExp = async () => {
            const { data } = await axios.post("api/user/expirience", {
                userId: userId,
            });

            setExperience(await data);
        };
        getWorkExp();
    }, [counter]);

    const onClose = () => {
        setIsOpen(false);
    };
    const onOpen = () => {
        setIsOpen(true);
    };

    return (
        <div className={styles.profile}>
            <div className={styles.flex}>
                <div className={styles.leftBlock}>
                    <div className={styles.avatarBlock}>
                        <img
                            className={styles.avatar}
                            src={avatar}
                            alt="avatar"
                        />
                        <h3>
                            <div>{`${firstName} ${lastName}`}</div>
                            <p>{`id: ${userId}`}</p>
                        </h3>
                    </div>

                    <ContactsBlock
                        email={email}
                        phone={phone}
                        telegram={userData.telegram}
                    />
                </div>
                <div className={styles.rightBlock}>
                    <ChangeDataBlock
                        name={firstName}
                        lastName={lastName}
                        email={email}
                        birthday={birthday}
                    />
                </div>
            </div>
            <AchievesBlock />
            <div className={styles.bottomBlock}>
                <div className={styles.tabs}>
                    <h3 onClick={() => setTabs("exp")}>Опыт Работы</h3>
                    <button onClick={onOpen}>
                        <svg
                            width="31"
                            height="31"
                            viewBox="0 0 31 31"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect
                                width="31"
                                height="31"
                                rx="8"
                                fill="#6495ED"
                            />
                            <path
                                d="M24.9513 16.256C24.9513 17.0017 24.3468 17.6062 23.6011 17.6062H18.8502C17.7457 17.6062 16.8502 18.5016 16.8502 19.6062V24.3571C16.8502 25.1028 16.2457 25.7072 15.5 25.7072C14.7544 25.7072 14.1499 25.1028 14.1499 24.3571V19.6062C14.1499 18.5016 13.2544 17.6062 12.1499 17.6062H7.399C6.65332 17.6062 6.04883 17.0017 6.04883 16.256C6.04883 15.5103 6.65332 14.9059 7.399 14.9059H12.1499C13.2544 14.9059 14.1499 14.0104 14.1499 12.9059V8.15498C14.1499 7.4093 14.7544 6.80481 15.5 6.80481C16.2457 6.80481 16.8502 7.4093 16.8502 8.15498V12.9059C16.8502 14.0104 17.7457 14.9059 18.8502 14.9059H23.6011C24.3468 14.9059 24.9513 15.5103 24.9513 16.256Z"
                                fill="white"
                            />
                        </svg>
                    </button>
                    <h3 onClick={() => setTabs("ahv")}>Достижения</h3>
                    <button onClick={onOpen}>
                        <svg
                            width="31"
                            height="31"
                            viewBox="0 0 31 31"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect
                                width="31"
                                height="31"
                                rx="8"
                                fill="#6495ED"
                            />
                            <path
                                d="M24.9513 16.256C24.9513 17.0017 24.3468 17.6062 23.6011 17.6062H18.8502C17.7457 17.6062 16.8502 18.5016 16.8502 19.6062V24.3571C16.8502 25.1028 16.2457 25.7072 15.5 25.7072C14.7544 25.7072 14.1499 25.1028 14.1499 24.3571V19.6062C14.1499 18.5016 13.2544 17.6062 12.1499 17.6062H7.399C6.65332 17.6062 6.04883 17.0017 6.04883 16.256C6.04883 15.5103 6.65332 14.9059 7.399 14.9059H12.1499C13.2544 14.9059 14.1499 14.0104 14.1499 12.9059V8.15498C14.1499 7.4093 14.7544 6.80481 15.5 6.80481C16.2457 6.80481 16.8502 7.4093 16.8502 8.15498V12.9059C16.8502 14.0104 17.7457 14.9059 18.8502 14.9059H23.6011C24.3468 14.9059 24.9513 15.5103 24.9513 16.256Z"
                                fill="white"
                            />
                        </svg>
                    </button>
                </div>
                {tabs === "exp" ? (
                    <WorkExperience experience={experience} />
                ) : (
                    <UserAchieves />
                )}

                {isOpen ? (
                    <AddWorkExp
                        refreshWorkExp={refreshWorkExp}
                        onClose={onClose}
                    />
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
}
