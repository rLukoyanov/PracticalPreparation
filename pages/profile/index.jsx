import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';

import ContactsBlock from '../../components/Profile/ContactsBlock';
import ChangeDataBlock from '../../components/Profile/ChangeDataBlock';
import AuthContext from '../../store/auth-context';

import styles from '../../components/Profile/profile.module.scss';

import protocol from '../../protocol';

export default function ProfilePage({ host = '' }) {
  const authCtx = useContext(AuthContext);
  const [userData, setUserData] = useState({
    name: 'userName',
    lastname: 'userLastname',
    surname: 'userSurname',
  });

  const [isLoading, setIsLoading] = useState(true);
  const { id = '0', email, avatar } = authCtx.userData;

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
                : 'https://sun9-8.userapi.com/impg/sTJ5sw3Wle8z4RNuR7hhwjf86lCWr27L8BRKIQ/0l02DRLY_Rs.jpg?size=1280x881&quality=95&sign=93d17be63082dcf011d1d877ebe9f9ff&type=album'
            }
            alt="avatar"
          />
          <h3>
            <div>{`${userData.name} ${userData.surname}`}</div>
            <p>{`id: ${id}`}</p>
          </h3>
        </div>

        <div className={styles.mainUserData}>
          <div className={styles.points}>
            <div className={styles.name}>
              {userData.points ? <span>{userData.points}</span> : 0}
              <p>Баллы</p>
            </div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0)">
                <path
                  d="M5.41793 23.1645C4.83893 23.4615 4.18193 22.941 4.29893 22.2765L5.54393 15.1815L0.259433 10.1475C-0.234067 9.6765 0.0224333 8.8155 0.683933 8.7225L8.03093 7.6785L11.3069 1.188C11.6024 0.603002 12.4019 0.603002 12.6974 1.188L15.9734 7.6785L23.3204 8.7225C23.9819 8.8155 24.2384 9.6765 23.7434 10.1475L18.4604 15.1815L19.7054 22.2765C19.8224 22.941 19.1654 23.4615 18.5864 23.1645L11.9999 19.7805L5.41643 23.1645H5.41793Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
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
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const { req } = context;

  return {
    props: { host: req.headers.host },
  };
};
