import React, { useEffect, useState } from 'react';

import axios from 'axios';
import Users from './Users';

import styles from './Rating.module.scss';

import protocol from '../../protocol';

export default function Rating({ host = '' }) {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        console.info('try to get rating');

        const { data } = await axios.get(`${protocol}${host}/api/rating`);
        const fetchUsers = data.map((item) =>
          item.volonteers.map((user) => user),
        );
        setUsers(fetchUsers);
        console.log(fetchUsers);
      } catch (err) {
        console.info(`error with getting news: ${err}`);
      }
    };
    fetchNewsData();
  }, []);
  return (
    <div className={styles.rating}>
      <div className={styles.container}>
        <p>Рейтинг компаний</p>
        <ul>
          {users.length > 0 ? <Users users={users} /> : <p>Компаний нет</p>}
        </ul>
      </div>
    </div>
  );
}
