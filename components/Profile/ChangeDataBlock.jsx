import React, { useState, useEffect } from 'react';
import getMonth from 'date-fns/getMonth';
import getDaysInMonth from 'date-fns/getDaysInMonth';

import styles from './profile.module.scss';
import ProfileSelect from './ProfileSelect';

export default function ChangeDataBlock({
  name = 'userName',
  surname = 'userSurname',
  email = 'test@mail.ru',
  date = '111111111',
  ed = '',
}) {
  const [year] = useState(date[0] + date[1] + date[2] + date[3]);
  const [month, setMonth] = useState(
    getMonth(new Date(year, Number(date[4] + date[5] - 1), date[6] + date[7])),
  );
  const [day] = useState(date[6] + date[7]);

  let days = [];

  let maxDayInMonth = getDaysInMonth(month);
  for (let i = 1; i <= maxDayInMonth; i++) {
    days.push(i);
  }

  useEffect(() => {
    maxDayInMonth = getDaysInMonth(month);
    days = [];
    for (let i = 1; i <= maxDayInMonth; i++) {
      days.push(i);
    }
  }, [month, year]);

  const months = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
  ];

  const DATE = new Date();

  const years = [];
  for (let i = 1980; i <= DATE.getFullYear() - 18; i++) {
    years.push(i);
  }

  const onMonthChange = (value) => {
    setMonth(new Date(year, months.indexOf(value), day));
  };

  const onDayChange = (value) => {
    setMonth(new Date(year, month, value));
  };

  const onYearChange = (value) => {
    setMonth(new Date(year, month, value));
  };

  return (
    <div className={styles.inputBlock}>
      <label>
        <span>Имя</span>
        <input disabled value={name} />
      </label>
      <label>
        <span>Фамилия</span>
        <input disabled value={surname} />
      </label>
      <label>
        <span>E-mail</span>
        <input disabled value={email} />
      </label>
      <label>
        <span>Дата рождения</span>
        <div>
          <ProfileSelect
            className={`${styles.customSelect} ${styles.day}`}
            defaultValue={day}
            values={days}
            onChange={onDayChange}
          />
          <ProfileSelect
            className={`${styles.customSelect} ${styles.birth}`}
            defaultValue={months[month]}
            values={months}
            onChange={onMonthChange}
          />
          <ProfileSelect
            className={`${styles.customSelect} ${styles.birth}`}
            defaultValue={year}
            values={years}
            onChange={onYearChange}
          />
        </div>
      </label>
    </div>
  );
}
