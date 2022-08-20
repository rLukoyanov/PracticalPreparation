import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

import ContactsBlock from "../../components/Profile/ContactsBlock";
import ChangeDataBlock from "../../components/Profile/ChangeDataBlock";
import AuthContext from "../../store/auth-context";

import styles from "../../components/Profile/profile.module.scss";

import protocol from "../../protocol";
import AchievesBlock from "../../components/Profile/AchievesBlock";
import WorkExperience from "../../components/Profile/WorkExperience";

export default function ProfilePage({ host = "" }) {
    const authCtx = useContext(AuthContext);
    const [userData, setUserData] = useState({
        name: "userName",
        lastname: "userLastname",
        surname: "userSurname",
    });

    const [isLoading, setIsLoading] = useState(true);
    const { id = "0", email, avatar } = authCtx.userData;

    // useEffect(() => {
    //   const fetchUserData = async () => {
    //     const { data } = await axios.post(`${protocol}${host}/api/user/login`, {
    //       id,
    //     });

    //     const filteredUserData = {
    //       name: data.userInfo.name,
    //       lastname: data.userInfo.lastname,
    //       surname: data.userInfo.surname,

    //       date: data.userInfo.Dateof_birth,
    //       phone: data.userInfo.Phone_number,
    //       telegram: data.userInfo.telegram_id,
    //       workPlace: data.userInfo.ed_organization,
    //       gender: data.userInfo.gender,
    //       ed: data.userInfo.ed_organization,
    //       address: data.userInfo.address,

    //       points: data.userPoints.mycred_default,
    //       history: data.history,
    //       hours: data.hours.mycred_hours,
    //     };
    //     setUserData(filteredUserData);
    //     setIsLoading(false);
    //   };

    //   fetchUserData();
    // }, []);

    return (
        <div className={styles.profile}>
            <div className={styles.leftBlock}>
                <div className={styles.avatarBlock}>
                    <img
                        className={styles.avatar}
                        src={
                            avatar
                                ? avatar
                                : "https://sun9-8.userapi.com/impg/sTJ5sw3Wle8z4RNuR7hhwjf86lCWr27L8BRKIQ/0l02DRLY_Rs.jpg?size=1280x881&quality=95&sign=93d17be63082dcf011d1d877ebe9f9ff&type=album"
                        }
                        alt="avatar"
                    />
                    <h3>
                        <div>{`${userData.name} ${userData.surname}`}</div>
                        <p>{`id: ${id}`}</p>
                    </h3>
                </div>

                <ContactsBlock
                    email={email}
                    phone={userData.phone}
                    telegram={userData.telegram}
                    address={userData.address}
                />
            </div>
            <div className={styles.rightBlock}>
                <ChangeDataBlock
                    name={userData.name}
                    surname={userData.surname}
                    email={email}
                    date={userData.date}
                    gender={userData.gender}
                />
            </div>

            <AchievesBlock />
            <WorkExperience />
        </div>
    );
}

export const getServerSideProps = async (context) => {
    const { req } = context;

    return {
        props: { host: req.headers.host },
    };
};
